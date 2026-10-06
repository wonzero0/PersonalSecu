import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  UserCheck, 
  KeyRound, 
  BrainCircuit, 
  Radio, 
  UserMinus, 
  FileText, 
  Settings, 
  Bell, 
  Shield 
} from 'lucide-react';

import DashboardView from './DashboardView';
import PrivacyView from './PrivacyView'; // <-- 추가
import AccountsView from './AccountsView';
import AnalysisView from './AnalysisView';
import LeakMonitoringView from './LeakMonitoringView';
import AccountCleanupView from './AccountCleanupView';
import SecurityReportView from './SecurityReportView';
import SettingsView from './SettingsView';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('ai-analysis');

  const navItems = [
    { id: 'dashboard', label: '대시보드', icon: LayoutDashboard },
    { id: 'privacy', label: '개인정보 관리', icon: UserCheck },
    { id: 'accounts', label: '가입 계정 관리', icon: KeyRound },
    { id: 'ai-analysis', label: 'AI 보안 분석', icon: BrainCircuit },
    { id: 'leak-monitoring', label: '유출 모니터링', icon: Radio, badge: '1' },
    { id: 'cleanup', label: '계정 정리', icon: UserMinus },
    { id: 'report', label: '보안 리포트', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView onNavigateToAnalysis={() => setActiveTab('ai-analysis')} />;
      case 'privacy':
        return <PrivacyView />; // <-- PrivacyView로 변경
      case 'accounts':
        return <AccountsView />;
      case 'ai-analysis':
        return <AnalysisView />;
      case 'leak-monitoring':
        return <LeakMonitoringView />;
      case 'cleanup':
        return <AccountCleanupView />;
      case 'report':
        return <SecurityReportView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <AnalysisView />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {/* 사이드바 */}
      <aside className="w-64 bg-[#0B132B] text-slate-300 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* 로고 */}
          <div className="flex items-center gap-3 px-2 py-4 mb-6">
            <div className="p-2 bg-blue-600 rounded-xl text-white">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-white tracking-wide text-base">PersonalSecu</h1>
              <p className="text-[10px] text-slate-400">퍼스널시큐 · 개인 보안 OS</p>
            </div>
          </div>

          {/* 메뉴 카테고리 */}
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
            My Security
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition ${
                    isActive 
                      ? 'bg-slate-800/80 text-white font-medium border-l-4 border-blue-500' 
                      : 'hover:bg-slate-800/40 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-rose-500/20 text-rose-400 text-[11px] font-semibold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* 하단 설정 & 저작권 */}
        <div className="pt-4 border-t border-slate-800/60 space-y-3">
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
              activeTab === 'settings' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>설정</span>
          </button>
          <div className="px-3 text-[11px] text-slate-500">
            © 2026 PersonalSecu
          </div>
        </div>
      </aside>

      {/* 메인 영역 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 상단 뷰 헤더 */}
        <header className="h-14 bg-white border-b border-slate-200/80 flex items-center justify-between px-8">
          <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
            <span>내 보안 공간</span>
            <span>&gt;</span>
            <span className="text-slate-700 font-semibold">
              {navItems.find(i => i.id === activeTab)?.label || '설정'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              모니터링 정상
            </span>
            <Bell className="w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                민
              </div>
              <span className="text-xs font-semibold text-slate-700">김민서 님</span>
            </div>
          </div>
        </header>

        {/* 본문 콘텐츠 */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;