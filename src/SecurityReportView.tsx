import React from 'react';
import { FileText, Download, CheckCircle2, AlertCircle } from 'lucide-react';

export const SecurityReportView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Monthly Security Summary</span>
          <h1 className="text-2xl font-bold text-slate-800 mt-1">보안 리포트</h1>
          <p className="text-sm text-slate-500">내 개인정보 종합 보안 점수 및 정기 리포트입니다.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          <Download className="w-4 h-4" /> 리포트 PDF 다운로드
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-slate-400">2026년 10월 종합 보안 점수</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-4xl font-extrabold text-blue-600">82</span>
            <span className="text-slate-400 font-medium">/ 100점</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">지난달 대비 <span className="text-emerald-600 font-semibold">+5점</span> 향상되었습니다.</p>
        </div>
        <div className="w-24 h-24 rounded-full border-8 border-blue-500 border-t-slate-200 flex items-center justify-center font-bold text-blue-600 text-xl">
          양호
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 잘하고 계신 항목
          </h3>
          <ul className="text-xs text-slate-600 space-y-2 pl-6 list-disc">
            <li>주요 계정(네이버, 구글) 2단계 인증 활성화 완료</li>
            <li>패스워드 재사용 비율 감소 (전체 계정 중 15%)</li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500" /> 개선이 필요한 항목
          </h3>
          <ul className="text-xs text-slate-600 space-y-2 pl-6 list-disc">
            <li>티빙 계정 유출 건에 대한 비밀번호 변경 미완료</li>
            <li>3년 이상 미접속 휴면 계정 2개 방치 중</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecurityReportView;