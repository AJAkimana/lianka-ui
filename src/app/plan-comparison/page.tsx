import Link from 'next/link';

const PLANS = [
  {
    id: 'daily',
    name: 'Daily',
    roi: '0.20%',
    withdrawal: 'Daily',
    minimum: '$5,000',
    color: '#00C853',
    border: '#00C85340',
    glow: '#00C85325',
  },
  {
    id: 'biweekly',
    name: 'Biweekly',
    roi: '0.50%',
    withdrawal: '14 Days',
    minimum: '$2,000',
    color: '#1565C0',
    border: '#1565C040',
    glow: '#1565C025',
  },
  {
    id: '40-day',
    name: '40-Day',
    roi: '1.00%',
    withdrawal: '40 Days',
    minimum: '$100',
    color: '#F9A825',
    border: '#F9A82540',
    glow: '#F9A82525',
  },
  {
    id: '90-day',
    name: '90-Day',
    roi: '1.20%',
    withdrawal: '90 Days',
    minimum: '$100',
    color: '#7B1FA2',
    border: '#7B1FA240',
    glow: '#7B1FA225',
  },
  {
    id: '180-day',
    name: '180-Day',
    roi: '1.50%',
    withdrawal: '180 Days',
    minimum: '$100',
    color: '#C1121F',
    border: '#C1121F40',
    glow: '#C1121F25',
  },
];

function PlanIcon({ color }: { color: string }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2.5L20.5 9L12 21.5L3.5 9L12 2.5Z"
        stroke={color}
        strokeWidth="1.6"
        fill="none"
      />
      <path d="M12 2.5L12 21.5" stroke={color} strokeWidth="1" opacity="0.6" />
      <path d="M3.5 9H20.5" stroke={color} strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export default function PlanComparisonPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#111] border-b border-[#222] px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg bg-[#00C853] text-black font-black text-base flex items-center justify-center">
            L
          </div>
          <span className="text-sm font-extrabold tracking-wider">LIANKA</span>
        </Link>
        <span className="text-[11px] text-[#555]">Plan Comparison</span>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1a0a] to-[#0a0a0a] border-b border-[#222] px-4 py-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00C85330] bg-[#00C85310] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#00C853]">
          Plans
        </div>
        <h1 className="mt-3 text-2xl font-black">Plan Comparison</h1>
        <p className="mt-2 text-[12px] text-[#555]">
          Compare ROI, withdrawal timing, and minimums at a glance.
        </p>
      </section>

      {/* Table */}
      <section className="mx-auto max-w-[960px] px-4 py-8">
        <div className="rounded-xl border border-[#222] bg-[#111] p-3">
          <div className="overflow-x-auto">
            <table className="min-w-[680px] w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-[11px] uppercase tracking-widest text-[#888]">
                  <th className="text-left px-4 py-3">Plan</th>
                  <th className="text-left px-4 py-3">ROI</th>
                  <th className="text-left px-4 py-3">Withdrawal</th>
                  <th className="text-left px-4 py-3">Minimum</th>
                </tr>
              </thead>
              <tbody>
                {PLANS.map((plan) => (
                  <tr
                    key={plan.id}
                    className="border-t border-[#222]"
                    style={{
                      background: `linear-gradient(90deg, ${plan.glow}, transparent)`,
                    }}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-lg"
                          style={{
                            border: `1px solid ${plan.border}`,
                            background: '#0a0a0a',
                          }}
                        >
                          <PlanIcon color={plan.color} />
                        </div>
                        <span className="text-sm font-bold text-white">
                          {plan.name}
                        </span>
                      </div>
                    </td>
                    <td
                      className="px-4 py-4 text-sm font-bold"
                      style={{ color: plan.color }}
                    >
                      {plan.roi}
                    </td>
                    <td className="px-4 py-4 text-sm text-white">
                      {plan.withdrawal}
                    </td>
                    <td
                      className="px-4 py-4 text-sm font-bold"
                      style={{ color: plan.color }}
                    >
                      {plan.minimum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
