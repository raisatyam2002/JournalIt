import { Routes, Route } from "react-router-dom";
import Today from "./pages/Today";
import SideBarLayout from "./components/SideBarLayout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<SideBarLayout></SideBarLayout>}>
          <Route path="/today" element={<Today></Today>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
