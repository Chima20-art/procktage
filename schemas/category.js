import { FcMindMap } from 'react-icons/fc'

export default {
    name: 'category',
    type: 'document',
    title: 'Categories',

    icon: FcMindMap,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre',
            description: 'Saisissez un nom pour la catégorie',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description:
                "Veuillez générer un slug, il peut être integré à la fin de l'URL' ",

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
            title: 'Sous-categories',
            description: 'créer ou sélectioner une sous-categorie',
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
