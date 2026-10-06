import React from 'react';
import { Search } from 'lucide-react';

export default function AccountsView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">ACCOUNT INVENTORY</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">흩어진 계정, 한곳에서 관리하세요</h2>
          <p className="text-sm text-slate-500 mt-1">보안 상태를 점검하고, 더 이상 쓰지 않는 계정은 안전하게 정리해요.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-slate-200 text-slate-700 font-medium text-xs px-3.5 py-2 rounded-lg shadow-sm">휴면 계정 정리</button>
          <button className="bg-blue-600 text-white font-medium text-xs px-3.5 py-2 rounded-lg shadow-sm">+ 계정 등록</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-400">등록 계정</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-2">64 <span className="text-xs font-normal text-slate-500">개</span></p>
          <p className="text-[11px] text-slate-400 mt-1">내 디지털 활동을 한곳에</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-400">우선 점검</p>
          <p className="text-2xl font-extrabold text-red-500 mt-2">3 <span className="text-xs font-normal text-slate-500">개</span></p>
          <p className="text-[11px] text-slate-400 mt-1">긴급 1개 · 높은 위험 2개</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-400">비밀번호 재사용</p>
          <p className="text-2xl font-extrabold text-amber-500 mt-2">6 <span className="text-xs font-normal text-slate-500">개</span></p>
          <p className="text-[11px] text-slate-400 mt-1">서로 다른 비밀번호로 변경</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-400">휴면 계정</p>
          <p className="text-2xl font-extrabold text-blue-600 mt-2">18 <span className="text-xs font-normal text-slate-500">개</span></p>
          <p className="text-[11px] text-slate-400 mt-1">탈퇴 방법 안내 가능</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input type="text" placeholder="사이트명 또는 도메인 검색" className="pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-xs w-64 focus:outline-none focus:border-blue-500" />
            </div>
            <select className="border border-slate-200 rounded-lg text-xs px-3 py-1.5 text-slate-600"><option>카테고리 전체</option></select>
            <select className="border border-slate-200 rounded-lg text-xs px-3 py-1.5 text-slate-600"><option>보안 상태 전체</option></select>
          </div>
          <button className="text-xs text-slate-500 border border-slate-200 px-3 py-1.5 rounded-lg">위험 계정 우선</button>
        </div>

        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-400 border-y border-slate-100">
            <tr>
              <th className="p-3">등록 사이트</th>
              <th className="p-3">최근 로그인</th>
              <th className="p-3">보안 상태 / 정리 추천</th>
              <th className="p-3">위험도 ↓</th>
              <th className="p-3 text-right">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-3 flex items-center gap-3">
                <span className="w-7 h-7 bg-red-100 text-red-500 font-bold rounded flex items-center justify-center">T</span>
                <div>
                  <p className="font-bold text-slate-800">티빙 <span className="text-slate-400 font-normal ml-1">콘텐츠</span></p>
                  <p className="text-[11px] text-slate-400">tving.com</p>
                </div>
              </td>
              <td className="p-3 text-slate-500">2026.10.05 <span className="text-[10px] text-slate-400 block">1일 전</span></td>
              <td className="p-3 text-red-500">유출 시나리오 · 비밀번호 재사용</td>
              <td className="p-3 font-bold text-red-500">95 <span className="bg-red-100 text-red-600 text-[10px] px-1 py-0.5 rounded ml-1">긴급</span></td>
              <td className="p-3 text-right"><button className="bg-blue-600 text-white font-medium px-2.5 py-1 rounded">AI 대응 가이드</button></td>
            </tr>
            <tr>
              <td className="p-3 flex items-center gap-3">
                <span className="w-7 h-7 bg-emerald-100 text-emerald-600 font-bold rounded flex items-center justify-center">N</span>
                <div>
                  <p className="font-bold text-slate-800">네이버 <span className="text-slate-400 font-normal ml-1">포털</span></p>
                  <p className="text-[11px] text-slate-400">naver.com</p>
                </div>
              </td>
              <td className="p-3 text-slate-500">2026.10.06 <span className="text-[10px] text-slate-400 block">오늘</span></td>
              <td className="p-3 text-slate-600">비밀번호 재사용 · 2단계 인증 미설정</td>
              <td className="p-3 font-bold text-amber-500">68 <span className="bg-amber-100 text-amber-600 text-[10px] px-1 py-0.5 rounded ml-1">높음</span></td>
              <td className="p-3 text-right"><button className="text-blue-600 hover:underline">상세 보기</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}