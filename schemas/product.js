import { FcIcons8Cup } from 'react-icons/fc'

export default {
    icon: FcIcons8Cup,
    name: 'product',
    type: 'document',
    title: 'Produits',

    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre',
            description: 'Nom du produit',
            validation: (Rule) => Rule.required(),
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
            name: 'reference',
            type: 'string',
            title: 'Reference',
            description: 'Reference du produit',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'Image du produit',
            validation: (Rule) => Rule.required(),
        },

        {
            title: 'Sous-categorie',
            name: 'Subcategory',
            type: 'reference',
            description:
                'Choisissez la sous-categorie de laquelle le produit dépendra',
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
            title: 'Contenu',
            description: 'Text description produit',
        },
        {
            name: 'description',
            type: 'array',
            title: 'Tableau ',
            description:
                'ce tableau contient : la reference, la taille/dimensionement du produit, la quantité par paquet.',
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
                                    sizing ? ' - ' + sizing : ''
                                }${quantite ? ' - ' + quantite : ''}`,
                            }
                        },
                    },
                },
            ],
        },
    ],
}
