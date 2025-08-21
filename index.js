// index.js
const { exec } = require("child_process");

console.log("🚀 Starting n8n...");

exec("npx n8n start", (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});
