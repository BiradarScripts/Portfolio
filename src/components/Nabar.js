import {React,useRef,useState} from 'react'

export default function Nabar() {

  const inputElement = useRef();
  const [Mode,setMode]=useState("closed");

  const handleChange=(()=>{
    if(Mode==="closed"){
      setMode("open")
    }
    else{
      setMode("closed")
    }
  })
  
  return (
    <>
       <header>
      <div className="navbar">
        <div className="logo"><a href="#Home">BIRADAR</a></div>
        <ul className="links">
          <li><a href="#pehla">About</a></li>
          <li><a href="#dusra">Work</a></li>
          <li><a href="#thisra">Contact</a></li>
        </ul>
        <div className="toggle_btn" ref={inputElement} onClick={handleChange}>
            <i className="fa-solid fa-bars"></i>
            {/* <i className="fa-duotone fa-square" style={{ '--fa-primary-color': '#000000', '--fa-secondary-color': '#000000', '--fa-secondary-opacity': 0.2 }}></i> */}
        </div>
      </div>
      <div className={`dropdown_menu_${Mode}`} >
          <li><a href="/About">About</a></li>
          <li><a href="/Work">Work</a></li>
          <li><a href="/Contact">Contact</a></li>
      </div>
    </header>
    </>
  )
}
