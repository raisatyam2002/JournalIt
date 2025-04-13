import { Routes, Route } from "react-router-dom";
import Today from "./pages/Today";
import SideBarLayout from "./components/SideBarLayout";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<SideBarLayout></SideBarLayout>}>
          <Route path="/today" element={<Today></Today>}></Route>
          <Route path="/calendar" element={<Calendar></Calendar>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
