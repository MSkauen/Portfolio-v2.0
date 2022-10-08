export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of skill',
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
            name: 'progress',
            title: 'Progress',
            type: 'number',
            description: 'Progress of skill from 0 to 100',
            validation: (Rule) => Rule.min(0).max(100),
        },
        {
            name: 'linkToSkill',
            title: 'Link To Skill',
            type: 'url',
        },
    ],
}
