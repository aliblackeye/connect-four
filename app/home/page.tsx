import { FaComputer } from "react-icons/fa6";
import { AiOutlineWifi } from "react-icons/ai";

import { PiQuestion } from "react-icons/pi";

import Button from "@/components/button";
import FourDots from "@/components/four-dots";

export default function Home() {
  return (
    <section className="home-page">
      <div className="game-nav">
        <FourDots />
        <nav className="nav-buttons">
          <Button
            text="PLAY VS CPU"
            icon={<FaComputer size={24} />}
            variant="red"
          />
          <Button
            text="PLAY VS PLAYER"
            icon={<AiOutlineWifi size={24} />}
            variant="yellow"
          />
          <Button
            text="GAME RULES"
            icon={<PiQuestion size={24} />}
            variant="white"
          />
        </nav>
      </div>
    </section>
  );
}
