import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function AnalysisView() {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI SECURITY GUIDE / TVING</span>
        <h2 className="text-2xl font-bold text-slate-900 mt-1">티빙 계정, 지금 보호할 수 있어요</h2>
        <p className="text-sm text-slate-500 mt-1">무엇이 위험한지 이해하고, 가장 효과적인 조치부터 시작하세요.</p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-100 text-red-500 font-bold rounded-xl flex items-center justify-center text-xl">T</div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-lg">티빙 유출 대응</h3>
              <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded">가상 시나리오</span>
              <span className="bg-red-100 text-red-600 font-bold text-xs px-2 py-0.5 rounded">긴급</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">minseo.k***@gmail.com · 탐지 2026.10.06 09:12 · 대응 중</p>
          </div>
        </div>
        <div className="text-right border-l border-slate-100 pl-6">
          <p className="text-xs text-slate-400">계정 위험도</p>
          <p className="text-3xl font-extrabold text-red-500">95 <span className="text-xs text-slate-400 font-normal">/ 100</span></p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-900">지금부터, 이 순서대로 대응하세요</h3>

          <div className="flex gap-4">
            <div className="w-7 h-7 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-xs flex-shrink-0">1</div>
            <div className="flex-1 bg-blue-50/50 border border-blue-100 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-slate-900 text-sm">티빙 비밀번호 변경</h4>
                <span className="text-[10px] bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded">최우선</span>
              </div>
              <p className="text-xs text-slate-500">다른 사이트에서 쓰지 않는 새 비밀번호로 변경하세요. 기존 비밀번호와 비슷한 조합은 피해주세요.</p>
              <div className="flex items-center gap-2 pt-2">
                <button className="bg-blue-600 text-white font-medium text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5">
                  티빙 변경 페이지 <ExternalLink className="w-3 h-3" />
                </button>
                <button className="bg-white border border-slate-200 text-slate-600 font-medium text-xs px-3.5 py-2 rounded-lg">완료로 표시</button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-7 h-7 bg-slate-200 text-slate-600 font-bold rounded-full flex items-center justify-center text-xs flex-shrink-0">2</div>
            <div className="flex-1 border border-slate-100 p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-slate-800 text-sm">같은 비밀번호를 쓰는 네이버 변경</h4>
                <span className="text-[10px] bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded">최우선</span>
              </div>
              <p className="text-xs text-slate-400">티빙과 동일한 비밀번호를 사용하는 네이버부터 변경하세요.</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">내 대응 진행률</h4>
            <p className="text-3xl font-extrabold text-slate-900">0 <span className="text-sm font-normal text-slate-400">/ 5단계 완료</span></p>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-0"></div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">어떤 정보가 위험한가요?</h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <span className="bg-red-50 text-red-600 px-2 py-1 rounded font-medium">이름</span>
              <span className="bg-red-50 text-red-600 px-2 py-1 rounded font-medium">전화번호</span>
              <span className="bg-red-50 text-red-600 px-2 py-1 rounded font-medium">생년월일</span>
              <span className="bg-red-50 text-red-600 px-2 py-1 rounded font-medium">CI</span>
              <span className="bg-red-50 text-red-600 px-2 py-1 rounded font-medium">이메일</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}