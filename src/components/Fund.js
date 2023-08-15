import { useState } from 'react';
import qr from './qr.jpg';
import './Fund.css';

function Support() {
  const [amount, setAmount] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  function submitDonation() {
    alert(`Donation of ${amount} bucks received!`);
    setShowThankYou(true);
    console.log(`THANK YOU SO MUCH FOR SUPPORTING WITH ${amount} bucks`);
  }

  return (
    <div className="card1">
      <h1>Support Us!!</h1>
      <div className="qr-code-container">
        <img src={qr} alt="QR Code for Donation" />
      </div>
      <div className="donate-form">
        {!showThankYou ? (
          <>
            <label htmlFor="amount">Enter Amount to be Paid:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
            <button onClick={submitDonation}>Submit</button>
          </>
        ) : (
          <button  className="thank-you"><a href="http://localhost:3000">Thank you for your Support!</a></button>
        )}
      </div>
    </div>
  );
}

export default Support;
