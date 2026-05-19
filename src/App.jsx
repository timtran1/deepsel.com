import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import PrivacyPolicy from "./routes/PrivacyPolicy.jsx";
import TermsOfService from "./routes/TermsOfService.jsx";
import VAT from "./routes/VAT.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/vat" element={<VAT />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
