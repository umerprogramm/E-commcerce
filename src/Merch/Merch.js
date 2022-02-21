import React from 'react'
import Hoodies from './Hoodies'
import './merch.css'
import YS_merch from './YS_merch'

export default function Merch() {
  return (
    <>    
    <div data-aso='fade-in' className='merch'>

      <p>HOODIES</p>
      <p>SWEATSHIRTS</p>



    </div>
      <Hoodies />
      <div className='second_section'>

      <p>YS MERCH</p>
      <p>TROUSERS</p>
      </div>
      <YS_merch/>
    </>


  )
}
