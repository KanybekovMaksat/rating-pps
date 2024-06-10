import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import PrivateRoute from './components/PrivateRoute';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';
import PageNotFound from './pages/PageNotFound';
import Wellcome from './pages/Wellcome';
import Home from './pages/Home';
import LPPS from './pages/home/LPPS';
import Authorization from './pages/home/Authorization';
import Registration from './pages/home/Registration';
import Questionnaire from './pages/home/Questionnaire';
import PrivateOffice from './pages/home/PrivateOffice';
import Muit from './pages/MUIT';
import Rating_pps from './pages/MUIT/Rating_pps';
import Rating_inst_un from './pages/MUIT/Rating_inst-un';
import Comteh from './pages/COMTEH';
import Ivtd from './pages/COMTEH/IVTD';
import Eubd from './pages/COMTEH/EUBD';
import Kite from './pages/KITE';
import GiED from './pages/KITE/GiED';
import EiTD from './pages/KITE/EiTD';
import Progress from './pages/home/Progress';
import Research from './pages/home/Research';
import Education from './pages/home/Education';
import Social from './pages/home/Social';
import UserInfo from './pages/home/UserInfo';
import UserInfoA from './pages/home/Admin/UserInfoA';
import Admin from './pages/home/Admin/Admin';
import Lppsa from './pages/home/Admin/LPPSA';
import AwardsInfo from './pages/home/AwardsInfo';
import Redact from './pages/home/Redact';
import RedactProgres from './pages/home/Admin/Redact/RedactProgres';
import RedactResaerch from './pages/home/Admin/Redact/RedactResaerch';
import RedactEducation from './pages/home/Admin/Redact/RedactEducation';
import RedactSocial from './pages/home/Admin/Redact/RedactSocial';
import RedactProgresId from './pages/home/Admin/RedactSub/RedactProgresId';
import RedactResaerchId from './pages/home/Admin/RedactSub/RedactResaerchId';
import RedactEducationId from './pages/home/Admin/RedactSub/RedactEducationId';
import RedactSocialId from './pages/home/Admin/RedactSub/RedactSocialId';

function App() {
  const [role, setRole] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getUserRole = async () => {
      try {
        const response = await axios.get("http://localhost:8092/api/get/role", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setRole(response.data.role);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    if (token) {
      getUserRole();
    }
  }, [token]);

  const renderRoutesForRole = () => {
    if (role === 'admin') {
      return (
        <Route element={<PrivateRouteAdmin />}>
          <Route path='/private_office' element={<PrivateOffice />} />
          <Route path='/Progress' element={<Progress />} />
          <Route path='/Ural' element={<Research />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Social' element={<Social />} />
          <Route path='/user/:id' element={<UserInfo />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user/admin/:id' element={<UserInfoA />} />
          <Route path='/admin_list' element={<Lppsa />} />
          <Route path='/my_account/:id' element={<AwardsInfo />} />
          <Route path='/redact/:id' element={<Redact />} />
          <Route path='/redact_progres' element={<RedactProgres />} />
          <Route path='/redact_resaerch' element={<RedactResaerch />} />
          <Route path='/redact_education' element={<RedactEducation />} />
          <Route path='/redact_social' element={<RedactSocial />} />
          <Route path="/redact_progres/:id" element={<RedactProgresId />} />
          <Route path="/redact_resaerch/:id" element={<RedactResaerchId />} />
          <Route path="/redact_education/:id" element={<RedactEducationId />} />
          <Route path="/redact_social/:id" element={<RedactSocialId />} />
        </Route>
      );
    } else if (role === 'user') {
      return (
        <Route element={<PrivateRoute />}>
          <Route path='/private_office' element={<PrivateOffice />} />
          <Route path='/Progress' element={<Progress />} />
          <Route path='/Ural' element={<Research />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Social' element={<Social />} />
          <Route path='/user/:id' element={<UserInfo />} />
          <Route path='/my_account/:id' element={<AwardsInfo />} />
          <Route path='/redact/:id' element={<Redact />} />
        </Route>
      );
    }
    return null;
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Wellcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/LPPS' element={<LPPS />} />
        <Route path='/Authorization' element={<Authorization />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Questionnaire' element={<Questionnaire />} />
        <Route path='/user/:id' element={<UserInfo />} />
        <Route path='/MUIT' element={<Muit />} />
        <Route path='/MUIT/rating_pps-un' element={<Rating_pps />} />
        <Route path='/MUIT/rating_inst-un' element={<Rating_inst_un />} />
        <Route path='/COMTEH' element={<Comteh />} />
        <Route path='/COMTEH/IVTD' element={<Ivtd />} />
        <Route path='/COMTEH/EUBD' element={<Eubd />} />
        <Route path='/KITE' element={<Kite />} />
        <Route path='/KITE/GiED' element={<GiED />} />
        <Route path='/KITE/EiTD' element={<EiTD />} />
        <Route path='*' element={<PageNotFound />} />
        {renderRoutesForRole()}
      </Routes>
    </Router>
  );
}

export default App;