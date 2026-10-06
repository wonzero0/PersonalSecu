import React from 'react';
import { ShieldAlert, Lock, Key, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';

export const PrivacyView: React.FC = () => {
  const privacyDataList = [
    { id: 1, type: '주민등록번호 / CI', level: '고유식별정보', status: '안전 보관', count: '3개 사이트 보유', desc: '본인인증을 진행한 주요 서비스에 암호화 보관 중입니다.' },
    { id: 2, type: '휴대폰 번호', level: '개인식별정보', status: '주의 필요', count: '48개 사이트 보유', desc: '일부 미사용 사이트에서 마케팅 수신 동의가 설정되어 있습니다.' },
    { id: 3, type: '결제 수단 (카드/계좌)', level: '금융정보', status: '안전 보관', count: '5개 사이트 등록', desc: '간편결제 등록 서비스 내에서 보안 토큰으로 관리됩니다.' },
    { id: 4, type: '자택 / 배송지 주소', level: '위치/주소정보', status: '정리 추천', count: '12개 사이트 보유', desc: '오래된 쇼핑몰에 과거 주소가 남아있어 삭제가 필요합니다.' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Privacy Vault</span>
        <h1 className="text-2xl font-bold text-slate-800 mt-1">개인정보 관리</h1>
        <p className="text-sm text-slate-500">내 주요 개인정보(PII)의 보유 현황과 민감도별 관리 상태를 점검합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">고유식별정보</p>
          <p className="text-2xl font-bold text-slate-800 mt-2">3건</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">금융/결제 정보</p>
          <p className="text-2xl font-bold text-slate-800 mt-2">5건</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">점검 필요 항목</p>
          <p className="text-2xl font-bold text-amber-600 mt-2">2건</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">개인정보 암호화율</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">100%</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 font-semibold text-slate-800">개인정보 유형별 노출/보유 현황</div>
        <div className="divide-y divide-slate-100">
          {privacyDataList.map((item) => (
            <div key={item.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-800">{item.type}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-500 font-medium">{item.count}</span>
                <span className={`text-xs px-3 py-1 rounded-md font-medium ${
                  item.status === '안전 보관' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}>
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

export default PrivacyView;