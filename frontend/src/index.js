import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Classic/Home/';
import Register from './pages/Connect/Register/';
import Login from './pages/Connect/Login/';
import GuildChoice from './pages/Guild/GuildChoice/';
import CreateGuild from './pages/Guild/CreateGuild/';
import JoinGuild from './pages/Guild/JoinGuild/';
import Achievements from './pages/Classic/Achievements/';
import Error from './pages/Error/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/guildchoice' element={<GuildChoice/>} />
      <Route path='/guildchoice/create' element={<CreateGuild/>} />
      <Route path='/guildchoice/join' element={<JoinGuild/>} />
      <Route path='/achievements/:userid' element={<Achievements/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
