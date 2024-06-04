import React from 'react';
import './Refer_Earn.css';
import Sidebar from '../Sidebar/Sidebar';

const Refer_Earn = () => {

  return (
    <div className="ReferAndEarnContainer">
     <Sidebar />
      <div className="ReferAndEarnContent">
        <h1>Refer & Earn</h1>
        <p>Invite your friends and earn rewards!</p>

        <div className="ReferralSteps">
          <h2>How It Works</h2>
          <ol>
            <li>Share your referral link with your friends.</li>
            <li>They sign up using your link.</li>
            <li>You earn rewards when they make their first purchase.</li>
          </ol>
        </div>
        <div className="RewardsSection">
          <h2>Rewards</h2>
          <p>Earn $10 for every friend who signs up and makes a purchase.</p>
        </div>
      </div>
    </div>
  );
};

export default Refer_Earn;
