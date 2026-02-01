//import { useState } from 'react'
import Navbar from '/src/components/Navbar/Navbar'
import Header from '/src/components/Header/Header'
import Footer from '/src/components/Footer/Footer'
import Form from  '/src/components/Form/Form';
import Firstcomponent from './components/firstcomponent';

import cybersecurityImg from './assets/cybersecurity.jpeg';

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'



function App() {

 return (
 <div>
   <Header/>
   <Navbar/>
   

   
    <h1>hello wolrd</h1>
    <h1>sravanthi</h1>
    <img className='img' src={cybersecurityImg} alt="Cyber Security" />
    <p> sravnthi Large image files might cause performance issues or errors during the build process. If the file is too large, try optimizing it or using a smaller version.

    </p>
    <Form/>
    
    <button>sravtnhi</button>
    <Firstcomponent name = "sravanthi" />
    <Footer/>

    

 </div>
 );

}

export default App
