import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from "react-social-icons";
import { Social } from '../typings';
import Link from 'next/link';
type Props = {
    socials: Social[],
};

function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 flex justify-between items-start
    max-w-7xl mx-auto z-20 xl:items-center p-5'>
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className='flex flex-row items-center'
        >
            {socials?.map((e) => (
                <SocialIcon
                    className='cursor-pointer hover:opacity-40'
                    key={e._id}
                    url={e.url}
                    bgColor='transparent'
                    fgColor='gray'
                    label={e.title}
                />
            ))}
            <SocialIcon
                className='cursor-pointer hover:opacity-40'
                url="https://stackoverflow.com/users/7473076/mathiash"
                network="sharethis"
                bgColor='transparent'
                fgColor='gray'
            />
        </motion.div>

        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className='flex flex-row items-center'
        >

            <Link href="#contact" >
                <button className='navButton group'>
                    <SocialIcon
                        className='cursor-pointer group-hover:opacity-40'
                        network='email'
                        fgColor="gray"
                        bgColor='transparent'
                    />
            
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400
                    group-hover:opacity-40'>Get In Touch</p>
                </button>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header