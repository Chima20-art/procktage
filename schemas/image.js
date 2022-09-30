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
            name: 'image',
            type: 'image',
            title: 'image',
            options: {
                isHighlighted: true,
                hotspot: true,
            },
        },
    ],
}
