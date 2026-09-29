import React, { useEffect, useState } from 'react';
import { fetchHealthStatus } from '../services/api';
import { ConnectionState } from '../types';
import { CheckCircle2, XCircle, Loader2, Sparkles, RefreshCw } from 'lucide-react';

export const Home: React.FC = () => {
  const [status, setStatus] = useState<ConnectionState>('Checking');
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkBackendHealth = async () => {
    setStatus('Checking');
    try {
      const data = await fetchHealthStatus();
      if (data && data.status === 'ok') {
        setStatus('Connected');
      } else {
        setStatus('Disconnected');
      }
    } catch {
      setStatus('Disconnected');
    } finally {
      setLastChecked(new Date());
    }
  };

  useEffect(() => {
    checkBackendHealth();
    const interval = setInterval(checkBackendHealth, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-cream flex flex-col justify-between selection:bg-gold selection:text-charcoal">
      <header className="border-b border-cream-dark/60 bg-cream/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center text-gold font-serif font-bold text-xl shadow-sm">
              🌾
            </span>
            <span className="font-serif text-2xl font-bold tracking-tight text-charcoal">
              Black Rice
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all border ${
                status === 'Connected'
                  ? 'bg-forest/10 text-forest border-forest/30'
                  : status === 'Disconnected'
                  ? 'bg-red-50 text-red-700 border-red-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
            >
              {status === 'Connected' && <CheckCircle2 className="w-4 h-4 text-forest" />}
              {status === 'Disconnected' && <XCircle className="w-4 h-4 text-red-600" />}
              {status === 'Checking' && <Loader2 className="w-4 h-4 animate-spin text-amber-600" />}
              <span>Backend Status: {status}</span>
            </div>

            <button
              onClick={checkBackendHealth}
              title="Refresh connection status"
              className="p-1.5 rounded-full text-charcoal/60 hover:text-charcoal hover:bg-cream-dark/40 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${status === 'Checking' ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal text-cream text-xs font-medium tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Organic Heritage Harvest</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-charcoal tracking-tight leading-none">
              Black Rice
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl text-gold font-medium">
              Premium Black Rice
            </p>
            <p className="text-sm sm:text-base text-charcoal/70 tracking-widest uppercase font-semibold">
              Coming Soon
            </p>
          </div>

          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-xl mx-auto font-light">
            We are preparing the finest naturally sourced Chak-hao organic black rice — rich in anthocyanins, antioxidants, and heritage nutrition. Direct from farm to table.
          </p>

          <div className="inline-block p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cream-dark/80 shadow-sm max-w-md w-full">
            <div className="text-xs uppercase tracking-wider text-charcoal/50 font-semibold mb-2">
              System Health & Readiness
            </div>
            <div className="flex items-center justify-center space-x-2.5 text-base font-semibold">
              <span className="text-charcoal">Backend Status:</span>
              <span
                className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                  status === 'Connected'
                    ? 'bg-forest/15 text-forest'
                    : status === 'Disconnected'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {status === 'Connected' && <span className="w-2 h-2 rounded-full bg-forest animate-pulse mr-1"></span>}
                {status === 'Disconnected' && <span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span>}
                {status}
              </span>
            </div>
            {lastChecked && (
              <p className="text-[11px] text-charcoal/40 mt-2">
                Last checked: {lastChecked.toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-cream-dark/60 py-6 text-center text-xs text-charcoal/60">
        <p>© {new Date().getFullYear()} Black Rice Store. All rights reserved.</p>
      </footer>
    </div>
  );
};
