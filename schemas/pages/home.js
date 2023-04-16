export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'object',
    fields: [
        {
            title: 'Sections',
            name: 'Sections',
            type: 'array',
            of: [
                {
                    name: 'Section',
                    title: 'Section',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'descriptionTitle',
                            title: 'Titre descriptif ',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        },
                        {
                            name: 'image',
                            title: 'Background Image',
                            type: 'Image',
                        },
                        {
                            name: 'refrence',
                            title: 'Category',
                            type: 'reference',
                            to: [
                                {
                                    type: 'category',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
