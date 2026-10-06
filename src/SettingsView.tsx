import React from 'react';
import { Bell, Lock, User, Shield } from 'lucide-react';

export const SettingsView: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">System Preferences</span>
        <h1 className="text-2xl font-bold text-slate-800 mt-1">설정</h1>
        <p className="text-sm text-slate-500">알림 설정 및 보안 정책을 관리합니다.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100">
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-slate-600" />
            <div>
              <p className="text-sm font-semibold text-slate-800">실시간 유출 감지 알림</p>
              <p className="text-xs text-slate-500">새로운 유출 데이터 감지 시 즉시 알림을 받습니다.</p>
            </div>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600 cursor-pointer" />
        </div>

        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-slate-600" />
            <div>
              <p className="text-sm font-semibold text-slate-800">로컬 암호화 데이터 저장</p>
              <p className="text-xs text-slate-500">개인정보 데이터를 브라우저 암호화 저장소에 보관합니다.</p>
            </div>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SettingsView;