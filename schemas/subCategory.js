import { MdCategory } from 'react-icons/bs'

export default {
    name: 'subCategory',
    title: 'Sub category',
    type: 'document',
    icon: MdCategory,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre',
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
            name: 'image',
            type: 'Image',
            title: 'Image',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image.image',
        },
    },
}
