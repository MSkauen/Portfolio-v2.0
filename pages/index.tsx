import Head from 'next/head'
import Link from 'next/link'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
    pageInfo: PageInfo
    experiences: Experience[]
    skills: Skill[]
    projects: Project[]
    socials: Social[]
    volume: number
}

const Home = ({ pageInfo, socials, skills, projects, volume }: Props) => {
    return (
        <div
            className="bg-[rgb(36,36,36)] text-white h-screen snap-y
     overflow-x-hidden z-0"
        >
            <Head>
                <title>Mathias Skauen Harestad</title>
            </Head>
            <Header socials={socials} />
            <section id="hero" className="snap-start">
                <Hero
                    pageInfo={pageInfo}
                    soundUrl={'whoof.mp3'}
                    volume={volume}
                />
            </section>
            <section id="projects" className="snap-start">
                <Projects
                    projects={projects}
                    soundUrl={'click.mp3'}
                    volume={volume}
                />
            </section>
            <section id="skills" className="snap-start">
                <Skills
                    skills={skills}
                    soundUrl={'whoofClick.mp3'}
                    volume={volume}
                />
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

export async function getStaticProps() {
    const pageInfo: PageInfo = await fetchPageInfo()
    const skills: Skill[] = await fetchSkills()
    const projects: Project[] = await fetchProjects()
    const socials: Social[] = await fetchSocials()

    const volume = 0.6

    return {
        props: {
            pageInfo,
            skills,
            projects,
            socials,
            volume,
        },
        revalidate: 10,
    }
}

export default Home
