import { FcTimeline } from 'react-icons/fc'

export default {
    name: 'subCategory',
    title: 'Sous categories',
    type: 'document',
    icon: FcTimeline,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre',
            description: 'Saisissez un nom pour la sous-categorie',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description:
                "Veuillez générer un slug, il peut être integré à la fin de l'URL",
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
            description:
                'image representative de la sous-categorie sur le site web.',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image.image',
        },
    },
}
