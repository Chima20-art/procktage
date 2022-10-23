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
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
                        .trim()
                        .replace(/\s+/g, '-')
                        .slice(0, 200),
            },
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
