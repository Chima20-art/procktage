import React from 'react'
import { FcHome, FcSettings, FcFilingCabinet } from 'react-icons/fc'

import { FcShop } from 'react-icons/fc'

export default {
    name: 'demandes',
    type: 'document',
    title: 'Demandes de devis',
    icon: FcShop,
    initialValue: () => ({
        status: 'New',
    }),
    fields: [
        {
            name: 'status',
            title: 'Statut',
            type: 'string',

            options: {
                list: [
                    { title: 'Nouvelle demande', value: 'New' },
                    { title: 'Demande envoyée', value: 'replied' },
                    { title: 'Demande confirmée', value: 'Confirmed' },
                    { title: 'Commande envoyée', value: 'Shiped' },
                    { title: 'Commande delivrée', value: 'Delivered' },
                    { title: 'Annulée', value: 'Canceled' },
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
                        { name: 'quantite', type: 'number', title: 'Quantite' },
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
    preview: {
        select: {
            status: 'status',
            email: 'email',
            date: '_createdAt',
        },
        prepare({ status, email, date }) {
            return {
                title: email,
                subtitle: new Date(date).toLocaleDateString(),
                media: (
                    <span style={{ fontSize: '1.5rem' }}>
                        {status == 'New' && '🆕'}
                        {status == 'replied' && '📩'}
                        {status == 'Confirmed' && '🤝'}
                        {status == 'Shiped' && '📦'}
                        {status == 'Delivered' && '✅'}
                        {status == 'Canceled' && '🚫'}
                    </span>
                ),
            }
        },
    },
}
