import { motion } from 'framer-motion'
import React from 'react'
import { Skill as SkillType } from '../typings'
import Skill from './Skill'
import AudioController from './AudioController'

type Props = {
    skills: SkillType[]
    soundUrl: string
    volume: number
}

function Skills({ skills, soundUrl, volume }: Props) {
    const { play, stop } = AudioController(soundUrl, volume)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col relative text-center md:text-left
            xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
            xl:space-y-0 mx-auto items-center"
        >
            <div className="skills-ref" />
            <h3 className="absolute top-20 md:top-20 lg:top-24 ml-3 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
                {skills?.map((p) => (
                    <Skill
                        key={p._id}
                        skill={p}
                        audioController={{ play, stop }}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills
