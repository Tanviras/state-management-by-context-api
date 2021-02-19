import React, { useContext } from 'react';
import { MyContext } from '../../App';

const Header = (props) => {
    const [category,setCategory] = useContext(MyContext);//whoa! what a line! count hoye gelo category, setCount hoye gelo setCategory
    return (
        <div>
            <h1>This is Header:{category}</h1>
            <button 
            // Way-1(using props)
            // onClick={()=>props.handleIncrementButton()}

            //Way-2(using context-api)
            onClick={()=>setCategory(category+1)}>Increase</button>

        </div>
    );
};

export default Header;