import React, { useState } from 'react';
import Sections from './directory.data.js'
import MenuItem from '../menu-item/menu-items.component';
import './directory.style.scss'


const Directory = () => {

    const [sections] = useState(Sections)
    return (
        <div className="directory-menu">

            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

export default Directory