import { Link } from 'react-scroll'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `${pageInfo?.name}`,
            "Front-end",
            "Back-end",
        ],
        loop: true,
        delaySpeed: 2000
    });

    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        
        <BackgroundCircles/>

        <img 
            className='filter hue-rotate relative rounded-full h-32 w-32 mx-auto object-cover'
            src={urlFor(pageInfo?.profilePic).url()}
            alt='Profile picture'>
        </img>

        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pg-2 tracking-[15px]'>
                Software Engineer
            </h2>
            <h1 className='text-s5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>

            <div className='pt-5' >
                <Link to="projects" spy={true} smooth={true}>
                    <button className='heroButton'>Projects</button>
                </Link>
                <Link to="skills" spy={true} smooth={true}>
                    <button className='heroButton'>Skills</button>
                </Link>
            </div>
        </div>
    </div>
    );
};