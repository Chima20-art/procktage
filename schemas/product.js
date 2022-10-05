import { FcIcons8Cup } from 'react-icons/fc'

export default {
    icon: FcIcons8Cup,
    name: 'product',
    type: 'document',
    title: 'product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required(),
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
            name: 'reference',
            type: 'string',
            title: 'Numero de reference',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'image',
            validation: (Rule) => Rule.required(),
        },

        {
            title: 'Subcategory',
            name: 'Subcategory',
            type: 'reference',
            validation: (Rule) => Rule.required(),
            to: [
                {
                    type: 'subCategory',
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
