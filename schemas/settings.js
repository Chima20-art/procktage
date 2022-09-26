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
            name: 'media',
            type: 'object',
            title: 'Social media',
            fields: [
                {
                    name: 'facebook',
                    type: 'url',
                    title: 'Facebook',
                    description: 'Add facebook link',
                },
                {
                    name: 'instagram',
                    type: 'url',
                    title: 'Instagram',
                    description: 'Add Instagram link',
                },
                {
                    name: 'whatsapp',
                    type: 'url',
                    title: 'Whatsapp',
                    description: 'Add whatsapp link',
                },
                {
                    name: 'tiktok',
                    type: 'url',
                    title: 'Tiktok',
                    description: 'Add tiktok link',
                },
            ],
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
    ],
}
