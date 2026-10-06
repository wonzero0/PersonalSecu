import React from 'react';
import { AlertTriangle, ShieldCheck, ExternalLink, RefreshCw, Eye } from 'lucide-react';

export const LeakMonitoringView: React.FC = () => {
  const leaks = [
    { id: 1, site: '티빙 (TVING)', date: '2026.10.06', status: '대응 필요', severity: '긴급', info: '이름, 전화번호, CI, 이메일' },
    { id: 2, site: '쿠팡 (Coupang)', date: '2026.08.14', status: '조치 완료', severity: '주의', info: '배송지 주소, 전화번호' },
    { id: 3, site: '네이버 (Naver)', date: '2026.05.20', status: '조치 완료', severity: '보통', info: '로그인 IP 기록' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Breach Radar</span>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">유출 모니터링</h1>
          <p className="text-sm text-slate-500">다크웹 및 외부 유출 데이터베이스 실시간 감지 현황입니다.</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition">
          <RefreshCw className="w-4 h-4" /> 실시간 스캔
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">감지된 유출 건수</p>
          <p className="text-2xl font-bold text-rose-600 mt-2">1건</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">조치 완료 건수</p>
          <p className="text-2xl font-bold text-emerald-600 mt-2">2건</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">최근 스캔 시각</p>
          <p className="text-2xl font-bold text-slate-700 mt-2">방금 전</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 font-semibold text-slate-800">유출 이력 및 대응 상태</div>
        <div className="divide-y divide-slate-100">
          {leaks.map((item) => (
            <div key={item.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${item.severity === '긴급' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-600'}`}>
                  {item.severity === '긴급' ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800">{item.site}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${item.severity === '긴급' ? 'bg-rose-100 text-rose-700 font-medium' : 'bg-slate-200 text-slate-700'}`}>
                      {item.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">유출 항목: {item.info}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-400">{item.date}</span>
                <span className={`text-xs px-3 py-1 rounded-md font-medium ${item.status === '대응 필요' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeakMonitoringView;