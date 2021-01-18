const readline = require("readline");
const fs = require("fs");
const path = require("path");
const copy = require("copy");

const stdInInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = async (question) =>
  new Promise((resolve, reject) => {
    try {
      stdInInterface.question(`${question}\n`, (answer) => resolve(answer));
    } catch (error) {
      reject(error);
    }
  });

const packagesDirectory = path.resolve(__dirname, "..", "packages");

const validatePackageName = (name) => {
  const existingPackages = fs.readdirSync(packagesDirectory);
  return !existingPackages.includes(name);
};

const getPackage = async () => {
  let isValidName, name;
  while (!isValidName) {
    name = await askQuestion(
      "Enter the name of your new package directory: (e.g. my-new-package)"
    );
    isValidName = validatePackageName(name);
    if (!isValidName)
      console.log(
        `${name} is already taken, please choose another package name.`
      );

    isValidName = Boolean(name.match(/^[a-z]{1,}(-[a-z]+){0,}$/));
    if (!isValidName)
      console.log(
        "Package name must only contain a-z and hyphen characters, e.g. my-new-package"
      );
  }

  const description = await askQuestion(
    'Enter a description of your new package: (defaults to "")'
  );
  return { name, description };
};

const copyToNewPackage = async (newPackagePath) =>
  new Promise((resolve, reject) => {
    copy(
      `${path.resolve(__dirname, "..", "package-template")}${path.sep}*`,
      newPackagePath,
      (error) => {
        if (error) return reject(error);
        resolve();
      }
    );
  });

const injectPackageVariables = (file, package) => {
  let contents = fs.readFileSync(file, { encoding: "utf-8" });
  contents = contents.replace(
    /{{\s?package\.(name|description)\s?}}/g,
    (_, key) => package[key]
  );
  fs.writeFileSync(file, contents, { encoding: "utf-8" });
};

const main = async () => {
  try {
    let shouldContinue, package;
    while (!shouldContinue) {
      package = await getPackage();
      console.log(`Package name: ${package.name}`);
      console.log(`Package description: ${package.description}`);
      const shouldContinueInput = await askQuestion("Continue? Y/n");
      shouldContinue = ["y", ""].includes(
        shouldContinueInput.substring(0, 1).toLowerCase()
      );
    }

    const newPackagePath = path.resolve(packagesDirectory, package.name);
    fs.mkdirSync(newPackagePath);
    await copyToNewPackage(newPackagePath);
    injectPackageVariables(path.resolve(newPackagePath, "README.md"), package);
    injectPackageVariables(
      path.resolve(newPackagePath, "package.json"),
      package
    );
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
