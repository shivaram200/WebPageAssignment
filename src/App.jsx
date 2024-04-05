import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Review from './components/Review'
import Press from './components/Press'
import Join from './components/Join'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Content></Content>
      <Review></Review>
      <Press></Press>
      <Join></Join>
      <Footer></Footer>

    </div>
  )
}

export default App