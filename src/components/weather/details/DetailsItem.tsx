import React from 'react';
import './DetailsItem.css'

interface DetailsItemProps {
    title: string;
    information: string;
}

const DetailsItem: React.FC<DetailsItemProps> = ({ title, information: information }) => {
    return (
        <div className='overall__container__details_item'>
            <h1>{title}</h1>
            <span>{information}</span>
        </div>
    );
}

export default DetailsItem;
