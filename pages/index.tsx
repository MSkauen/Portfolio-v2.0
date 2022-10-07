import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

type Props = {
    pageInfo: PageInfo
    experiences: Experience[]
    skills: Skill[]
    projects: Project[]
    socials: Social[]
}

const Home = ({ pageInfo, socials, experiences, skills, projects }: Props) => {
    return (
        <div
            className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    overflow-y-scroll overflow-x-hidden z-0"
        >
            <Head>
                <title>Mathias Skauen Harestad</title>
            </Head>

            <Header socials={socials} />

            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>

            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>

            {/* 
    <section id="about" className='snap-center'>
      <About pageInfo={pageInfo}/>
    </section>
    <section id="experience" className='snap-center'>
      <WorkExperience/>
    </section>
  */}

            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>

            <section id="contact" className="snap-start">
                <ContactMe />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <ChevronUpIcon className="h-10 w-10 rounded-full hover:opacity-40" />
                    </div>
                </footer>
            </Link>
        </div>
    )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo()
    const experiences: Experience[] = await fetchExperiences()
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects()
    const socials: Social[] = await fetchSocials()

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },
        revalidate: 10,
    }
}
