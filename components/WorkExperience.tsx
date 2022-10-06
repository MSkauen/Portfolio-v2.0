import React from 'react'
import { motion } from 'framer-motion';
import WorkCard from './WorkCard';

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div
            className='w-full flex space-x-5 overflow-x-scroll
            p-10 snap-x'
        >
            <WorkCard/>
            <WorkCard/>
            <WorkCard/>
        </div>
    </motion.div>
  )
}

export default WorkExperience