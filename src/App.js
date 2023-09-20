import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List.js";
import Home from "./components/Main";
import PostItem from "./components/PostItem";
import Details from "./components/Details";
import EditList from "./components/EditList";
import DeleteList from "./components/DeleteList";
function App() {
 

  return (
    <div>
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/table" element={<List />}></Route>
          <Route path="/post" element={<PostItem />}></Route>
          <Route path="/details/:listid" element={<Details />}></Route>
          <Route path="/edit/:listid" element={<EditList />}></Route>
          <Route path="/delete/:listid" element={<DeleteList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
