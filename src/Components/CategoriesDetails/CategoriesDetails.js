import React, { useContext } from 'react';
import { MyContext } from '../../App';

const CategoriesDetails = () => {
    const category = useContext(MyContext);
    return (
        <div>
            <h1>This is CategoriesDetails:{category}</h1>
            <h6>Selected Category:{category}</h6>
        </div>
    );
};

export default CategoriesDetails;