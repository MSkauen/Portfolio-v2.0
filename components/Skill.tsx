import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '../sanity'
import { Skill } from '../typings'
import useSound from 'use-sound'

type Props = {
    directionLeft?: boolean
    skill: Skill
}

function Skill({ directionLeft, skill }: Props) {
    const [isHovering, setIsHovering] = React.useState(
        false
        );
    
        const soundUrl = 'whoofClick.mp3';
    
        const [play, { stop }] = useSound(
            soundUrl,
            { volume: 0.8 }
          );
    
    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                className=" flex items-center justify-center rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 xl:w-32
                xl:h-32"
                onClick={() => {
                    play();
                  }}
            >
                <Image
                    height={64}
                    width={64}
                    src={urlFor(skill?.image).url()}
                    className="object-contain w-16 h-16 md:w-18 md:h-18 xl:w-23
                xl:h-23 filter group-hover:grayscale transition duration-300 ease-in-out"
                    alt={skill?.title}
                />

                <div
                    className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
                    group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
                >
                    <a href={skill?.linkToSkill} target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center justify-center h-full">
                                <p className="text-xl font-bold text-black opacity-100">
                                    {skill?.title}
                                </p>
                            </div>
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default Skill
