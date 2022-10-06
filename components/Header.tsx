import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from "react-social-icons";
import { Social } from '../typings';
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
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center'
        >
            {socials.map((e) => (
                <SocialIcon
                    key={e._id}
                    url={e.url}
                    fgColor='grey'
                    bgColor='transparent'
                />
                
            ))}
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
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center'
        >

            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor="gray"
                bgColor='transparent'
            />
            
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
    </header>
  )
}

export default Header