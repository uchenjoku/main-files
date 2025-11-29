import React from 'react';
import DigitalCard from '../../components/QR/DigitalCard';
import { Helmet, HelmetProvider } from "react-helmet-async";

 function Qr() {

    // Function to get query param
    function getQueryParam(name) {
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.get(name);
    }

const sharedBy = getQueryParam('fullname') || 'Guest';
const qrValue = `https://rsvp.amcf.au/?fullname=${encodeURIComponent(sharedBy)}`;

  return (  
     <HelmetProvider>
          <Helmet>
              <title>Generate QR Code | African Music and Cultural Festival</title>
          </Helmet>
          <div>
            <DigitalCard
              title="African Music & Cultural Festival 2026"
          
            subtitle="Celebrating Diversity and Harmony"
            qrValue={qrValue} />
        </div>
        </HelmetProvider>  
        
  );
}

export default Qr