import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'
import HeroButtons from './HeroButtons'
import AudioController from './AudioController'

type Props = {
    pageInfo: PageInfo,
    soundUrl: string,
    volume: number
}

export default function Hero({ pageInfo, soundUrl, volume }: Props) {

    const { play, stop } = AudioController(soundUrl, volume)

    const [text] = useTypewriter({
        words: [`${pageInfo?.name}`, 'Front-end', 'Back-end'],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <a href="https://dice-den.vercel.app/" rel="noopener noreferrer">
                <Image
                    className="filter hover:hue-rotate-60 duration-150 animate-pulse relative rounded-full mx-auto object-cover"
                    src={urlFor(pageInfo?.profilePic).url()}
                    height={128}
                    width={128}
                    alt="Profile picture"
                    onMouseEnter={() => {
                        play()
                    }}
                    onMouseLeave={() => {
                        stop()
                    }}
                />
            </a>
            <div className="z-20">
                <h2 className="ml-6 text-sm uppercase text-gray-500 pg-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-4xl lg:text-6xl font-semibold px-10">
                    <span className="ml-5 mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <HeroButtons />
            </div>
        </div>
    )
}
