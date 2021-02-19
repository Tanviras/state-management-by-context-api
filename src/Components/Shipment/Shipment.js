import React, { useContext } from 'react';
import { MyContext } from '../../App';

const Shipment = () => {
    const category = useContext(MyContext);
    return (
        <div>
            <h1>This is Shipment: {category}</h1>
        </div>
    );
};

export default Shipment;