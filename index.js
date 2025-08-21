const { exec } = require("child_process");

console.log("🚀 Starting n8n...");

// Render gives a dynamic PORT (e.g. 39703)
const port = process.env.PORT || 5678;
const host = "0.0.0.0";

// Command to start n8n on Render's port
const cmd = `npx n8n start --port=${port} --host=${host}`;
console.log(`Running: ${cmd}`);

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Stderr: ${stderr}`);
  }
  console.log(stdout);
});
