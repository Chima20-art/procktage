export default {
    name: 'Image',
    type: 'object',
    title: 'Image',

    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'alt text',
            description: "text descriptif de l'image.(ex: slug )",
            options: {
                isHighlighted: true,
            },
        },
        {
            name: 'image',
            type: 'image',
            title: 'image',
            description: 'image logo du siteweb',
            options: {
                isHighlighted: true,
                hotspot: true,
            },
        },
    ],
}
