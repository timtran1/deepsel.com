import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./routes/Home.jsx";
import PrivacyPolicy from "./routes/PrivacyPolicy.jsx";
import TermsOfService from "./routes/TermsOfService.jsx";
import Careers from "./routes/Careers.jsx";
import ReactVie from "./routes/careers/ReactVie.jsx";
import FigmaVie from "./routes/careers/FigmaVie.jsx";
import PythonVie from "./routes/careers/PythonVie.jsx";
import AzureVie from "./routes/careers/AzureVie.jsx";
import PublicAuth from "./components/auth/PublicAuth.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicAuth/>}>
                    {/*<Route element={<WebsiteLayout/>}>*/}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/terms-of-service" element={<TermsOfService/>}/>
                    <Route path="/careers" element={<Careers/>}/>
                    <Route path="/react-v" element={<ReactVie/>}/>
                    <Route path="/figma-v" element={<FigmaVie/>}/>
                    <Route path="/python-v" element={<PythonVie/>}/>
                    <Route path="/devops-v" element={<AzureVie/>}/>
                    {/*</Route>*/}
                </Route>
            </Routes>


        </BrowserRouter>
    )
}

export default App
