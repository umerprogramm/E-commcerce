import React, { useState,useEffect } from 'react';
import AOS  from 'aos';
import "aos/dist/aos.css";
import banner  from '../Assets/banner.jpg'
import banner2  from '../Assets/banner2.jpg'
import './banner.css'

export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });

    
  }, []);
  const [condition, setCondition] = useState(true);
  setTimeout(function(){
    setCondition(false) 
 }, 5000)
  return (
    <div className='banner'>


    { 
    condition ?
      <img data-aos="fade-left" src={banner} alt='banner'/>:

      <img  data-aos='fade-out'src={banner2} alt='banner'/>
    }  


    </div>
  )
}
