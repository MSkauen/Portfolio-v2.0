import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Project } from '../../typings'
import SanityQueries from '../../components/SanityQueries'

type Data = {
    projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const projects: Project[] = await sanityClient.fetch(
        SanityQueries().projectsQuery
    )

    res.status(200).json({ projects })
}
