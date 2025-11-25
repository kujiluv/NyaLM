const readline = require("readline");
const { createChatSession } = require("./chatSession");
const help = require("./commands/help");
const clearCommand = require("./commands/clear");
const saveCommand = require("./commands/save");

function startCLI() {
  console.log("Bienvenue dans NyaLM");
  console.log("Tape /help pour voir les commandes.\n");

  const session = createChatSession();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function ask() {
    rl.question("Toi > ", async (text) => {
      const userText = text.trim();

      if (userText.toLowerCase() === "exit") {
        rl.close();
        console.log("Bye bye!");
        return;
      }

      // commandes
      if (userText.startsWith("/")) {
        if (userText === "/help") help();
        else if (userText === "/clear") clearCommand(session);
        else if (userText === "/save") saveCommand(session);
        else console.log("Commande inconnue. /help");

        return ask();
      }

      // message normal
      try {
        const answer = await session.send(userText);
        console.log("\nIA > " + answer + "\n");
      } catch (e) {
        console.error("Erreur:", e.message);
      }

      ask();
    });
  }

  ask();
}

module.exports = { startCLI };
