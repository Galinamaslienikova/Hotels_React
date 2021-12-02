import { HotelsList } from "./Pages/HotelsList";
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import { ShowHotel } from "./Pages/ShowHotel";



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HotelsList/>}/>
        <Route path='/hotel/:id' element={<ShowHotel />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
