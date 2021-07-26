import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {Context} from './index';
import {observer} from 'mobx-react-lite';
import {IUser} from './models/IUser';
import UserService from './services/UserService';
import TabMenu from './components/Tabs';
import {Button, Container} from 'react-bootstrap';

function App() {
  const {store} = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e)
    }
  }

  if(store.isLoading) {
    return (
      <div>Загрузка...</div>
    )
  }

  if(!store.isAuth) {
    return (
    <div>
      <TabMenu />
    </div>
    )
  }

  return (
    <Container>
      <h1>{store.isAuth ? `${store.user.email} Авторизован` : 'НЕ авторизован'}</h1>
      <h1>{store.user.isActivated ? `Аккаунт подтвержден` : 'Аккаунт НЕ подтвержден'}</h1>
      <Button onClick={() => store.logout()}>Выйти</Button>
      <div className="mt-2">
        <Button onClick={getUsers}>Получить пользователей</Button>
      </div>
      {
        users.map(user =>
          <div key={user.email}>{user.email}</div>
        )
      }
    </Container>
  );
}

export default observer(App);
