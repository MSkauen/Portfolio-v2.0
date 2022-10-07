import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="h-screen relative flex flex-col text-left
            md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {projects?.map((p, i) => (
                    <div
                        key={p._id}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-10 lg:p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            className="lg:max-w-xl sm:max-w-full"
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(p?.image).url()}
                            alt={p?.title}
                        />

                        <div className="lg:space-y-10 space-y-5 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-2xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case study {i + 1} of {projects?.length}:{' '}
                                    {p?.title}
                                </span>
                            </h4>

                            <div className="flex space-x-2 justify-center">
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
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects
