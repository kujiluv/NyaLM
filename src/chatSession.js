const { callLMStudio } = require("./lmstudioClient");

function createChatSession() {
  const messages = [
    { role: "system", content: "Tu es un assistant local gentil et utile." }
  ];

  async function send(userText) {
    messages.push({ role: "user", content: userText });
    const answer = await callLMStudio(messages);
    messages.push({ role: "assistant", content: answer });
    return answer;
  }

  function clear() {
    messages.splice(1); 
  }

  function getMessages() {
    return messages;
  }

  return { send, clear, getMessages };
}

module.exports = { createChatSession };
