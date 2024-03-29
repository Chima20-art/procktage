// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import settings from './settings'
import seo from './seo'
import Image from './image'
import category from './category'
import product from './product'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import subCategory from './subCategory'
import blockContent from './blockContent'
import home from './pages/home'
import contact from './contact'
import demandes from './demandes'
import entreprise from './pages/entreprise'
import paragraph from './paragraph'
import instaCatalogue from './instaCatalogue'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        settings,
        seo,
        Image,
        category,
        subCategory,
        product,
        blockContent,
        home,
        contact,
        demandes,
        entreprise,
        paragraph,
        instaCatalogue,
    ]),
})
