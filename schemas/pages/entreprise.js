export default {
    name: 'entreprise',
    type: 'object',
    title: 'Entreprise',
    fields: [
        {
            name: 'content',
            type: 'blockContent',
            title: 'Text',
            description: "Description de l'entreprise",
        },
        {
            name: 'image',
            type: 'Image',
            title: 'Image',
        },
    ],
}
