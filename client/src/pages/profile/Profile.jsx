import  React, { useState } from 'react';
import EditProfile from '../../components/EditProfile/EditProfile';
import Order from '../../components/Order/Order';
import Account from '../../components/Account/Account';
import "./Profile.css";

const App = () => {
  const [showMyComponent, setShowMyComponent] = useState(false);
  const handleClick = () => {
    setShowMyComponent(true);
  };
  
  return (
      <div className='main_tan'>
        <main className="tan" >
          <section className="account-info">
            <Account />  
            <div >
              <button onClick={handleClick} className='edit-btn'>Edit Profile</button>
                <div className='edit-profile'>
                  {showMyComponent && <EditProfile />}
                </div>
            </div>
          </section>
          <section className="order-history">
            <Order />
          </section>
        </main>
      </div>
  );
}

export default App;
