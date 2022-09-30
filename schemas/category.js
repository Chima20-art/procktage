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
                    name: 'subCategorie',
                    title: 'subCategories',
                    type: 'reference',
                    to: [{ type: 'subCategory' }],
                },
            ],
        },
    ],
}
