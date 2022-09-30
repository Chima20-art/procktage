export default {
    name: 'category',
    type: 'document',
    title: 'Categorie',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'title',
        },
        {
            name: 'subCategories',
            title: 'Sub Categories',
            type: 'array',
            of: [
                {
                    name: 'subCategory',
                    title: 'Sub category',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Titre',
                        },
                        {
                            name: 'image',
                            type: 'Image',
                            title: 'Image',
                        },
                    ],
                },
            ],
        },
    ],
}
