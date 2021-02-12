import React, { useState } from 'react'
import Collections from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'

const ShopPage = () => {

    const [collections] = useState(Collections)
    return (
        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )

}

export default ShopPage;