import React, { useRef } from 'react'
import { useDraggable } from "react-use-draggable-scroll";
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import useSound from 'use-sound';

type Props = {
    projects: Project[],
}

function Projects({ projects }: Props) {
    const [isHovering, setIsHovering] = React.useState(
        false
    );
        
    const soundUrl = 'click.mp3';
    
    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.3 }
    );
    
    const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

    const { events } = useDraggable(ref, {
        applyRubberBandEffect: true,
        decayRate: 0.97,
      });
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="h-screen relative flex flex-col text-left
            md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
                Projects
                <p className=' text-gray-600 text-sm tracking-[20px] uppercase m-2'>
                    Drag to scroll through
                </p>
            </h3>
            <div ref={ref} {...events} className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20">
                {projects?.map((p, i) => (
                    <div
                        key={p._id}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-10 lg:p-20 md:p-16 h-screen"
                    >
                        <motion.img
                            className="lg:max-w-xl sm:max-w-full cursor-move"
                            initial={{ y: -300, opacity: 0 }}
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

                            <p className="lg:text-lg sm:text-sm text-center md:text-left">
                                {p.summary}
                            </p>

                            <div className='flex flex-row gap-5'>
                                {!p?.repoPrivate || !p.linkToRepo ? (
                                    <a href={p?.linkToRepo} className="h-relative" target="_blank" rel="noopener noreferrer">
                                        <button className="projectButton flex flex-row justify-center items-center navButton hover:opacity-40" title="Live view"
                                            onMouseEnter={() => {
                                                setIsHovering(true);
                                                play();
                                            }}
                                            onMouseLeave={() => {
                                                setIsHovering(false);
                                                stop();
                                            }}>                                
                                        repo
                                        </button>
                                    </a>
                                    ) : (
                                        ""
                                )}

                                {p?.linkToBuild ? (
                                    <a href={p.linkToBuild} target="_blank" rel="noopener noreferrer">
                                        <button className="projectButton flex flex-row justify-center items-center navButton hover:opacity-40" title="Live view"
                                            onMouseEnter={() => {
                                                setIsHovering(true);
                                                play();
                                            }}
                                            onMouseLeave={() => {
                                                setIsHovering(false);
                                                stop();
                                            }}>
                                        Live View
                                        </button>
                                    </a>
                                    ) : (
                                        ""
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects
