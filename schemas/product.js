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
            name: 'category',
            type: 'object',
            fields: [
                {
                    title: 'Category',
                    name: 'category',
                    type: 'reference',
                    to: [{ type: 'subCategory' }],
                },
            ],
        },
    ],
}
