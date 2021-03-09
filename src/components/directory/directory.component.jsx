import React from 'react';
import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'


import MenuItem from '../menu-item/menu-items.component';
import './directory.style.scss'


const Directory = () => {
    const sections = useSelector(state => selectDirectorySections(state))
    return (
        <div className="directory-menu">

            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

export default Directory