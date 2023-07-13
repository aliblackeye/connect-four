import { outfit } from "@/constants/fonts";

interface IButton {
  text: string;
  icon?: any;
  variant?: "red" | "yellow" | "white";
}

export default function Button(props: IButton) {
  // Desctructure props
  const { text, icon, variant="white" } = props;

  return (
    <button className={`btn ${variant ? `btn-${variant}` : ""}  ${outfit.className}`}>
      <span className="btn-text">{text}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
