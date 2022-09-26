export default {
    name: 'settings',
    type: 'object',
    title: 'Settings',
    fields: [
        {
            name: 'seo',
            type: 'seo',
            title: 'Default seo',
        },
        {
            name: 'logo',
            type: 'Image',
            title: 'Website Logo',
        },
        {
            name: 'contact',
            type: 'object',
            title: 'Contact',
            fields: [
                {
                    name: 'adress',
                    type: 'string',
                    title: 'Adress',
                },
                {
                    name: 'phone',
                    type: 'string',
                    title: 'Phone',
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
        {
            name: 'media',
            type: 'object',
            title: 'Social media',
            fields: [
                {
                    name: 'facebook',
                    type: 'string',
                    title: 'Facebook',
                    description: 'Add facebook link',
                },
                {
                    name: 'instagram',
                    type: 'string',
                    title: 'Instagram',
                    description: 'Add Instagram link',
                },
                {
                    name: 'whatsapp',
                    type: 'string',
                    title: 'Whatsapp',
                    description: 'Add whatsapp link',
                },
                {
                    name: 'tiktok',
                    type: 'string',
                    title: 'Tiktok',
                    description: 'Add tiktok link',
                },
            ],
        },
    ],
}
