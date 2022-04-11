import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>This is Service:{name}</h2>
        </div>
    );
};

export default Service;