import { groq } from 'next-sanity'

function SanityQueries() {
    const pageInfoQuery = groq`
        *[_type == "pageInfo"][0]
    `
    const projectsQuery = groq`
        *[_type == "project"] {
          ...,
          technologies[]->
        } | order(_createdAt asc)
    `
    const skillsQuery = groq`
        *[_type == "skill"]
    `
    const socialsQuery = groq`
        *[_type == "social"]
    `
    const experienceQuery = groq`
        *[_type == "experience"] {
          ...,
          experience[]->
        }
    `
    return {
        pageInfoQuery,
        projectsQuery,
        skillsQuery,
        socialsQuery,
        experienceQuery,
    }
}
export default SanityQueries
