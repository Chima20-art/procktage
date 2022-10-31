export default {
    name: 'seo',
    type: 'object',
    title: 'Page seo',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'image seo',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Titre de la page sur le web',
        },

        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description:
                'Cette description s’affiche sous le title et l’URL de votre page telle qu’elle apparaît dans les résultats des moteurs de recherche. Pour qu’elle demeure visible dans Google, elle ne doit pas dépasser les 140-160 caractères.',
        },
    ],
}
