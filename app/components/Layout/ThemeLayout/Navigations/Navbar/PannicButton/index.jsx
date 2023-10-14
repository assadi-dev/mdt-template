import React, { useEffect, useState } from "react";
import { PanicButtonContainer } from "../Navbar.styled";
import { Button } from "../../../../../PageContainer";
import panicSoundEffect from "../../../../../../assets/audio/panic_button_sound_effect.mp3";

const PanicButton = ({
  isPanicActivate = false,
  setPanicActivate,
  idAgent,
  ...props
}) => {
  const [sound] = useState(new Audio(panicSoundEffect));

  const playSound = (e) => {
    sound.volume = 0.05;
    sound.play();
  };
  const stopSound = (e) => {
    sound.pause();
    sound.currentTime = 0;
  };

  useEffect(() => {
    isPanicActivate ? playSound() : stopSound();
  }, [isPanicActivate]);

  useEffect(() => {
    sound.addEventListener("ended", playSound);
    return () => {
      sound.addEventListener("ended", stopSound);
    };
  }, []);

  const handleClickPanicButton = () => {
    setPanicActivate();
    console.log(idAgent);
  };

  const CLASS_ACTIVE_PANIC_BUTTON = ["bg-panic-button"];
  isPanicActivate
    ? CLASS_ACTIVE_PANIC_BUTTON.push("panic-btn-activate")
    : CLASS_ACTIVE_PANIC_BUTTON;

  return (
    <PanicButtonContainer>
      <Button
        className={CLASS_ACTIVE_PANIC_BUTTON.join(" ")}
        type="button"
        onClick={handleClickPanicButton}
      >
        CODE 99
      </Button>
    </PanicButtonContainer>
  );
};

export default PanicButton;
