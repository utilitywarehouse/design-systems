const prURL = process.env.CIRCLE_PULL_REQUEST || "";
const prNumber = parseInt(prURL.split("/").pop() || "");
if (isNaN(prNumber)) process.exit(0);
process.stdout.write(`${prNumber}`);
