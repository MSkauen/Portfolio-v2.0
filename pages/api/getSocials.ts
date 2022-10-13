import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Social } from '../../typings'
import SanityQueries from '../../components/SanityQueries'

type Data = {
    socials: Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const socials: Social[] = await sanityClient.fetch(
        SanityQueries().socialsQuery
    )

    res.status(200).json({ socials })
}
