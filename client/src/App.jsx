import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GastosPage } from './pages/GastosPage';
import { GastosFormPage } from './pages/GastosFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className=" container  mx-auto min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow container mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/gastos" />} />
            <Route path="/gastos" element={<GastosPage />} />
            <Route path="/crear-gastos" element={<GastosFormPage />} />
            <Route path="/gastos/:id" element={<GastosFormPage />} />
          </Routes>
        </div>
        <Toaster />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
