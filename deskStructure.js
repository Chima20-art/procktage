import S from '@sanity/desk-tool/structure-builder'
import { FcHome, FcSettings, FcFilingCabinet } from 'react-icons/fc'
import { ReferencedByView } from 'part:@indent-oss/sanityio-referenced-by'

export const getDefaultDocumentNode = () => {
    return S.document().views([
        S.view.form(),
        S.view.component(ReferencedByView).title('Referenced by'),
    ])
}

export default () =>
    S.list()
        .title('Contenu')
        .items([
            S.listItem()
                .icon(FcSettings)
                .title('Paramètres du site')
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
