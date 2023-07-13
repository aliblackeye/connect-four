"use client";
import { useState } from "react";
import PlayerCard from "./PlayerCard";
import Link from "next/link";

interface GameProps {
  you: string;
  opponent: string;
}

interface GameStatus {
  winner: string;
  draw: boolean;
  started: boolean;
  turn: {
    changing: boolean;
    name: string;
    opponent: boolean;
  };
  hasOpponent: boolean;
}

export default function Game(props: GameProps) {
  const { you, opponent } = props;

  const [board, setBoard] = useState<string[][]>([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "you"],
    ["", "", "", "", "opponent", "you", "opponent"],
    ["opponent", "you", "opponent", "opponent", "you", "you", "opponent"],
  ]);

  const [gameStatus, setGameStatus] = useState<GameStatus>({
    winner: "",
    draw: false,
    started: false,
    turn: {
      changing: false,
      name: "aliblackeye",
      opponent: false,
    },
    hasOpponent: true,
  });

  return (
    <>
      <Link href="/">Home</Link>
      <div className="game">
        <PlayerCard
          name="PLAYER 1"
          score={0}
        />
        <div className="board">
          {board.map((row, i) => (
            <div
              className="row"
              key={i}
            >
              {row.map((cell, j) => (
                <div
                  className={`cell ${
                    cell === ""
                      ? "cell-empty"
                      : cell === "you"
                      ? "cell-red"
                      : "cell-yellow"
                  }`}
                  key={j}
                ></div>
              ))}
            </div>
          ))}

          <div
            className={`turn ${
              gameStatus.turn.changing ? "turn-changing" : ""
            } ${
              gameStatus.started === true
                ? gameStatus.turn.opponent
                  ? "turn-opponent"
                  : "turn-you"
                : "turn-waiting"
            }`}
          >
            <h1 className="player-name">
              {gameStatus.started
                ? gameStatus.turn.name
                : gameStatus.hasOpponent
                ? "Waiting for opponent to start"
                : "Waiting for opponent"}
            </h1>
          </div>
        </div>
        <PlayerCard
          name="CPU"
          score={0}
        />
      </div>
    </>
  );
}
