import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import ByCategoryPage from "./Pages/ByCategoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/byCategory/:categoryID' element={<ByCategoryPage />} />
          <Route path='/details/:postID' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
