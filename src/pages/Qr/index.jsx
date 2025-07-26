import React from 'react';
import DigitalCard from '../../components/QR/DigitalCard';
 function Qr() {

    // Function to get query param
    function getQueryParam(name) {
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.get(name);
    }

const sharedBy = getQueryParam('fullname') || 'Guest';
const qrValue = `/?fullname=${encodeURIComponent(sharedBy)}`;

  return (
    <div>
        <DigitalCard
          title="African Music & Cultural Festival 2025"
      
        subtitle="Celebrating Diversity and Harmony"
        qrValue={qrValue} />
    </div>
  );
}

export default Qr