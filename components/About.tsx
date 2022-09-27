import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{
            opacity: 1,
        }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                opacity: 1, x: 0
            }}
            viewport={{once: true}}
            src="/placeholder.png"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:roiunded-lg md:w-64 md:h-95 xl:w-[150px] xl:h[600px]'
        />
        <div className='space-y-10 px-10 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                <span className='underline decoration-[#F7AB0A]/50'>Who</span>
                {" "} am I?
            </h4>
            <p className='text-sm'>
                Donec consequat vehicula leo, eget luctus orci cursus non. Donec gravida turpis ac egestas mollis.
                Maecenas ultricies vel risus non dignissim. Curabitur quis sollicitudin tellus, et ornare libero.
                Duis non justo et ligula aliquet pulvinar ut ac massa. Vestibulum hendrerit ut risus at vehicula.
                Maecenas ipsum nisi, ornare vitae est sed, molestie porttitor elit. 
                Curabitur dictum mi quis dui elementum, eu maximus purus aliquam. Nam id diam sit amet tellus aliquet vehicula ut vitae dolor.
                Fusce mollis velit at varius semper. Cras mattis dolor sit amet magna tempor, a vehicula justo scelerisque. Suspendisse sit amet interdum justo.
            </p>
        </div>
    </motion.div>
  )
}

export default About