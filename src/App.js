import './styles/App.css';
import Conversation from './components/conversation/Conversation';
import './styles/constants.css'
import Navigation from './components/navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import { useEffect, useState } from 'react';


function App() {
    const [ items, setItems ] = useState([]);

    useEffect(()=> {
        getAmountOfItems()
        window.addEventListener('resize', getAmountOfItems);
    }, [])


    const getAmountOfItems = () => {
        let arr = [];
        let width = window.innerWidth;
        if ( width > 1200) {
            arr = [...Array(Math.floor(width / 550))];
        } else {arr[0]=0}
        setItems(arr);
    }
    
    return (
        <Router>
            <div className="app-container">
                <Navigation />
                <div className='multi-conver-cont'>
                    {items.map((item, i ) => (
                        <Conversation key={i}/>
                    ))}
                </div>
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
