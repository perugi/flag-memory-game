# flag-memory-game
A memory game, built with React, where the user must click each country flag just once.

💻 [Live Demo](https://flag-memory-game.pages.dev/) 💻

![screenshot](https://github.com/user-attachments/assets/6151d695-5dca-4671-b6a1-6a39d1b14e6b)

## 💡 Features
- Randomized selection of countries each round (increasing in number of countries to increase difficulty).
- Randomized order of countries each turn.
- High-score, stored in users browser using local storage.
- Country flags downloaded from https://flagcdn.com/
- Accessible using keyboard controls only.
- An animated world map background for that little extra pizzazz

## 🛠️ Technologies, Tools, Design Approaches
- Vite + React
- CSS Modules
- Usage of React useEffect for calling browser APIs (local storage, window and dialog)
