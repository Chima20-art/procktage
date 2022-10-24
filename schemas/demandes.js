export default {
    name: 'demandes',
    type: 'document',
    title: 'Demandes',
    fields: [
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
}
