import S from '@sanity/desk-tool/structure-builder'
import { FcHome, FcSettings, FcFilingCabinet } from 'react-icons/fc'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .icon(FcSettings)
                .title('Site settings')
                .child(
                    S.editor()
                        .schemaType('settings')
                        .documentId('settings')
                        .title('Site settings')
                ),
            // Add a visual divider (optional)
            S.listItem()
                .title('Pages')
                .icon(FcFilingCabinet)
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .icon(FcHome)
                                .title('Home Page')
                                .child(
                                    S.editor()
                                        .schemaType('homePage')
                                        .documentId('homePage')
                                        .title('home Page')
                                ),
                        ])
                ),
            S.divider(),
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['settings', 'homePage'].includes(listItem.getId())
            ),
        ])
