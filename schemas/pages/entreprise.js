export default {
    name: 'entreprise',
    type: 'object',
    title: 'Entreprise',
    fields: [
        {
            name: 'image',
            type: 'Image',
            title: 'Image',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Paragraphes',
            of: [{ name: 'title', type: 'paragraph', title: 'Paragraphe' }],
        },
        {
            name: 'youtubeUrl',
            type: 'url',
            title: 'YouTube video URL',
        },
    ],
}
