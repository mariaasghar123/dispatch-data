import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import TransportationPage from './pages/transportation/TransportationPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import CareerPage from './pages/careers/CareerPage';
import DatPage from './components/products/Datone/DatPage';
import LoadBoardPage from './components/products/Datone/loadboard/LoadBoardPage';
import FactoringPage from './components/products/Datone/factoring/FactoringPage';
import TrackingPage from './components/products/Datone/tracking/TrackingPage';
import FuelPage from './components/products/Datone/fuelcard/FuelPage';
import DatiqPage from './components/products/Datiq/DatiqPage';
import ReviewPage from './components/products/Datiq/review/ReviewPage';
import BenchmarkPage from './components/products/Datiq/benchmark/BenchmarkPage';
import AnalyticsPage from './components/products/Datiq/analytics_service/AnalyticsPage';
import NetworkAnalytics from './components/products/Datiq/network_analytics/NetworkAnalyticsPage';
import AuthorityPage from './components/products/services/authority/AuthorityPage';
import Login from './components/registration/Login';
import Signup from './components/registration/Signup';
import BrokerPage from './pages/brokers/BrokerPage';
import ShipperPage from "./pages/shippers/ShipperPage"
import ScrollToTop from './ScrollTop';
import Apply from './pages/contact/Apply';

export default function App() {
  return (
    <div>
      <Router>
        <Layout>
          <ScrollToTop/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/transportationsolutions' element={<TransportationPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/career' element={<CareerPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/brokers' element={<BrokerPage/>}/>
          <Route path='/shippers' element={<ShipperPage/>}/>

          {/* Products */}
          <Route path='/one' element={<DatPage/>}/>
          <Route path='/load-board' element={<LoadBoardPage/>}/>
          <Route path='/Factoring' element={<FactoringPage/>}/>
          <Route path='/tracking' element={<TrackingPage/>}/>
          <Route path='/fuel-card' element={<FuelPage/>}/>
          {/* Datiq */}
          <Route path='/iq' element={<DatiqPage/>}/>
          <Route path='/rateview-analytics' element={<ReviewPage/>}/>
          <Route path='/dat-iq-benchmark' element={<BenchmarkPage/>}/>
          <Route path='/analytics-services' element={<AnalyticsPage/>}/>
          <Route path='/network-analytics' element={<NetworkAnalytics/>}/>
          {/* services */}
          <Route path='/operating-authority' element={<AuthorityPage/>}/>
          {/* registration */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
            {/* apply form */}
          <Route path='/apply' element={<Apply/>}/>


        </Routes>
        </Layout>
      </Router>
    </div>
  )
}
