
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


const App = () => {
  // ============= Hooks , Function
  const [orderPopup , setOrderPopup] = useState(false);
  const handleOrderPopup = () =>{
    
setOrderPopup(!orderPopup)
  }
  useEffect(() =>{
AOS.init({
  offset:100,
  duration:800,
  easing:"ease-in-sing",
  delay:100,
});
AOS.refresh();
  },[]);
  // ==================  =============
  return (
    <div>App</div>
  )
}

export default App