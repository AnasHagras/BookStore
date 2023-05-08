import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import CSidebar from "./CSidebar";
import Books from "./Books";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutsWithNavbar></LayoutsWithNavbar>}>
            <Route path="/" element={<CSidebar></CSidebar>}>
              <Route path="/books" element={<Books></Books>}></Route>
              <Route path="/second" element={<h1>Nested2</h1>}></Route>
            </Route>
          </Route>
          <Route path={"*"} element={<h1>Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const LayoutsWithNavbar = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default App;
