import { useState, useEffect } from "react";

import Timer from "./components/Timer/Timer";
import './style.css'

function App() {
  console.log('Render in App');
  const [imgUrl, setImgUrl] = useState('https://images.unsplash.com/photo-1652447163961-5e1ab9460372?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIwNDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM0ODAzMzU&ixlib=rb-1.2.1&q=80&raw_url=true');

  function changeBGhandler () {
    fetch('https://api.unsplash.com/photos/random/?client_id=YXEDcfSBcMBH7p7gsuSKfDeiUlCGSGdF1ESSdNey7Sg&orientation=landscape&topics=6sMVjTLSkeQ', {
      method: 'GET'
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(data => setImgUrl(data.urls.regular))
  }

  return (
    <div className="App" 
    // style={{ 
    //   // backgroundImage: `url(${imgUrl})`,
    //   background: `url(${imgUrl}) no-repeat center center fixed`, 
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'contain',        
    // }}
    >
      <header className="App-header">
      </header>
      <Timer />
    </div>
  );
}

export default App;
