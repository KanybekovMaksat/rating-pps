import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../../components/NavBar";

function UserInfoA() {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [userData, setUserData] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedStages, setSelectedStages] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.pps.makalabox.com/api/user/account/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [id, token]);

  const toggleItemSelection = (itemId, stage) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(item => item !== itemId));
      const newSelectedStages = { ...selectedStages };
      delete newSelectedStages[itemId];
      setSelectedStages(newSelectedStages);
    } else {
      setSelectedItems([...selectedItems, itemId]);
      setSelectedStages({ ...selectedStages, [itemId]: stage });
    }
  };

  const handleActionSelected = async (action) => {
    try {
      const idBag = selectedItems.map(itemId => ({ id: itemId }));
      const requestData = { idBag };
      await axios.put(`https://api.pps.makalabox.com/api/admin/${action}`, requestData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFreezeSelected = () => handleActionSelected('freeze');
  const handleActiveSelected = () => handleActionSelected('active');

  const renderUserInfo = (userInfo) => (
    <div className="userInfo">
      <div className="userInfo__right">
        <p className="userInfo__name">ФИО: {userInfo?.name}</p>
        <p className="userInfo__text">{userInfo?.institut}</p>
        <p className="userInfo__text">{userInfo?.regular}</p>
      </div>
      <div className="userInfo__left">
        <p className="userInfo__text">{userInfo?.position}</p>
        <p className="userInfo__text">{userInfo?.email}</p>
      </div>
    </div>
  );

  const renderUserActivity = (title, data) => (
    data?.length > 0 && (
      <div className="userSection bline">
        <h2 className="userInfo__title">{title}</h2>
        {data.map((item, i) => (
          <div className="userInfo-in userInfo__text-S" key={item.id} style={{ backgroundColor: i % 2 === 0 ? '#0047FF4D' : '#33FF001A' }}>
            <p className={`userInfo-in-text ${item.status === 'freeze' ? 'crossed-out' : ''}`}>{item.name}</p>
            <div>
              <Link to={item.link}>Link</Link>
              <input
                className="check"
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleItemSelection(item.id, item.stage)}
              />
            </div>
          </div>
        ))}
      </div>
    )
  );

  return (
    <div className="сontents">
      <div className="private-office-contents">
        <div className="header">
          <NavBar />
        </div>
        <div className="userData">
          {renderUserInfo(userData.userInfo)}
          {renderUserActivity("Личные достижения:", userData.userAwards)}
          {renderUserActivity("Научно-исследовательская деятельность:", userData.userResearch)}
          {renderUserActivity("Инновационно-образовательная деятельность:", userData.userInnovative)}
          {renderUserActivity("Воспитательная, общественная деятельность:", userData.userSocial)}
          <div className="auth__btn-center jc-sb">
            <button className="bnt__log" onClick={handleFreezeSelected}>Заморозить</button>
            <button className="bnt__log" onClick={handleActiveSelected}>Разморозить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoA;
