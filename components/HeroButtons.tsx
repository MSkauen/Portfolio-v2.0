import React from "react";
import Link from "next/link";
import useSound from 'use-sound';

type Props = {};

function HeroButtons({}: Props) {
    const [isHovering, setIsHovering] = React.useState(
        false
    );
        
    const soundUrl = 'click.mp3';
    
    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.3 }
    );

  return <div className="pt-5 flex flex-row gap-3 py-2 justify-center items-center">
  <Link href="#projects">
      <button className="heroButton"
          onMouseEnter={() => {
              setIsHovering(true);
              play();
              }}
              onMouseLeave={() => {
              setIsHovering(false);
              stop();
          }}
      >Projects</button>
  </Link>
  <Link href="#skills">
      <button className="heroButton"
            onMouseEnter={() => {
                setIsHovering(true);
                play();
                }}
                onMouseLeave={() => {
                setIsHovering(false);
                stop();
            }}
        >Skills</button>
  </Link>
</div>
}

export default HeroButtons;
