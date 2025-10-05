import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Grid2x2 as Grid, Palette } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [qrName, setQrName] = useState('');
  const [generatedQR, setGeneratedQR] = useState<string | null>(null);
  const [showCustomize, setShowCustomize] = useState(false);

  const [qrSize, setQrSize] = useState(200);
  const [qrColor, setQrColor] = useState('#000000');
  const [qrBgColor, setQrBgColor] = useState('#ffffff');

  const handleGenerate = () => {
    if (url.trim()) {
      setGeneratedQR(url);
    }
  };

  return (
    <main className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ScanMaster</span>
        </h2>
        <p className="text-slate-300 text-lg">
          Create, manage, and track your QR codes with powerful analytics
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
              <Grid className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Generate QR Code</h3>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                URL to encode
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                QR Code Name
              </label>
              <input
                type="text"
                value={qrName}
                onChange={(e) => setQrName(e.target.value)}
                placeholder="My Awesome QR Code"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <button
              onClick={() => setShowCustomize(!showCustomize)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Palette className="w-4 h-4" />
              Customize QR Code
            </button>

            {showCustomize && (
              <div className="space-y-4 p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Size: {qrSize}px
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="400"
                    step="50"
                    value={qrSize}
                    onChange={(e) => setQrSize(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>100px</span>
                    <span>400px</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    QR Code Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={qrColor}
                      onChange={(e) => setQrColor(e.target.value)}
                      className="h-10 w-20 rounded cursor-pointer bg-slate-700 border border-slate-600"
                    />
                    <input
                      type="text"
                      value={qrColor}
                      onChange={(e) => setQrColor(e.target.value)}
                      placeholder="#000000"
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Background Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={qrBgColor}
                      onChange={(e) => setQrBgColor(e.target.value)}
                      className="h-10 w-20 rounded cursor-pointer bg-slate-700 border border-slate-600"
                    />
                    <input
                      type="text"
                      value={qrBgColor}
                      onChange={(e) => setQrBgColor(e.target.value)}
                      placeholder="#ffffff"
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={!url.trim()}
              className="w-full px-4 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white font-semibold hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50"
            >
              Generate QR Code
            </button>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
              <Grid className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Your QR Codes</h3>
          </div>

          {!generatedQR ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="text-6xl mb-4">👋</div>
              <h4 className="text-xl font-semibold text-white mb-2">Welcome!</h4>
              <p className="text-slate-400 text-sm max-w-xs">
                Generate your first QR code using the form to get started!
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: qrBgColor }}>
                <QRCodeCanvas
                  value={generatedQR}
                  size={qrSize}
                  level="H"
                  includeMargin={true}
                  fgColor={qrColor}
                  bgColor={qrBgColor}
                />
              </div>
              {qrName && (
                <p className="text-white font-medium">{qrName}</p>
              )}
              <button
                onClick={() => {
                  const canvas = document.querySelector('canvas');
                  if (canvas) {
                    const url = canvas.toDataURL('image/png');
                    const link = document.createElement('a');
                    link.download = `${qrName || 'qrcode'}.png`;
                    link.href = url;
                    link.click();
                  }
                }}
                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all text-sm font-medium"
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
