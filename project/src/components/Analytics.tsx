import { useState } from 'react';
import { BarChart3, Clock, Globe, FileText, Link2, Globe as Globe2 } from 'lucide-react';

type TabType = 'overview' | 'time' | 'devices' | 'performance' | 'integrations' | 'report';

export default function Analytics() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: BarChart3 },
    { id: 'time' as TabType, label: 'Time Analysis', icon: Clock },
    { id: 'devices' as TabType, label: 'Devices & Locations', icon: Globe },
    { id: 'performance' as TabType, label: 'QR Performance', icon: FileText },
    { id: 'integrations' as TabType, label: 'Integrations', icon: Link2 },
    { id: 'report' as TabType, label: 'Site Report', icon: Globe2 },
  ];

  return (
    <main className="container mx-auto px-6 py-16">
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">
          Analytics Dashboard
        </h2>
        <p className="text-slate-300 text-lg">
          Track and analyze your QR code performance
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-4"></div>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
        <div className="flex gap-1 p-2 bg-slate-900/50 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">📊</div>
                    <div className="text-slate-500 text-sm font-medium">Total</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">0</div>
                  <div className="text-slate-400 text-sm">Total Scans</div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">🎯</div>
                    <div className="text-slate-500 text-sm font-medium">Active</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">0</div>
                  <div className="text-slate-400 text-sm">Active QR Codes</div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🏆</div>
                    <div className="text-lg font-semibold text-white">Top 3 QR Codes</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center py-8">
                      <p className="text-slate-500 text-sm">No QR codes scanned yet</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl">📱</div>
                    <div className="text-lg font-semibold text-white">Top Devices</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <div className="text-5xl mb-3">🔍</div>
                        <p className="text-slate-500 text-sm">No device data available</p>
                        <p className="text-slate-600 text-xs mt-1">Start scanning QR codes to see device statistics</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl">⚡</div>
                    <div className="text-lg font-semibold text-white">Recent Activity</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <div className="text-5xl mb-3">📭</div>
                        <p className="text-slate-500 text-sm">No recent activity</p>
                        <p className="text-slate-600 text-xs mt-1">Scan activity will appear here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'time' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Time Analysis</h3>
              <p className="text-slate-400">
                Analyze scan patterns over time to understand when your QR codes are most active.
              </p>
            </div>
          )}

          {activeTab === 'devices' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Devices & Locations</h3>
              <p className="text-slate-400">
                See which devices and locations are scanning your QR codes.
              </p>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">QR Performance</h3>
              <p className="text-slate-400">
                Compare performance metrics across all your QR codes.
              </p>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Integrations</h3>
              <p className="text-slate-400">
                Connect your QR codes with third-party services and tools.
              </p>
            </div>
          )}

          {activeTab === 'report' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Site Report</h3>
              <p className="text-slate-400">
                Generate comprehensive reports for your QR code campaigns.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
