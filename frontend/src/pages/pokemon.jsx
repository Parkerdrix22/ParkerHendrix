import React, { useState } from "react";
import "./pokemon.css";
import bulbasaurImg from "../assets/bulbasaur.png";
import charmanderImg from "../assets/charmander.png";
import squirtleImg from "../assets/squirtle.png";

// Utility
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Move class
class Move {
  constructor(name, type, minDamage, maxDamage) {
    this.name = name;
    this.type = type;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
  }

  generateDamage() {
    return getRandomInt(this.minDamage, this.maxDamage);
  }
}

// Pokémon class
class Pokemon {
  constructor(name, type, hp, sprite) {
    this.name = name;
    this.type = type;
    this.maxHP = hp;
    this.hp = hp;
    this.sprite = sprite;
    this.moves = [];
  }

  heal() {
    this.hp = Math.min(this.hp + 15, this.maxHP);
    return `${this.name} healed to ${this.hp} HP!`;
  }

  attack(moveIndex, target) {
    const move = this.moves[moveIndex];
    let damage = move.generateDamage();
    let message = "";

    if (move.type === "Grass" && target.type === "Fire") { damage *= 0.5; message = "Not very effective!"; }
    else if (move.type === "Grass" && target.type === "Water") { damage *= 2; message = "Super effective!"; }
    else if (move.type === "Fire" && target.type === "Water") { damage *= 0.5; message = "Not very effective!"; }
    else if (move.type === "Fire" && target.type === "Grass") { damage *= 2; message = "Super effective!"; }
    else if (move.type === "Water" && target.type === "Grass") { damage *= 0.5; message = "Not very effective!"; }
    else if (move.type === "Water" && target.type === "Fire") { damage *= 2; message = "Super effective!"; }

    if (Math.random() <= 0.06) damage *= 1.5;

    damage = Math.round(damage);
    target.hp = Math.max(target.hp - damage, 0);

    let text = `${this.name} used ${move.name}!`;
    if (message) text += `\n${message}`;
    text += `\n${target.name} took ${damage} damage!`;
    return text;
  }
}

// ---- Create Pokémon and assign moves OUTSIDE the component ----
const movesList = [
  new Move("Tackle", "Normal", 5, 20),
  new Move("Quick Attack", "Normal", 6, 25),
  new Move("Slash", "Normal", 10, 30),
  new Move("Flamethrower", "Fire", 5, 30),
  new Move("Ember", "Fire", 10, 20),
  new Move("Water Gun", "Water", 5, 15),
  new Move("Hydro Pump", "Water", 20, 25),
  new Move("Vine Whip", "Grass", 10, 25),
  new Move("Solar Beam", "Grass", 18, 27),
];

const allPokemon = [
  new Pokemon("Bulbasaur", "Grass", 60, bulbasaurImg),
  new Pokemon("Charmander", "Fire", 55, charmanderImg),
  new Pokemon("Squirtle", "Water", 65, squirtleImg),
];

// Assign 2 moves to each Pokémon
allPokemon.forEach(p => {
  while (p.moves.length < 2) {
    const move = movesList[getRandomInt(0, movesList.length - 1)];
    if ((move.type === p.type || move.type === "Normal") && !p.moves.includes(move)) {
      p.moves.push(move);
    }
  }
});

// ---- Component ----
export default function PokemonBattle() {
  const [player, setPlayer] = useState(null);
  const [opponent, setOpponent] = useState(null);
  const [playerLog, setPlayerLog] = useState("");
  const [opponentLog, setOpponentLog] = useState("");
  const [battleMessage, setBattleMessage] = useState("");
  const [battleOver, setBattleOver] = useState(false);

  const startBattle = (playerChoice) => {
    const remaining = allPokemon.filter(p => p !== playerChoice);
    const opponentChoice = remaining[getRandomInt(0, remaining.length - 1)];

    setPlayer(playerChoice);
    setOpponent(opponentChoice);
    setPlayerLog("");
    setOpponentLog("");
    setBattleMessage(`Battle starts! ${playerChoice.name} vs ${opponentChoice.name}`);
    setBattleOver(false);
  };

  const handlePlayerAction = (action) => {
    if (battleOver) return;

    let log;
    if (action === "H") log = player.heal();
    else log = player.attack(action, opponent);
    setPlayerLog(log);

    if (opponent.hp <= 0) {
      setBattleMessage(`${opponent.name} has been defeated! ${player.name} wins!`);
      setBattleOver(true);
      return;
    }

    setTimeout(() => {
      const oppAction = getRandomInt(0, 2);
      let oppLog;
      if (oppAction < 2) oppLog = opponent.attack(oppAction, player);
      else oppLog = opponent.heal();
      setOpponentLog(oppLog);

      if (player.hp <= 0) {
        setBattleMessage(`${player.name} has been defeated! ${opponent.name} wins!`);
        setBattleOver(true);
      }
    }, 2000);
  };

  const restartGame = () => {
    allPokemon.forEach(p => p.hp = p.maxHP);
    setPlayer(null);
    setOpponent(null);
    setPlayerLog("");
    setOpponentLog("");
    setBattleMessage("");
    setBattleOver(false);
  };

  if (!player || !opponent) {
    return (
      <div className="battle-container">
        <h2>Choose your Pokémon</h2>
        <div className="move-buttons">
          {allPokemon.map((p, idx) => (
            <button key={idx} onClick={() => startBattle(p)}>
              {p.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const playerHPPercent = (player.hp / player.maxHP) * 100;
  const opponentHPPercent = (opponent.hp / opponent.maxHP) * 100;

  return (
    <div className="battle-container">
      <div className="battle-message-box">{battleMessage}</div>

      <div className="pokemon-display">
        {/* Opponent */}
        <div className="pokemon-card">
          <img src={opponent.sprite} alt={opponent.name} />
          <div className="pokemon-info-row">
            <p>{opponent.name}</p>
            <div className="hp-bar">
              <div
                className="hp-fill"
                style={{
                  width: `${opponentHPPercent}%`,
                  backgroundColor: opponentHPPercent > 50 ? "green" : opponentHPPercent > 20 ? "yellow" : "red",
                }}
              ></div>
            </div>
          </div>
          <div className="attack-log-box">{opponentLog}</div>
        </div>

        {/* Player */}
        <div className="pokemon-card">
          <div className="you-badge">YOU</div>
          <img src={player.sprite} alt={player.name} />
          <div className="pokemon-info-row">
            <p>{player.name}</p>
            <div className="hp-bar">
              <div
                className="hp-fill"
                style={{
                  width: `${playerHPPercent}%`,
                  backgroundColor: playerHPPercent > 50 ? "green" : playerHPPercent > 20 ? "yellow" : "red",
                }}
              ></div>
            </div>
          </div>
          <div className="attack-log-box">{playerLog}</div>
        </div>
      </div>

      {!battleOver && (
        <div className="move-buttons">
          {player.moves.map((move, idx) => (
            <button key={idx} onClick={() => handlePlayerAction(idx)}>
              {move.name}
            </button>
          ))}
          <button onClick={() => handlePlayerAction("H")}>Heal</button>
        </div>
      )}

      {battleOver && (
        <button className="restart-button" onClick={restartGame}>
          Play Again
        </button>
      )}
    </div>
  );
}
