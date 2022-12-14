import React, { useRef } from 'react'
import { useDraggable } from "react-use-draggable-scroll";
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import AudioController from './AudioController';

type Props = {
    projects: Project[],
    soundUrl: string,
    volume: number
}

function Projects({ projects, soundUrl, volume }: Props) {
    const { play, stop } = AudioController(soundUrl, volume)
    
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref, {
        applyRubberBandEffect: true,
        decayRate: 0.97,
      });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="projectCard h-screen relative flex flex-col text-left
            md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute ml-5 top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
                Projects
            </h3>
            <div ref={ref} {...events} className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 lg:mb-3 md:mb-3">
                {projects?.map((p, i) => (
                    <div
                        key={p._id}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-10 lg:p-20 md:p-16 h-screen"
                    >
                        <motion.img
                            className="lg:max-w-xl sm:max-w-full cursor-move"
                            initial={{ y: -200, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(p?.image).url()}
                            alt={p?.title}
                        />

                        <div className="lg:space-y-8 space-y-2 px-0 md:px-7 max-w-6xl">
                            <h4 className="text-2xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case study {i + 1} of {projects?.length}:{' '}
                                    {p?.title}
                                </span>
                            </h4>

                            <div className="flex space-x-2 gap-x-3 justify-center items-start">
                                {p.technologies.map((t) => (
                                    <Image
                                        key={t._id}
                                        src={urlFor(t.image).url()}
                                        alt={t.title}
                                        height={40}
                                        width={40}
                                        title={t.title}
                                    />
                                ))}
                            </div>

                            <p className="line-clamp-4 lg:text-lg md:text-lg sm:text-sm text-left md:text-left lg:text-center">
                                {p.summary}
                            </p>

                            <div className='flex flex-row gap-5 py-2'>
                                {p?.linkToBuild ? (
                                    <a href={p.linkToBuild} target="_blank" rel="noopener noreferrer" className="projectButton flex flex-row justify-center items-center navButton hover:opacity-40"                                    
                                            onMouseEnter={() => {
                                                play();
                                            }}
                                            onMouseLeave={() => {
                                                stop();
                                            }}
                                    >
                                        Live View
                                    </a>
                                    ) : (
                                        ""
                                )}

                                {!p?.repoPrivate || !p.linkToRepo ? (
                                    <a href={p?.linkToRepo} target="_blank" rel="noopener noreferrer" className="projectButton flex flex-row justify-center items-center navButton hover:opacity-40"                                    
                                        onMouseEnter={() => {
                                            play();
                                        }}
                                        onMouseLeave={() => {
                                            stop();
                                        }}
                                    >
                                        Repo
                                    </a>
                                    ) : (
                                    ""
                                )}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[27%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects
