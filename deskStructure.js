import S from '@sanity/desk-tool/structure-builder'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Site settings')
                .child(
                    S.editor()
                        .schemaType('settings')
                        .documentId('settings')
                        .title('Site settings')
                ),
            // Add a visual divider (optional)
            S.divider(),
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem) => !['settings'].includes(listItem.getId())
            ),
        ])
