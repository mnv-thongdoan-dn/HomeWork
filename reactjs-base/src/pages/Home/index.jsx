import React from 'react';
import { Header, Footer } from '../../components/layout'

export default function HomePage() {
  return (
    <div className='page-home'>
      <Header/>
      <main className='page-main'>
        this is home page
      </main>
      <Footer/>
    </div>
  )
}
