import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceid } = useParams();
    return (
        <div>
            <h2>Welcome To Detail: {serviceid}</h2>
        </div>
    );
};

export default ServiceDetails;