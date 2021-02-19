import React, { useContext } from 'react';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';
import { MyContext } from '../../App';



const Categories = () => {
    const category = useContext(MyContext);
    return (
        <div>
            <h1>This is Categories:{category}</h1>
            <CategoriesDetails count={category}></CategoriesDetails>
        </div>
    );
};

export default Categories;