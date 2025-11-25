const config = require("../config.json");

const BASE_URL = config.baseUrl;
const MODEL = config.model;
const TEMPERATURE = config.temperature;
const MAX_TOKENS = config.maxTokens;

async function callLMStudio(messages) {
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: TEMPERATURE,
      max_tokens: MAX_TOKENS
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HTTP ${res.status} — ${err}`);
  }

  const data = await res.json();
  return data.choices[0].message.content;
}

module.exports = { callLMStudio };