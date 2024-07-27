import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home/HomePage";
import PortfolioPage from "@/pages/Portfolio/PortfolioPage";
import ContactPage from "@/pages/Contact/ContactPage";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;