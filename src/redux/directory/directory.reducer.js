import Indica from '../../assets/indica.jpg';
import Sativa from '../../assets/sativa.jpg';
import Hybrid from '../../assets/hybrid.jpg';
import Edibles from '../../assets/edibles.jpg';
import Accessories from '../../assets/accessories.jpg';


const INITIAL_STATE = {
    sections: [
        {
            title: 'indicas',
            imageUrl: Indica,
            linkUrl: 'shop/indicas'
        },
        {
            title: 'sativas',
            imageUrl: Sativa,
            id: 2,
            linkUrl: 'shop/sativas'
        },
        {
            title: 'hybrids',
            imageUrl: Hybrid,
            id: 3,
            linkUrl: 'shop/hybrids'
        },
        {
            title: 'edibles',
            imageUrl: Edibles,
            size: 'large',
            id: 4,
            linkUrl: 'shop/edibles'
        },
        {
            title: 'accessories',
            imageUrl: Accessories,
            size: 'large',
            id: 5,
            linkUrl: 'shop/accessories'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;