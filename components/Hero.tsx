import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [`${pageInfo?.name}`, 'Front-end', 'Back-end'],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div
            className="h-screen flex flex-col space-y-8 items-center justify-center
    overflow-y-hidden text-center overflow-hidden"
        >
            <BackgroundCircles />

            <a href="https://dice-den.vercel.app/" rel="noopener noreferrer">
                <Image
                    className="filter hover:hue-rotate-60 animate-pulse relative rounded-full mx-auto object-cover"
                    src={urlFor(pageInfo?.profilePic).url()}
                    height={128}
                    width={128}
                    alt="Profile picture"
                />
            </a>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pg-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-s5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
