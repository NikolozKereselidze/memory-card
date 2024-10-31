# Memorizer Game 🎮

**Memorizer Game** is a memory-testing web app where players aim to recall and identify unique Pokémon characters. It keeps track of your high score and challenges your memory each time you play, as the Pokémon cards shuffle dynamically!

## Features 🌟

- **Interactive Gameplay**: Click each Pokémon card only once to build your score. A repeat click resets the game.
- **Shuffling Cards**: Each click reshuffles the cards, making every round unique.
- **Score Tracking**: Real-time display of your current and highest scores.
- **Game Over Screen**: Get notified of your final score and highest score upon game completion.

## Tech Stack 💻

- **React**: Front-end framework for a dynamic, interactive user experience.
- **CSS Modules**: For modular and scoped styling.
- **PokéAPI**: Pokémon data API for fetching character information and images.

## Setup and Installation 🛠️

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/NikolozKereselidze/memorizer-game.git
   cd memorizer-game
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Application**:

   ```bash
   npm run dev
   ```

4. **View in Browser: Open http://localhost:3000 to see the game in action**.

## Project Structure 📁

- **Game.jsx**: Core component managing the game logic and state.
- **Card.jsx**: Individual card component fetching Pokémon images and names.
- **GameOver.jsx**: Displays a modal with final scores and a restart button when the game ends.
- **index.css**: Global styles for the app.
- **Card.css, Game.css, GameOver.css**: Scoped styling for individual components.

## How to Play 🎯

1. **Click on a Pokémon card to score a point. Avoid clicking the same card twice in one round.**
2. **Every successful click shuffles the deck, and each unique click increases your score.**
3. **The game ends if you click a card you’ve already chosen. Aim to beat your high score!**

## Contributing 🤝

Feel free to submit issues or pull requests to enhance the game! Contributions to improve functionality, design, or add new features are welcome.

## License 📝

This project is open-source.
