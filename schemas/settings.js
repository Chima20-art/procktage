export default {
    name: 'settings',
    type: 'object',
    title: 'Settings',
    fields: [
        {
            name: 'seo',
            type: 'seo',
            title: 'Seo',
        },
        {
            name: 'logo',
            type: 'Image',
            title: 'Website Logo',
        },
        {
            name: 'media',
            type: 'object',
            title: 'Social media',
            fields: [
                {
                    name: 'facebook',
                    type: 'url',
                    title: 'Facebook',
                    description: 'Ajouter un link facebook ',
                },
                {
                    name: 'instagram',
                    type: 'url',
                    title: 'Instagram',
                    description: 'Ajouter un link Instagram ',
                },
                {
                    name: 'whatsapp',
                    type: 'url',
                    title: 'Whatsapp',
                    description: 'Ajouter un link whatsapp ',
                },
                {
                    name: 'tiktok',
                    type: 'url',
                    title: 'Tiktok',
                    description: 'Ajouter un link tiktok ',
                },
            ],
        },
        {
            name: 'contact',
            type: 'object',
            title: 'Contact',
            description:
                ' ces informations apparaissent sur le pied de page du siteweb',
            fields: [
                {
                    name: 'adress',
                    type: 'string',
                    title: 'Adresse',
                },
                {
                    name: 'phone',
                    type: 'string',
                    title: 'Telephone',
                },
                {
                    name: 'mobile',
                    type: 'string',
                    title: 'Mobile',
                },
                {
                    name: 'fax',
                    type: 'string',
                    title: 'Fax',
                },
                {
                    name: 'email',
                    type: 'string',
                    title: 'Email',
                },
            ],
        },
    ],
}
