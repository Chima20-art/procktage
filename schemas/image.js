export default {
    name: 'Image',
    type: 'object',
    title: 'Image',

    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'alt text',
            options: {
                isHighlighted: true,
            },
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
            options: {
                isHighlighted: true,
                hotspot: true,
            },
        },
    ],
}
