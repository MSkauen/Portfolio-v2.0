import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { PageInfo } from '../../typings'
import SanityQueries from '../../components/SanityQueries'

type Data = {
    pageInfo: PageInfo
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const pageInfo: PageInfo = await sanityClient.fetch(
        SanityQueries().pageInfoQuery
    )

    res.status(200).json({ pageInfo })
}
