function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function figmaColorToHex(color: RGBA): string {
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  const a = color.a !== undefined ? Math.round(color.a * 255) : 255;

  if (a < 255) {
    // Return RGBA hex
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${componentToHex(a)}`;
  } else {
    // Return RGB hex
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }
}

export default figmaColorToHex;
