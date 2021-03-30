const typescript = require("typescript");
const uuid = require("uuid").v4;
const svgr = require("@svgr/core").default;
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const rimraf = require("rimraf");

const distPath = path.resolve(__dirname, "..", "src");

const getIconsRootDirectory = () => {
  const possibleNodeModules = [
    path.resolve(__dirname, "..", "node_modules"),
    path.resolve(__dirname, "..", "..", "..", "node_modules"),
  ];

  const possibleIconsRootDirectory = possibleNodeModules.map(
    (nodeModulesPath) => {
      return path.resolve(
        nodeModulesPath,
        "@utilitywarehouse",
        "customer-ui-icons"
      );
    }
  );

  while (possibleIconsRootDirectory.length > 0) {
    const nextPath = possibleIconsRootDirectory.pop();
    if (fs.existsSync(nextPath) && fs.statSync(nextPath).isDirectory()) {
      return nextPath;
    }
  }

  throw new Error(
    "Cannot find @utilitywarehouse/customer-ui-icons are you sure it's installed?"
  );
};

const iconsRootDirectory = getIconsRootDirectory();
const iconSubdirectories = ["24x24"];

const getIconName = (iconPath) => {
  const filename = path.basename(iconPath, ".svg");
  const filenameParts = filename.split("-");
  return filenameParts
    .map((part) => {
      return part[0].toUpperCase().concat(part.substring(1));
    })
    .join("");
};

const findIconsInDirectory = (directory) => {
  const iconItems = fs
    .readdirSync(directory)
    .filter((item) => item.match(/\.svg$/));

  return iconItems.map((iconItem) => path.join(directory, iconItem));
};

const discoverIcons = () => {
  const icons = [];
  iconSubdirectories.forEach((iconSubdirectory) => {
    const subdirectoryIcons = findIconsInDirectory(
      path.join(iconsRootDirectory, iconSubdirectory)
    );

    subdirectoryIcons.forEach((subdirectoryIcon) => {
      icons.push({
        subdirectory: iconSubdirectory,
        iconPath: subdirectoryIcon,
        iconName: getIconName(subdirectoryIcon),
      });
    });
  });

  return icons;
};

const cleanSVG = (svg) => {
  const idMap = {};
  let cleanedSVG = svg.replace(/id=("|')([^'"]+)/g, (_, quote, id) => {
    idMap[id] = `${uuid()}_${id}`;
    return `id=${quote}${idMap[id]}`;
  });

  Object.keys(idMap).forEach((oldId) => {
    const newId = idMap[oldId];
    cleanedSVG = cleanedSVG.replace(new RegExp(`#${oldId}`, "g"), `#${newId}`);
  });

  return cleanedSVG;
};

const createIcon = (icon) => {
  const iconDistPath = path.join(distPath, icon.subdirectory);
  const rawIcon = fs.readFileSync(icon.iconPath, { encoding: "utf8" });
  const code = svgr.sync(
    cleanSVG(rawIcon),
    {
      icon: true,
      typescript: true,
      prettier: true,
      svgo: true,
      svgoConfig: {
        plugins: [
          {
            cleanupIds: true,
          },
        ],
      },
    },
    { componentName: icon.iconName }
  );

  fs.writeFileSync(path.resolve(iconDistPath, `${icon.iconName}.tsx`), code, {
    encoding: "utf8",
  });
};

const createIcons = (icons) => {
  icons.forEach((icon) => {
    createIcon(icon);
  });
};

const getExportNodes = (icons) => {
  const { factory } = typescript;
  return icons.map((icon) => {
    return factory.createExportDeclaration(
      undefined,
      undefined,
      false,
      factory.createNamedExports([
        factory.createExportSpecifier(
          factory.createIdentifier("default"),
          factory.createIdentifier(icon.iconName)
        ),
      ]),
      factory.createStringLiteral(`./${icon.subdirectory}/${icon.iconName}`)
    );
  });
};

const generateIndex = (icons) => {
  const indexFile = path.resolve(distPath, "index.ts");
  const nodes = [...getExportNodes(icons)];
  const nodeArray = typescript.factory.createNodeArray(nodes, true);
  const printer = typescript.createPrinter({
    newLine: typescript.NewLineKind.LineFeed,
    removeComments: false,
  });
  const source = typescript.createSourceFile(
    indexFile,
    "",
    typescript.ScriptTarget.ES2019
  );

  const output = printer.printList(
    typescript.ListFormat.MultiLine,
    nodeArray,
    source
  );

  fs.writeFileSync(indexFile, output, { encoding: "utf8" });
};

const setupDist = () => {
  rimraf.sync(distPath);
  mkdirp.sync(distPath);
  iconSubdirectories.forEach((iconSubdirectory) => {
    mkdirp.sync(path.join(distPath, iconSubdirectory));
  });
};

const main = () => {
  setupDist();
  const icons = discoverIcons();
  createIcons(icons);
  generateIndex(icons);
};

main();
