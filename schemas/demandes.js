export default {
    name: 'demandes',
    type: 'document',
    title: 'Demandes',
    fields: [
        {
            name: 'status',
            title: 'Statut',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'New' },
                    { title: 'Confirmed', value: 'Confirmed' },
                    { title: 'Shiped', value: 'Shiped' },
                    { title: 'Delivered', value: 'Delivered' },
                    { title: 'Cancled', value: 'Canceled' },
                ],
            },
        },
        {
            name: 'entrepriseName',
            type: 'string',
            title: "Nom de l'entreprise",
            readOnly: true,
        },
        {
            name: 'nomResponsable',
            type: 'string',
            title: 'Nom du responsable',
            readOnly: true,
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            readOnly: true,
        },
        {
            name: 'telephone',
            type: 'string',
            title: 'telephone',
            readOnly: true,
        },
        {
            name: 'message',
            type: 'string',
            title: 'Message',
            readOnly: true,
        },
        {
            name: 'products',
            type: 'array',
            title: 'produits',
            of: [
                {
                    name: 'order',
                    title: 'Order',
                    type: 'object',
                    fields: [
                        {
                            name: 'product',
                            type: 'reference',
                            title: 'produit',
                            to: [
                                {
                                    type: 'product',
                                },
                            ],
                        },
                        {
                            name: 'variant',
                            title: 'Variant Refrence',
                            type: 'string',
                        },
                        { name: 'quantite', type: 'string', title: 'Quantite' },
                    ],
                    preview: {
                        select: {
                            productTitle: 'product.title',
                            variant: 'variant',
                            quantite: 'quantite',
                            prodcutImage: 'product.image',
                        },
                        prepare({
                            productTitle,
                            variant,
                            quantite,
                            prodcutImage,
                        }) {
                            return {
                                title: productTitle,
                                subtitle:
                                    'Variant ref : ' +
                                    variant +
                                    ' - Quantite : ' +
                                    quantite,
                                media: prodcutImage,
                            }
                        },
                    },
                },
            ],
        },
    ],
}
