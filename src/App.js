import './App.css';
import Conversation from './components/conversation/Conversation';
import './styles/constants.css'
import Navigation from './components/navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestAbout from './components/TestAbout';
import TestContacts from './components/TestContacts';
import TestHome from './components/TestHome';
import { useEffect, useState } from 'react';


function App() {
    const [ items, setItems ] = useState([]);

    useEffect(()=> {
        getAmountOfItems()
        window.addEventListener('resize', getAmountOfItems);
    }, [])


    const getAmountOfItems = () => {
        let width = window.innerWidth;
        let arr = [...Array(Math.floor(width / 550))];
        if (arr.length === 0) arr[0] = 0
        setItems(arr);
    }
    
    return (
        <Router>
            <div className="app-container">
                <Navigation />
                <div className='multi-conver-cont'>
                    {items.map(item => (
                        <Conversation />
                    ))}
                </div>
                <Routes>
                    <Route  path='/about' element={<TestAbout />} />
                    <Route  path='/contacts' element={<TestContacts />} />
                    <Route exact path='/' element={<TestHome />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
