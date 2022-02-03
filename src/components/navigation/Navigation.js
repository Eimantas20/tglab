import '../../styles/navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="navigation">
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contacts'>Contact</Link>
            </div>
        </div>
    )
}

export default Navigation