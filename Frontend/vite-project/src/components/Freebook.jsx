import React, { useEffect, useState } from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios'


function Freebook() {
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book");
        
        const data=res.data.filter((data)=>data.category==="Free");
        console.log(data);
        setBook(data);
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[]);
    
    // Slider

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
   <>
   <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4s'>
   <div>
   <h1 className='font-bold text-xl pb-2'>Free offered courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur aut in maxime animi aliquid officiis ad voluptates. Temporibus accusantium sit veniam, tempore placeat porro! Minus debitis eum ut odio</p>
   </div>



   <div>

    {/* for slider */}

   <Slider {...settings}>
        {list.map((item)=>(<Cards item={item} key={item.id}/>))}
      </Slider>
   </div>
   </div>
   </>
  )
}

export default Freebook;