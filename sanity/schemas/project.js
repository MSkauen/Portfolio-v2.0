export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Project Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        },
        {
            name: 'linkToBuild',
            title: 'Link To Build',
            type: 'url',
        },
        {
            name: 'linkToRepo',
            title: 'Link To Repo',
            type: 'url',
        },
        {
            name: 'repoPrivate',
            title: 'Disable link to repo',
            type: 'boolean',
        },
    ],
}
