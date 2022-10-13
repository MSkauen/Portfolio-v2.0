import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Skill } from '../../typings'
import SanityQueries from '../../components/SanityQueries'

type Data = {
    skills: Skill[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skills: Skill[] = await sanityClient.fetch(
        SanityQueries().skillsQuery
    )

    res.status(200).json({ skills })
}
