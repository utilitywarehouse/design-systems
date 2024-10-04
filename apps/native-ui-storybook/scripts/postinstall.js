const fs = require('fs');
const path = require('path');

const files = {
  'Aeonik-Bold':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/Aeonik/Aeonik-Bold.otf',
  'Aeonik-Regular':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/Aeonik/Aeonik-Regular.otf',
  'WorkSans-Black':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Black.ttf',
  'WorkSans-Bold':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Bold.ttf',
  'WorkSans-ExtraBold':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-ExtraBold.ttf',
  'WorkSans-ExtraLight':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-ExtraLight.ttf',
  'WorkSans-Light':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Light.ttf',
  'WorkSans-Medium':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Medium.ttf',
  'WorkSans-Regular':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Regular.ttf',
  'WorkSans-SemiBold':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-SemiBold.ttf',
  'WorkSans-Thin':
    '../../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Thin.ttf',
};

for (const file in files) {
  const targetDir = path.resolve(__dirname, '../assets/fonts');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const sourcePath = path.resolve(__dirname, files[file]);
  const targetPath = path.resolve(
    __dirname,
    '../assets/fonts',
    file.toLowerCase().replace(/-/g, '_') + path.extname(files[file])
  );

  fs.copyFile(sourcePath, targetPath, err => {
    // console.log(`Copied ${file} to ${targetPath}`);
    if (err) throw err;
  });
}
