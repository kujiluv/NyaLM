const fs = require("fs");
const path = require("path");

function saveCommand(session) {
  const data = session.getMessages();
  const saveDir = path.join(__dirname, "..", "..", "save");
  if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir, { recursive: true });
  }
  const filename = path.join(saveDir, `chat-${Date.now()}.json`);
  fs.writeFileSync(filename, JSON.stringify(data, null, 2), "utf-8");
  console.log(`sauvegarder dans ${filename}`);
}

module.exports = saveCommand;