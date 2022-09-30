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
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'sizing',
                            type: 'string',
                            title: 'Dimensionnement',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'quantite',
                            type: 'string',
                            title: 'Quantite',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'reference',
                            sizing: 'sizing',
                            quantite: 'quantite',
                        },
                        prepare(selection) {
                            const { title, sizing, quantite } = selection
                            return {
                                title: `${title}${
                                    sizing ? ' / ' + sizing : ''
                                }${quantite ? ' / ' + quantite : ''}`,
                            }
                        },
                    },
                },
            ],
        },
    ],
}
