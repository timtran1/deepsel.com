import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import PrivacyPolicy from "./routes/PrivacyPolicy.jsx";
import TermsOfService from "./routes/TermsOfService.jsx";
import Careers from "./routes/Careers.jsx";
import FigmaVie from "./routes/careers/FigmaVie.jsx";
import PythonVie from "./routes/careers/PythonVie.jsx";
import AzureVie from "./routes/careers/AzureVie.jsx";
import VAT from "./routes/VAT.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/figma-v" element={<FigmaVie />} />
                <Route path="/python-v" element={<PythonVie />} />
                <Route path="/devops-v" element={<AzureVie />} />
                <Route path="/vat" element={<VAT />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
