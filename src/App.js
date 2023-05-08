import React from "react";
import Login from './login/login'
import { useEffect } from "react";
import { gapi } from "gapi-script";
import './App.css';

const clientId = "994968077769-qe2tiovs4ge9v3cqtqlslg27eteg4si4.apps.googleusercontent.com" 

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId : clientId, 
        scope : ""
      })
    }
    gapi.load("client:auth2", start)
  })

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
