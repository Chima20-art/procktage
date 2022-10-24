export default {
    name: 'contact',
    type: 'document',
    title: 'Contact',
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
                title: (traite ? '✅' : '🚫') + nomResponsable,
                media: traite ? '✅' : '🚫',
            }
        },
    },
}
