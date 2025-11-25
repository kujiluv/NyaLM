# NyaLM — chat CLI local (LM Studio)

![Node >=18](https://img.shields.io/badge/node-%3E%3D18-43853d?logo=node.js&logoColor=white) ![CLI](https://img.shields.io/badge/interface-CLI-0d6efd) ![LM Studio](https://img.shields.io/badge/backend-LM%20Studio-ff69b4)

> Un mini compagnon en ligne de commande pour discuter avec un modèle LM Studio en local. Simple, agréable à bidouiller, et prêt pour évoluer.

## ✨ Ce que ça fait déjà
- 🤝 Se connecte à ton serveur LM Studio local.
- 💬 Chat en CLI avec historique en mémoire.
- 🧭 Commandes rapides : `/help`, `/clear`, `/save`, `exit`.
- 💾 Sauvegarde JSON dans `save/` (`chat-<timestamp>.json`).

## 🧰 Pré-requis
- Node.js **18+** (testé avec Node 24).
- LM Studio installé avec un modèle chargé.
- Serveur LM Studio démarré (ex. `http://localhost:1234/v1`).

## ⚙️ Configuration (`config.json`)
```json
{
  "baseUrl": "http://localhost:1234/v1",
  "model": "huihui-qwen3-30b-a3b-instruct-2507-abliterated",
  "temperature": 0.7,
  "maxTokens": 250,
  "ui": {
    "theme": "black&white",
    "language": "fr"
  }
}
```
- `baseUrl` : URL du serveur LM Studio local.  
- `model` : nom exact du modèle chargé.  
- `temperature` / `maxTokens` : réglages de génération.  
- `ui` : préférences d’affichage (facultatif pour le chat).

## 🚀 Installer & lancer
```bash
git clone <ton_repo>
cd NyaLM
npm install   # pas de deps ? npm install ne fait rien, c'est ok

npm start     # ou node index.js
```
Ensuite tu arrives sur l’invite `Toi >`.

## ⌨️ Commandes utiles
- `/help` — affiche l’aide.
- `/clear` — vide l’historique en mémoire.
- `/save` — écrit `save/chat-<timestamp>.json`.
- `exit` — quitte proprement.

## 🗂️ Structure du projet
```
NyaLM/
├─ index.js              # Point d’entrée
├─ config.json           # Réglages LM Studio + UI
├─ save/                 # Sauvegardes de conversations
└─ src/
   ├─ lmstudioClient.js  # Appels API LM Studio
   ├─ chatSession.js     # Historique + envoi des messages
   ├─ cli.js             # Interface console + commandes
   └─ commands/
      ├─ help.js
      ├─ clear.js
      └─ save.js
```

## 🛣️ Roadmap courte
- Streaming token par token.
- Charger une sauvegarde (`/load`).
- Changer de modèle en direct (`/model`).
- Réglages live (`/temp`, `/maxtokens`).
- Mémoire persistante entre sessions.
- Petite interface web.
- Tool calling (appels de fonctions JS).

## 📝 TODO / idées à venir
- [x] Générateur de doc : commande pour fabriquer automatiquement un README ou une fiche de features.
- [x] Export Markdown/texte des conversations (en plus du JSON).
- [x] Commande `/load` pour reprendre une sauvegarde.
- [x] Thèmes console (couleurs, prompts custom).
- [x] Mode auto-save (sauvegarde périodique ou à chaque réponse).

## 🩺 Dépannage rapide
- `model not found` → vérifie que `model` correspond au nom exact dans LM Studio.  
- `Failed to parse URL from undefined/...` → revois `baseUrl` dans `config.json`.  
- `ECONNREFUSED` / `Failed to fetch` → serveur LM Studio éteint ou mauvais port.  

## 🤍 Contribuer
Projet en mode “learning in public”. Ouvre une issue, propose une PR, ou partage tes idées de commandes/fonctionnalités. Toute aide est la bienvenue !
