export default {
    name: 'demandes',
    type: 'document',
    title: 'demandes',
    fields: [
        {
            name: 'entrepriseName',
            type: 'string',
            title: "Nom de l'entreprise",
        },
        {
            name: 'nomResponsable',
            type: 'string',
            title: 'Nom du responsable',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
        {
            name: 'telephone',
            type: 'string',
            title: 'telephone',
        },
        {
            name: 'message',
            type: 'string',
            title: 'Message',
        },
    ],
}
