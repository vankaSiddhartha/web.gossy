import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './Components/Hero'
import Navigation from './Components/Navigation'
import PollView from './Components/PollView'
import GetPolled from './Components/GetPolled'
import AddFriend from './Components/AddFriend'
import Post from './Components/Post'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import Terms from './Components/Terms'
import Policy from './Components/Policy'
import Careers from './Components/Careers'
import PostDetail from './Components/PostDetail'



function App() {
 

  return (
 <Router>
      <Routes>
        <Route path="/" element={
         <>
         <Navigation/>
         <Hero/>
         <PollView/>
         <GetPolled/>
         <AddFriend/>
         <Post/>
         <PostDetail/>
         <Footer/>
         
         </>
        } />
        <Route path='/about' element ={
          <About/>
        }/>
        <Route path='/contact' element ={
          <Contact/>
        }       />
         <Route path='/terms-of-service' element ={
          <Terms/>
        } />
           <Route path='/privacy-policy' element ={
          <Policy/>
        } />
               <Route path='/help-center' element ={
                  <Contact/>
        } />
                  <Route path='/careers' element ={
                  <Careers/>
        } />
      </Routes>
    </Router>

  )
}

export default App
