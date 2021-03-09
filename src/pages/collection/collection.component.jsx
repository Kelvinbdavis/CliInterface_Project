import React from 'react'
import { useSelector } from 'react-redux'


import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'


const CollectionPage = ({ match }) => {
    const collection = useSelector(state => selectCollection(match.params.collectionId)(state))
    console.log(collection)
    return (

        <div className="collection">
            <h2 className="">Collection PAGE</h2>
        </div>
    )
}

export default CollectionPage