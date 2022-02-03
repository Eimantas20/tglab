import './App.css';
import Conversation from './components/conversation/Conversation';
import './styles/constants.css'
import Navigation from './components/navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestAbout from './components/TestAbout';
import TestContacts from './components/TestContacts';
import TestHome from './components/TestHome';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Conversation />
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
