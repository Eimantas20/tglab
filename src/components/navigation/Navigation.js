import { useState } from 'react';
import '../../styles/navigation.css';
import { Link } from 'react-router-dom';
import openMenu from '../../img/menu-open.png';
import closeMenu from '../../img/menu-close.png';

const Navigation = () => {
    const [ menu, setOpenMenu ] = useState(false)

    return(
        <div className="navigation">
            <img className={menu ? 'menu-btn hide-btn' : 'menu-btn show-btn'} src={openMenu} onClick={() => setOpenMenu(true)} alt='Open menu' />
            <img className={menu ? 'menu-btn show-btn' : 'menu-btn hide-btn'} src={closeMenu} onClick={() => setOpenMenu(false)} alt='Close menu'/>
            <div className={menu ? 'navigation-items show-btn' : 'navigation-items hide-btn'}>
                <Link to='/' onClick={() => setOpenMenu(false)}>Home</Link>
                <div className='nav-br' />
                <Link to='/about' onClick={() => setOpenMenu(false)}>About</Link>
                <div className='nav-br' />
                <Link to='/contacts' onClick={() => setOpenMenu(false)}>Contact</Link>
            </div>
        </div>
    )
}

export default Navigation