import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from './component/Index'
import GlobalStyles from './styles/GlobalFont';
import Common from './component/Common';
import Frontend from './component/position/Frontend';
import Design from './component/position/Design';
import Backend from './component/position/Backend';
import ScrollToTop from './hooks/ScrollToTop';
import Admin from './component/admin/Index';
import Register from './component/register/Index';
import Main from './component/admin/partition/Main';
import Fail from './component/admin/partition/Fail';
import Pass from './component/admin/partition/Pass';
import Header from './component/admin/common/Header';
import Detail from './component/admin/detail/Detail';
import Error from './component/404/Error';
import { useSelector } from 'react-redux';
import { TestState } from './app/store';
import { Footer, IndexHeader } from './component/emotion/component';
import Temp from './component/admin/partition/Temp';
import NotTime from './component/404/NotTime';
import ChannelService from './api/ChannelService';
import { KeyboardIOS } from './hooks/KeyboardIOS';

export interface WrapperProps {
  children?: React.ReactNode;
  name?: string;
  text?: string;
  imgSrc?: string;
  alt?: string;
}

function App() {

  useEffect(() => {
    ChannelService.boot({
      "pluginKey": "4a95db46-8630-4d8d-a4ad-005f90e433e1", // fill your plugin key
    });
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <ScrollToTop />
        <Routes>
          <Route element={<IndexHeader />}>
            <Route path='/' element={<Index />} />
            <Route path='/common' element={<Common />} />
            <Route path='/frontend' element={<Frontend />} />
            <Route path='/backend' element={<Backend />} />
            <Route path='/design' element={<Design />} />
            <Route path='/register' element={<Register />} />
          </Route>

          <Route path='/admin' element={<Admin />} />
          <Route path='/404' element={<Error />} />
          <Route path='/*' element={<Error />} />
          <Route path='/notTime' element={<NotTime />} />

          <Route element={<Header />}>
            <Route path='/admin/main' element={<Main />} />
            <Route path='/admin/pass' element={<Pass />} />
            <Route path='/admin/temp' element={<Temp />} />
            <Route path='/admin/fail' element={<Fail />} />
            {/* <Route path='/admin/detail/:position' element={<Detail />} /> */}
          </Route>
        </Routes>
      </BrowserRouter >
    </div >

  );
}

export default App;
