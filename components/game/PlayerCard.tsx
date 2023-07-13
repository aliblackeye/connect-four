import { outfit } from "@/constants/fonts";

interface PlayerCardProps {
  score: number;
  name: string;
}
export default function PlayerCard({ score, name }: PlayerCardProps) {
  return (
    <div className={`player-card ${outfit.className}`}>
      <h4 className="player-name">{name}</h4>
      <h1 className="player-score">{score}</h1>
    </div>
  );
}
