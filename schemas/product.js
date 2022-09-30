export default {
    name: 'product',
    type: 'document',
    title: 'product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'reference',
            type: 'string',
            title: 'Numero de reference',
        },
        {
            name: 'image',
            type: 'image',
            title: 'image',
        },
        {
            name: 'subCategory',
            type: 'object',
            fields: [
                {
                    title: 'Subcategory',
                    name: 'Subcategory',
                    type: 'reference',
                    to: [{ type: 'subCategory' }],
                },
            ],
        },
        {
            name: 'content',
            type: 'blockContent',
            title: 'Content',
        },
        {
            name: 'description',
            type: 'array',
            title: 'Variants',
            of: [
                {
                    name: 'description',
                    type: 'object',
                    title: 'Variants',
                    fields: [
                        {
                            name: 'reference',
                            type: 'string',
                            title: 'Reference',
                        },
                        {
                            name: 'volume',
                            type: 'string',
                            title: 'Volume',
                        },
                        {
                            name: 'quantite',
                            type: 'string',
                            title: 'Quantite',
                        },
                    ],
                },
            ],
        },
    ],
}
