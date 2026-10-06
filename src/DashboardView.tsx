import React from 'react';
import { 
  Shield, 
  KeyRound, 
  Trash2, 
  FileText, 
  AlertTriangle, 
  CheckCircle2 
} from 'lucide-react';

interface DashboardViewProps {
  onNavigateToAnalysis: () => void;
}

export default function DashboardView({ onNavigateToAnalysis }: DashboardViewProps) {
  return (
    <div className="space-y-6">
      {/* Title & 리포트 버튼 */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">SECURITY OVERVIEW</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">민서님, 오늘의 보안을 확인하세요</h2>
          <p className="text-sm text-slate-500 mt-1">중요한 위험부터, 한 번에 하나씩. 내 디지털 일상을 안전하게 관리해요.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs px-3.5 py-2 rounded-lg shadow-sm">
          <FileText className="w-4 h-4 text-slate-400" /> 보안 리포트
        </button>
      </div>

      {/* 긴급 알림 배너 */}
      <div className="bg-red-50/70 border border-red-100 rounded-2xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-red-100 p-3 rounded-xl text-red-500">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-red-100 text-red-600 font-bold text-[11px] px-2 py-0.5 rounded">긴급</span>
              <h3 className="font-bold text-slate-900">티빙 계정에 즉시 확인이 필요한 위험이 있어요</h3>
              <span className="text-xs text-red-400">가상 시나리오</span>
            </div>
            <p className="text-xs text-slate-600 mt-1">위험도 95 · 이메일 등 5종의 정보 노출 가능성 · 같은 비밀번호를 쓰는 네이버도 확인하세요.</p>
          </div>
        </div>
        <button onClick={onNavigateToAnalysis} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm transition">
          AI 대응 가이드 보기 &gt;
        </button>
      </div>

      {/* 대시보드 위젯 상단 (보안점수 + 내 보안 관리 현황) */}
      <div className="grid grid-cols-12 gap-6">
        {/* 종합 보안 점수 */}
        <div className="col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-900 text-base">종합 보안 점수</h3>
            <span className="text-xs text-blue-600 cursor-pointer">점수 기준</span>
          </div>
          <div className="flex items-center justify-center py-6 gap-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="54" stroke="#E2E8F0" strokeWidth="12" fill="transparent" />
                <circle cx="64" cy="64" r="54" stroke="#2563EB" strokeWidth="12" strokeDasharray={339} strokeDashoffset={339 - (339 * 83) / 100} strokeLinecap="round" fill="transparent" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-extrabold text-slate-900">83</span>
                <span className="text-[11px] text-slate-400">/ 100점</span>
              </div>
            </div>
            <div>
              <span className="bg-emerald-50 text-emerald-600 font-bold text-xs px-2.5 py-1 rounded-full">양호</span>
              <h4 className="font-bold text-slate-900 text-lg mt-2">잘 관리하고 있어요</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">지난주보다 4점 상승했어요. 긴급 위험을 해결하면 더 안전해져요.</p>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-3 flex justify-between text-xs text-slate-400">
            <span>높을수록 안전한 점수</span>
            <span className="font-medium text-slate-600">지난주 79 → 오늘 83</span>
          </div>
        </div>

        {/* 내 보안 관리 현황 */}
        <div className="col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-base">내 보안 관리 현황</h3>
            <p className="text-xs text-slate-400 mt-0.5">64개 등록 계정 기준 · 2026.10.06 09:40 업데이트</p>
          </div>
          <div className="space-y-4 my-2">
            <div className="flex items-center justify-between p-3 bg-slate-50/70 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Shield className="w-4 h-4" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-800">2단계 인증 <span className="ml-2 text-slate-500 font-normal">48 / 64개</span></p>
                  <p className="text-[11px] text-slate-400">전체 계정의 75%가 보호되고 있어요</p>
                </div>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:underline">미설정 16개 확인</button>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50/70 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg"><KeyRound className="w-4 h-4" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-800">비밀번호 재사용 <span className="ml-2 text-slate-500 font-normal">6개 계정</span></p>
                  <p className="text-[11px] text-slate-400">티빙과 네이버를 우선 확인하세요</p>
                </div>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:underline">재사용 계정 보기</button>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50/70 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Trash2 className="w-4 h-4" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-800">계정 정리 추천 <span className="ml-2 text-slate-500 font-normal">18개 계정</span></p>
                  <p className="text-[11px] text-slate-400">오래 사용하지 않은 계정을 줄여보세요</p>
                </div>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:underline">정리 시작하기</button>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 2단 그리드 */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">먼저 확인할 위험 계정</h3>
              <p className="text-xs text-slate-400 mt-0.5">위험도 순으로 정렬했어요. 높을수록 먼저 조치가 필요해요.</p>
            </div>
            <button className="text-xs font-semibold text-blue-600">전체 계정 보기 →</button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 rounded-xl transition border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-red-100 text-red-500 font-bold rounded-lg flex items-center justify-center text-sm">T</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">티빙 <span className="text-slate-400 font-normal text-xs ml-1">tving.com</span></h4>
                  <p className="text-xs text-slate-400">유출 시나리오 · 비밀번호 재사용</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <span className="text-lg font-bold text-red-500">95</span>
                  <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded ml-1.5 font-bold">긴급</span>
                </div>
                <button onClick={onNavigateToAnalysis} className="text-xs font-semibold text-blue-600 hover:underline">대응 가이드</button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 rounded-xl transition border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-emerald-100 text-emerald-600 font-bold rounded-lg flex items-center justify-center text-sm">N</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">네이버 <span className="text-slate-400 font-normal text-xs ml-1">naver.com</span></h4>
                  <p className="text-xs text-slate-400">티빙과 동일한 비밀번호 사용</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <span className="text-lg font-bold text-amber-500">68</span>
                  <span className="text-[10px] bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded ml-1.5 font-bold">높음</span>
                </div>
                <button className="text-xs font-semibold text-blue-600 hover:underline">비밀번호 점검</button>
              </div>
            </div>
          </div>
        </div>

        {/* 최근 알림 */}
        <div className="col-span-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-900 text-base">최근 알림</h3>
              <button className="text-xs text-slate-400">모두 보기</button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-800">티빙 위험 신호가 감지됐어요</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">가상 유출 시나리오 · 5단계 대응 필요</p>
                  <span className="text-[10px] text-slate-300">오늘 09:12</span>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-800">Google 보안 상태 확인 완료</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">2단계 인증이 안전하게 설정되어 있어요</p>
                  <span className="text-[10px] text-slate-300">어제 18:50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}