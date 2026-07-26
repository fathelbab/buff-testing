import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './routes/Home.tsx'
import Login from './routes/Login.tsx'
import Navbar from './components/Navbar'
import './App.css'
import CartDrawer from './components/CartDrawer.tsx';
import FloatingCart from './components/FloatingCart.tsx';
import Footer from './components/Footer.tsx';
import Menu from './routes/Menu.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <div className="bg-page">
            <Navbar />
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
            <Footer />
            <FloatingCart />
            <CartDrawer />
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
