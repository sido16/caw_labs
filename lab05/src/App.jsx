import React, { useState } from 'react';
import ButtonClickComponent from './components/ButtonClickComponent';
import ToggleButtonComponent from './components/ToggleButtonComponent';
import AppCounter from './components/AppCounter';
import DisplayTab from './components/DisplayTab';
import AuthForm from './components/AuthForm';
import UserList from './components/UserList';
import AddDivForm from './components/AddDivForm';
import DisplayDivs from './components/DisplayDivs';
import './App.css';

const App = () => {

  // EXO 01 *********************************************************************
  
  const [buttonClicked, setButtonClicked] = useState(null);
  
  // ****************************************************************************

  
  // EXO 02 *********************************************************************
  
  const table1 = ["hello", "world", "from", "react"];
  
  const table2 = ["react", "from", "world", "hello"];
  
  // ****************************************************************************

  
  // EXO 03 *********************************************************************

  const [users, setUsers] = useState([]);

  const handleFormSubmit = (userData) => {
    const newUsers = [
      ...users,
      { username: userData.username, password: userData.password },
      { username: 'Bakir', password: 'password123' }, 
      { username: 'Sidou', password: 'password123' },    
    ];

    setUsers(newUsers);
  };

  const handleDeleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  // ****************************************************************************


  // EXO 04 *********************************************************************

  const [divs, setDivs] = useState([]);

  const handleAddDiv = (newDiv) => {
    setDivs([...divs, newDiv]);
  };

//  *****************************************************************************


  return (

    
    <div className="app-container">

      {/*****************************  Exo 01 **********************************/}
      
      <h1>EXO 01</h1>

      <hr />

      <ButtonClickComponent />

      <ToggleButtonComponent />

      <div>

        <button onClick={() => setButtonClicked(1)} className="counter-button">
          Button1
        </button>

        <button onClick={() => setButtonClicked(2)} className="counter-button">
          Button2
        </button>

        <button onClick={() => setButtonClicked(3)} className="counter-button">
          Button3
        </button>

      </div>

      {buttonClicked !== null && (
        <p className="clicked-info">Button #{buttonClicked} was clicked</p>
      )}

      <AppCounter />

      {/***************************** Exo 02 **********************************/}

      <hr />

      <h1>EXO 02</h1>

      <hr />

      <div>

        <DisplayTab tab={table1} displayOption={1} />

        <hr />

        <DisplayTab tab={table1} displayOption={2} />
        
        <hr />

        <DisplayTab tab={table1} displayOption={3} />
        
        <hr />

        <DisplayTab tab={table1} displayOption={4} />
      
      </div>

      <hr />

      <div>

        <DisplayTab tab={table1} displayOption={2} />

        <DisplayTab tab={table2} displayOption={2} />

      </div>

      <hr />

      {/***************************** Exo 03 **********************************/}

      <h1>EXO 03</h1>

      <hr />

      <AuthForm onSubmit={handleFormSubmit} />
      <UserList users={users} onDelete={handleDeleteUser} />

      
      <hr />

      {/***************************** Exo 04 **********************************/}

      <h1>EXO 04</h1>

      <hr />

      <AddDivForm onAddDiv={handleAddDiv} />
      <DisplayDivs divs={divs} />

    </div>

  );
};

export default App;
