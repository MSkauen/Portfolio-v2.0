import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Experience } from '../../typings'
import SanityQueries from '../../components/SanityQueries'

type Data = {
    experiences: Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experiences: Experience[] = await sanityClient.fetch(
        SanityQueries().experienceQuery
    )

    res.status(200).json({ experiences })
}
