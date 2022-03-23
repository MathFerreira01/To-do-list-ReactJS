import React from 'react';

import './styles.css'

const AddButton = ({children, onClick}) => {
    return (
        <button onClick={onClick} className='add-task-button'>
            {children}
        </button>
    )
}

export default AddButton