export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Invoice Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop chasing invoices.<br />Let the software do it.
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Auto-chase overdue invoices with smart escalation. Tracks payment patterns, flags risky clients, and sends perfectly-timed reminders — so you get paid faster without the awkward follow-ups.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Smart escalation', 'Client risk scores', 'Auto reminders', 'Payment history', 'Email automation'].map(f => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to get paid on time</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited invoices tracked',
              'Automated escalating reminders',
              'Client risk assessment',
              'Payment pattern analytics',
              'Resend-powered email delivery',
              'Priority support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started — $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the smart escalation work?',
              a: 'Invoice Chaser automatically sends a friendly reminder when an invoice is due, then escalates the tone and frequency as the invoice ages — from polite nudge to firm final notice — without you lifting a finger.'
            },
            {
              q: 'What is client risk scoring?',
              a: 'Based on payment history, Invoice Chaser assigns each client a risk score. Late payers get flagged early so you can adjust payment terms or require deposits before starting new work.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel anytime from your billing portal with no questions asked. Your data remains accessible until the end of your billing period.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} Invoice Chaser. All rights reserved.
      </footer>
    </main>
  )
}
