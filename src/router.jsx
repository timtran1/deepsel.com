import {createBrowserRouter} from "react-router-dom";
import Home from "./routes/Home.jsx";
import PrivacyPolicy from "./routes/PrivacyPolicy.jsx";
import TermsOfService from "./routes/TermsOfService.jsx";

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
    }
])