import React, {useState} from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    const [count, setCount] = useState(0);

    const pluss = () => {
        setCount(count += 1);
    }
    const minus = () => {
        setCount(count -= 1);
    }
    return (
        <div>
            <h1 className={`${headerStyles.title}`} >
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
            <h1 className='title'>number: {count}</h1>
            <button onClick={pluss}>+</button><button onClick={minus}>-</button>
            <style jsx>
                {`
                    .title {
                        color: ${count > 5 ? 'red' : 'blue'}
                    }
                `}
            </style>
            
        </div>
    );
};

export default Header;