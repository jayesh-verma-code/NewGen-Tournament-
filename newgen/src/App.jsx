import React from 'react'
import Banner from './components/banner'
import Header from './components/header'
import Cards from './components/cards'
import Faq from './components/faq'
import Landing from './components/landing'
import Back from './components/back'
import Marqee from './components/marqee'
import Iconmarqee from './components/iconmarqee'


function App() {
  return (
    <div className= 'w-full min-h-screen bg-[#fff]'>
      <Header/>
      <Back/>
     <Cards/>
     <Faq/>
     <Landing/>
     <Marqee/>
     <Iconmarqee/>
    </div>
  )
}

export default App