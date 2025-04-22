import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screen/Home/Home';
import Header from './Main/Header';
import HowtoWork from './Screen/HowtoWork/HowtoWork';
import Faqs from './Screen/Faqs/Faqs';
import CashbackGift from './Screen/Cashbackgift/CashbackGift';
import Footer from './Main/Footer';
import BalanceChecker from './Screen/BlanaceCheker/BalanceChecker';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/howtowork" element={<HowtoWork/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/balancecheker" element={<BalanceChecker/>} />
        <Route path="/cashbackgift" element={<CashbackGift/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;
