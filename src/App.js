import React, { useEffect, useState,useRef} from "react";
import "./App.css";
import Welcome from "./components/welcome";
import Main from "./components/Main";
import Navbar from "./components/Nabar";
import Loadingbar from './components/Loadingbar'

function App() {

  const [count, setCount] = useState(1);
  const loadkar = useRef(null);
  const seconloadhonaji=useRef(null);

  useEffect(() => {

    const loadbar = loadkar.current;
    const loadkarneketurantbaad=seconloadhonaji.current;

    loadkarneketurantbaad.style.display='none';
    if (count <= 100) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount *1.08);
      }, 50);

      return () => clearTimeout(timer);
    }    
    
    setTimeout(()=>{
      if (loadbar) {
      loadbar.style.display = 'none';
      loadkarneketurantbaad.style.display='block';
    }
    },1000)
    

  }, [count]);
  
  return (
    <>

    <div className="container" ref={loadkar}>
      <Loadingbar count={count}/>
    </div>

    <div className="wrapper" ref={seconloadhonaji}>

          <div className="top" >
            <Navbar />
          </div>
          <div className="hello">
              Hello!
          </div>
          <div className="first" id="Home">
            <Welcome />
          </div>
          <div className="second">
          <Main />
          </div> 

    </div>

    </>
  );
}

export default App;

