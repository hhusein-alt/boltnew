import { useState } from 'react';
import { Grid2x2 as Grid } from 'lucide-react';
import Home from './components/Home';
import Analytics from './components/Analytics';

type ViewType = 'home' | 'analytics';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="flex items-center justify-between px-8 py-5 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
            <Grid className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-white">ScanMaster</h1>
        </button>
        <button
          onClick={() => setCurrentView('analytics')}
          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white text-sm font-medium hover:from-pink-600 hover:to-purple-600 transition-all"
        >
          Analytics Dashboard
        </button>
      </header>

      {currentView === 'home' ? <Home /> : <Analytics />}
    </div>
  );
}

export default App;