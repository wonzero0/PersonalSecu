import React from 'react';
import { Trash2, ShieldAlert, CheckCircle, ExternalLink } from 'lucide-react';

export const AccountCleanupView: React.FC = () => {
  const unusedAccounts = [
    { id: 1, site: '지그재그', lastLogin: '2023.02.11 (3년 이상 미접속)', risk: '높음', status: '휴면 계정' },
    { id: 2, site: '알라딘', lastLogin: '2023.09.04 (3년 이상 미접속)', risk: '보통', status: '휴면 계정' },
    { id: 3, site: '클래스101', lastLogin: '2024.01.15 (2년 이상 미접속)', risk: '낮음', status: '장기 미사용' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Account Eraser</span>
        <h1 className="text-2xl font-bold text-slate-800 mt-1">계정 정리 (탈퇴/휴면)</h1>
        <p className="text-sm text-slate-500">방치된 불필요한 계정을 정리하여 개인정보 노출 위험을 줄이세요.</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
        <div className="text-sm text-amber-800">
          <p className="font-semibold">장기 미사용 계정 위험성</p>
          <p className="text-xs text-amber-700 mt-1">사용하지 않는 사이트에 남아있는 내 개인정보는 비밀번호 변경 및 모니터링 관리가 되지 않아 유출 타겟이 되기 쉽습니다.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 font-semibold text-slate-800">정리 추천 계정 목록</div>
        <div className="divide-y divide-slate-100">
          {unusedAccounts.map((account) => (
            <div key={account.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
              <div>
                <span className="font-semibold text-slate-800">{account.site}</span>
                <p className="text-xs text-slate-500 mt-1">마지막 접속: {account.lastLogin}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition">
                  <Trash2 className="w-3.5 h-3.5" /> 회원탈퇴 안내
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountCleanupView;