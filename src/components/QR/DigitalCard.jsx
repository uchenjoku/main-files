import { QRCodeSVG } from 'qrcode.react';

export default function DigitalCard({ title, subtitle, qrValue }) {
  return (
    <div className="card-container">
      <div className="card">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <span><QRCodeSVG value={qrValue} size={160} level="H" /></span>
        
        <p className="qr-caption">Scan to RSVP or Learn More</p>
      </div>

      <style>{`
        .card-container {
          display: flex;
          justify-content: center;
          padding: 2rem;
        }

        .card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          text-align: center;
          max-width: 300px;
        }

        h2 {
          margin-bottom: 0.5rem;
          color: #1f2937;
        }

        p {
          margin: 0.25rem 0 1rem;
          color: #4b5563;
        }

        .qr-caption {
          font-size: 0.8rem;
          color: #9ca3af;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
