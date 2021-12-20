import React,{useState} from "react";
import './ImageCard.css'

function SearchBar({setTerm}){
    const [text,setText]=useState('')
    const changeHandler=(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setText(event.target.value)
        
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        setTerm(text)
    }
    
    return(
        <form action="" onSubmit={submitHandler} className='py-10 max-w-md mx-auto flex px-4 justify-center'>
            <input type="text" className='border-b-4 focus:outline-none focus:placeholder:invisible px-4' placeholder='silahkan cari disini' onChange={changeHandler}/>
            <input type="submit" value="search" className='px-4 py-2 bg-green-300 hover:cursor-pointer'/>
        </form>
    )
}


export default SearchBar