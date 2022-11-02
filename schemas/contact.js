import React from 'react'
import { FcContacts } from 'react-icons/fc'

export default {
    name: 'contact',
    type: 'document',
    title: 'Contacts-Messages',
    icon: FcContacts,
    initialValue: {
        traite: false,
    },
    fields: [
        {
            name: 'traite',
            type: 'boolean',
            title: 'Traité',
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
    ],
    preview: {
        select: {
            traite: 'traite',
            nomResponsable: 'nomResponsable',
        },
        prepare({ traite, nomResponsable }) {
            return {
                title: nomResponsable,
                media: (
                    <span style={{ fontSize: '1.5rem' }}>
                        {traite ? '✅' : '🚫'}
                    </span>
                ),
            }
        },
    },
}
