import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

function WorkCard({}: Props) {
    return (
        <article
            className="snap-center flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
            <motion.img
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="/placeholder.png"
                alt=""
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
            object-center"
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">CEO OF TREKK</h4>
                <p className="font-bold text-2xl mt-1">SKAUEN</p>
                <div className="flex space-x-2 my-2">
                    {/* Map work props here */}
                    <Image
                        height={40}
                        width={40}
                        className="rounded-full"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        alt=""
                    />
                    <Image
                        height={40}
                        width={40}
                        className="rounded-full"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt=""
                    />
                    <Image
                        height={40}
                        width={40}
                        className="rounded-full"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        alt=""
                    />
                </div>
                <p className="uppercase py-5 text-gray-300">
                    Started... - Ended...
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    )
}

export default WorkCard
