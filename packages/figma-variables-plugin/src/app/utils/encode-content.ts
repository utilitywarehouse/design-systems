function encodeContent(content: string): string {
  return btoa(
    encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
}

export default encodeContent;
