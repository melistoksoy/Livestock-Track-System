import React from 'react'
import hayvan from './assets/hayvan.gif'

function Home() {
  return (
    <div className='d-flex flex-column'>
      <h1 className='text-center' style={{ color: '#435B66',marginTop:'100px' }}>Hayvan Kayıt ve Takip Sistemine Hoşgeldiniz...
      </h1>
      <img className='cow'src={hayvan} alt="" width='450px' height='350px'/>
      <img className='cow-rev'src={hayvan} alt="" width='450px' height='350px'/>
    </div>
  )
}

export default Home