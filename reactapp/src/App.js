import React from 'react';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './Login';
import SignupForm from './SignUpForm';
import About from './Aboutus';
import "./Home.css";
import Nav from "./Homepage";
import Resumes from './Resumetemplate';
import Sidebar from './sidebar';
import Personal from './Detail/personal';

function App() {
  return (
    <div>
      {/* <Personal /> */}
    <>
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Nav/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resumes/>}/>
        <Route path='/details' element={<Sidebar/>}/>
      </Routes>
      </div>
    </Router>
    </>
    </div>
  );
}

export default App;