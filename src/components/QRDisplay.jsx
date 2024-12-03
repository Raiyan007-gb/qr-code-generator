import React from 'react';
import QRCode from 'qrcode.react';

const QRDisplay = ({ value }) => {
  return (
    <div className="mt-6 flex justify-center">
      <div className="bg-white p-4 rounded-lg">
        <QRCode
          value={value}
          size={200}
          level="H"
          includeMargin={true}
        />
      </div>
    </div>
  );
};

export default QRDisplay;