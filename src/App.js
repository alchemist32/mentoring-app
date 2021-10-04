// @flow
import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import 'purecss';

// Components
import SidebarComponent from './components/SidebarComponent/SidebarComponent';
import UserComponent from './components/UserComponent/UserComponent';

// Service
import { getUsers } from './services/usersService';

// Context
import Context from './Context';

export default function App() {
  const usersData = UsersEffect();
  const [themeDark, setThemeDark] = useState(false);
  const value = { themeDark, setThemeDark };
  const cards = usersData?.data?.map((user) => {
    return <UserComponent user={user} key={user.id} />;
  });

  const bgColor = SetDarkBG(themeDark);
  console.log(bgColor);

  return (
    <Context.Provider value={value}>
      <div className="App" style={{ backgroundColor: bgColor }}>
        <SidebarComponent />
        <div className="cards-container">{cards}</div>
      </div>
    </Context.Provider>
  );
}

function UsersEffect() {
  const [users, setUsers] = useState({});
  useEffect(() => {
    const onGetUsers = async () => {
      setUsers(await getUsers());
    };
    onGetUsers();
  }, []);

  return users;
}

function SetDarkBG(colorFlag) {
  if (colorFlag) {
    return '#333333';
  }
  return '#e2e2e2';
}
