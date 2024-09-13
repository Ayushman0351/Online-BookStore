import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import list from '../../public/list.json'
import { Link } from 'react-router-dom';
import axios from "axios" 
import Book from '../../../../Backend/model/book.model';


function Course() {
  // using axios to get data from db

  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http:/localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[]);
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
      <div className='mt-28 itmes-center justify-center text-center'>
        <h1 className="text-3xl md:4xl">We're delighted to have you here!</h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque animi eum ratione tempore, quidem molestias possimus qui obcaecati ex eligendi, veritatis commodi ipsum cum blanditiis odit rem similique? Dolores, quam?</p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 mt-6'>Back</button>
        </Link>
      </div>

     <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
        /* {  to show items on course page }*/
            list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
        }
     </div>
    </div>
    </>
  );
}

export default Course;