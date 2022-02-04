import { useState } from 'react';
import '../../styles/navigation.css';
import { Link } from 'react-router-dom';
import openMenu from '../../img/menu-open.png';
import closeMenu from '../../img/menu-close.png';



const Navigation = () => {
    const [ menu, setOpenMenu ] = useState(false)
    return(
        <div className="navigation">
            <img className='open-menu' src={openMenu}/>
            <div className='navigation-items'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contacts'>Contact</Link>
            </div>
        </div>
    )
}

export default Navigation