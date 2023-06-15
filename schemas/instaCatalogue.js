import { BsInstagram } from 'react-icons/bi'
import { FaInstagramSquare } from 'react-icons/fa'

export default {
    name: 'instaCatalogue',
    type: 'document',
    title: 'Insta Catalogue',

    icon: FaInstagramSquare,

    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre du produit',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'image',
            description: 'Image',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Produit',
            name: 'product',
            type: 'reference',
            description: "Choisissez le Produit lie a l'image",
            validation: (Rule) => Rule.required(),
            to: [
                {
                    type: 'product',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image.image',
        },
    },
}
