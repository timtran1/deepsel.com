import {createBrowserRouter} from "react-router-dom";
import Home from "./routes/Home.jsx";
import PrivacyPolicy from "./routes/PrivacyPolicy.jsx";
import TermsOfService from "./routes/TermsOfService.jsx";
import Careers from "./routes/Careers.jsx";
import ReactVie from "./routes/careers/ReactVie.jsx";
import FigmaVie from "./routes/careers/FigmaVie.jsx";
import PythonVie from "./routes/careers/PythonVie.jsx";


export default createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
    },
    {
        path: "/terms-of-service",
        element: <TermsOfService/>,
    },
    {
        path: "/careers",
        element: <Careers/>,
    },
    {
        path: "/react-v",
        element: <ReactVie/>,
    },
    {
        path: "/figma-v",
        element: <FigmaVie/>,
    },
    {
        path: "/python-v",
        element: <PythonVie/>,
    }
])