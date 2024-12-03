import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import QRDisplay from './QRDisplay';

const QRCodeGenerator = () => {
  const [qrVisible, setQrVisible] = useState(false);
  const url = 'thedataisland.com';

  const handleGenerateQR = () => {
    setQrVisible(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Card>
        <h1 className="text-3xl font-bold text-purple-400 mb-6 text-center">
          QR Code Generator
        </h1>
        
        <div className="space-y-6">
          <div className="text-gray-300 text-center mb-4">
            Click the button below to generate a QR code for thedataisland.com
          </div>

          <Button onClick={handleGenerateQR}>
            Generate QR Code
          </Button>

          {qrVisible && <QRDisplay value={url} />}
        </div>
      </Card>
    </div>
  );
};

export default QRCodeGenerator;