import React, { useContext } from 'react';
import Categories from '../Categories/Categories';
import { MyContext } from '../../App';

const Home = (props) => {
    const category = useContext(MyContext);
    return (
        <div>
            <h1>This is Home :{category}</h1>
            <Categories count={category}></Categories>
        </div>
    );
};

export default Home;