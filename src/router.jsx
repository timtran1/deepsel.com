import {createBrowserRouter} from "react-router-dom";
import Home from "./routes/Home.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
])