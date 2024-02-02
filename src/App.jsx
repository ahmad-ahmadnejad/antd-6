import { Route, Routes } from "react-router-dom"
import AboutUs from "./AboutUs.jsx"


function App() {

  return (
    <>
     <Routes>
        <Route path="/shop" element={<div>فروشگاه</div>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<div>تماس با ما</div>} />
     </Routes>
    </>
  )
}

export default App
