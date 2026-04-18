import { Link } from "react-router-dom";

const css = `
  @keyframes glitch1 {
    0%,100% { transform:translate(0);    clip-path:polygon(0 0,100% 0,100% 33%,0 33%); }
    20%      { transform:translate(-6px, 3px); }
    40%      { transform:translate( 6px,-3px); clip-path:polygon(0 30%,100% 30%,100% 66%,0 66%); }
    60%      { transform:translate(-3px, 6px); clip-path:polygon(0 60%,100% 60%,100% 92%,0 92%); }
    80%      { transform:translate( 3px,-6px); }
  }
  @keyframes glitch2 {
    0%,100% { transform:translate(0);    clip-path:polygon(0 55%,100% 55%,100% 100%,0 100%); }
    20%      { transform:translate( 6px,-3px); }
    40%      { transform:translate(-6px, 3px); clip-path:polygon(0 0,100% 0,100% 40%,0 40%); }
    60%      { transform:translate( 3px, 6px); clip-path:polygon(0 40%,100% 40%,100% 76%,0 76%); }
    80%      { transform:translate(-3px,-6px); }
  }
  @keyframes flicker {
    0%,89%,100% { opacity:1; }
    90% { opacity:.7; }
    92% { opacity:1; }
    95% { opacity:.4; }
    97% { opacity:1; }
  }
  @keyframes scrollLeft {
    from { transform:translateX(0); }
    to   { transform:translateX(-50%); }
  }
  @keyframes blink {
    0%,100% { opacity:1; }
    50%     { opacity:0; }
  }
  .glitch-wrap { position:relative; animation:flicker 5s infinite; }
  .glitch-wrap::before,
  .glitch-wrap::after {
    content:attr(data-text);
    position:absolute; inset:0;
    color:black; pointer-events:none;
  }
  .glitch-wrap::before { animation:glitch1 2.4s infinite; }
  .glitch-wrap::after  { animation:glitch2 2.4s infinite 0.12s; }
  .ticker-track { animation:scrollLeft 16s linear infinite; white-space:nowrap; display:inline-flex; }
  .ticker-track-rev { animation:scrollLeft 16s linear infinite reverse; white-space:nowrap; display:inline-flex; }
  .blink { animation:blink 1s step-end infinite; }
`;

const TICK =
  "⚠ ERROR 404 ⚠ PAGE NOT FOUND ⚠ ACCESS DENIED ⚠ ROUTE UNDEFINED ⚠ SYSTEM FAILURE ⚠ FATAL ERROR ⚠ NULL POINTER ⚠ SEGFAULT ⚠ ";

const TODAY = new Date().toISOString().slice(0, 10);

export default function NotFoundPage() {
  return (
    <>
      <style>{css}</style>

      <div
        className="w-full flex-1 flex flex-col bg-white overflow-hidden relative"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,transparent,transparent 38px,rgba(0,0,0,0.035) 38px,rgba(0,0,0,0.035) 39px)",
        }}
      >
        {/* ── TOP TICKER ── */}
        <div className="w-full bg-black text-white py-3 overflow-hidden border-b-4 border-black shrink-0">
          <div className="ticker-track">
            {[TICK, TICK, TICK, TICK].map((t, i) => (
              <span key={`ticker-top-${i}`} className="text-xs font-black uppercase tracking-widest pr-6">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">

          {/* glitch 404 */}
          <div className="select-none mb-4 leading-none">
            <span
              className="glitch-wrap text-[clamp(7rem,26vw,20rem)] font-black leading-none text-black"
              data-text="404"
            >
              404
            </span>
          </div>

          {/* status badge */}
          <div className="flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black mb-8">
            <span className="text-xs font-black uppercase tracking-widest">HTTP</span>
            <span className="text-xs font-black opacity-40">│</span>
            <span className="text-xs font-black uppercase tracking-widest opacity-80">
              0x194&nbsp;NOT_FOUND
            </span>
            <span className="blink font-black text-white">█</span>
          </div>

          {/* brutalist grid card */}
          <div className="w-full max-w-3xl border-4 border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] mb-10">
            {/* header bar */}
            <div className="bg-black px-6 py-4 flex items-center justify-between">
              <span className="text-white text-xs font-black uppercase tracking-widest">
                CODELENS — KERNEL PANIC
              </span>
              <span className="text-white text-xs font-black opacity-60">
                ✕ ✕ ✕
              </span>
            </div>

            {/* two-column body */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-b-4 sm:border-b-0 sm:border-r-4 border-black p-6">
                <p className="text-xs font-black uppercase tracking-widest text-black mb-3">
                  ◆ DIAGNOSIS
                </p>
                <p className="text-sm font-bold text-black leading-relaxed">
                  The route you requested does not exist in this system. No
                  handler was registered for this path.
                </p>
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-widest text-black mb-3">
                  ◆ SUGGESTED ACTION
                </p>
                <p className="text-sm font-bold text-black leading-relaxed">
                  Verify the URL for typos, or return to the home page to
                  continue exploring CodeLens.
                </p>
              </div>
            </div>

            {/* footer bar */}
            <div className="border-t-4 border-black px-6 py-3 flex items-center gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-black opacity-50">
                ERR_CODE 404
              </span>
              <span className="text-xs font-black opacity-20">│</span>
              <span className="text-xs font-black uppercase tracking-widest text-black opacity-50">
                TIMESTAMP {TODAY}
              </span>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/"
            className="inline-block py-5 px-14 bg-black text-white text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-colors shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]"
          >
            ← RETURN HOME
          </Link>
        </div>

        {/* ── BOTTOM TICKER ── */}
        <div className="w-full bg-white text-black py-3 overflow-hidden border-t-4 border-black shrink-0">
          <div className="ticker-track-rev">
            {[TICK, TICK, TICK, TICK].map((t, i) => (
              <span key={`ticker-bottom-${i}`} className="text-xs font-black uppercase tracking-widest pr-6">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
