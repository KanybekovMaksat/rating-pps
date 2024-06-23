import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import PrivateRoute from './components/PrivateRoute';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import LPPS from './pages/home/LPPS';
import Authorization from './pages/home/Authorization';
import Registration from './pages/home/Registration';
import Questionnaire from './pages/home/Questionnaire';
import PrivateOffice from './pages/home/PrivateOffice';
import Muit from './pages/MUIT';
import Rating_ppsm from './pages/MUIT/Rating_ppsm';
import Rating_inst_unm from './pages/MUIT/Rating_inst-unm';
import Comteh from './pages/COMTEH';
import Rating_ppsc from './pages/COMTEH/Rating_ppsc';
import Rating_inst_unc from './pages/COMTEH/Rating_inst-unc';
import Kite from './pages/KITE';
import Rating_ppsk from './pages/KITE/Rating_ppsk';
import Rating_inst_unk from './pages/KITE/Rating_inst-unk';
// import Progress from './pages/home/Progress';
// import Research from './pages/home/Research';
// import Education from './pages/home/Education';
// import Social from './pages/home/Social';
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
        const response = await axios.get("https://api.pps.makalabox.com/api/get/role", {
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
          {/* <Route path='/Progress' element={<Progress />} />
          <Route path='/Ural' element={<Research />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Social' element={<Social />} /> */}
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
          {/* <Route path='/Progress' element={<Progress />} />
          <Route path='/Ural' element={<Research />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Social' element={<Social />} /> */}
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
        <Route path='/' element={<Home />} />
        <Route path='/LPPS' element={<LPPS />} />
        <Route path='/Authorization' element={<Authorization />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Questionnaire' element={<Questionnaire />} />
        <Route path='/user/:id' element={<UserInfo />} />
        <Route path='/MUIT' element={<Muit />} />
        <Route path='/MUIT/rating_pps' element={<Rating_ppsm />} />
        <Route path='/MUIT/rating_inst' element={<Rating_inst_unm />} />
        <Route path='/COMTEH' element={<Comteh />} />
        <Route path='/COMTEH/rating_pps' element={<Rating_ppsc />} />
        <Route path='/COMTEH/rating_inst' element={<Rating_inst_unc />} />
        <Route path='/KITE' element={<Kite />} />
        <Route path='/KITE/rating_pps' element={<Rating_ppsk />} />
        <Route path='/KITE/rating_inst' element={<Rating_inst_unk />} />
        <Route path='*' element={<PageNotFound />} />
        {renderRoutesForRole()}
      </Routes>
    </Router>
  );
}

export default App;