import React from 'react';
import  './common.css';
import SelectList from './common/Select';
import User from './components/User';
import SuperUser from './components/SuperUser';


function App() {
  return (
    <div className="App">
    {/* <User/> */}
    <SuperUser/>
    </div>
  );
}
// import { format } from 'path';

export default App;
