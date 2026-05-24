"use client"

import { useState, useEffect, useRef } from "react"

type Line = { x1: number; y1: number; x2: number; y2: number }

const items = [
  { problem: "Missed calls",    solution: "Calls handled",     grad: ["#7F77DD", "#D4537E"] },
  { problem: "No follow-ups",   solution: "Auto follow-ups",   grad: ["#5DCAA5", "#378ADD"] },
  { problem: "No-shows",        solution: "Fewer no-shows",    grad: ["#EF9F27", "#D85A30"] },
  { problem: "Slow replies",    solution: "Instant replies",   grad: ["#D85A30", "#E24B4A"] },
  { problem: "Manual work",     solution: "Automation",        grad: ["#378ADD", "#7F77DD"] },
  { problem: "Lost revenue",    solution: "Revenue recovered", grad: ["#D4537E", "#EF9F27"] },
]

const pillPositions = [
  "top-10 left-1/2 -translate-x-1/2",
  "top-[96px] right-4",
  "bottom-[96px] right-4",
  "bottom-10 left-1/2 -translate-x-1/2",
  "bottom-[96px] left-4",
  "top-[96px] left-4",
]

export default function ProblemSolution() {
  const [isOn, setIsOn]   = useState(false)
  const stageRef          = useRef<HTMLDivElement>(null)
  const pillRefs          = useRef<(HTMLDivElement | null)[]>([])
  const [lines, setLines] = useState<(Line | null)[]>([])

  const recalcLines = () => {
    const stage = stageRef.current
    if (!stage) return
    const sr = stage.getBoundingClientRect()
    const cx = stage.offsetWidth / 2
    const cy = stage.offsetHeight / 2
    setLines(
      pillRefs.current.map((el) => {
        if (!el) return null
        const pr = el.getBoundingClientRect()
        return {
          x1: pr.left - sr.left + pr.width / 2,
          y1: pr.top - sr.top + pr.height / 2,
          x2: cx,
          y2: cy,
        }
      })
    )
  }

  useEffect(() => {
    recalcLines()
    window.addEventListener("resize", recalcLines)
    return () => window.removeEventListener("resize", recalcLines)
  }, [isOn])

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#141414] to-[#0D2152]"
      aria-label="FREMN AI overview"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        />

      {/* Ambient glow behind orbit */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: isOn
            ? "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "62%",
          transform: "translate(-50%,-50%)",
          transition: "background 0.8s",
        }}
      />

      {/* ── Left text panel ── */}
      <div className="relative z-10 flex flex-col justify-center pr-10 pl-8" style={{ width: 290 }}>

        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 self-start"
          style={{
            background: "rgba(99,179,237,0.07)",
            border: "1px solid rgba(99,179,237,0.16)",
            borderRadius: 999,
            padding: "5px 14px",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: isOn ? "#34d399" : "rgb(224, 115, 115)",
              display: "inline-block",
              boxShadow: isOn ? "0 0 6px #34d399" : "0 0 6px #rgb(214, 30, 30)",
              transition: "all 0.4s",
            }}
          />
          <span style={{ fontSize: 11, color: "#7aabcf", letterSpacing: "0.09em", fontWeight: 500 }}>
            AI RECEPTIONIST
          </span>
        </div>

       <h2 style={{
  fontFamily: "var(--font-serif)",
  fontSize: 44,
  fontWeight: 400,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  color: "#ffffff",
  marginBottom: 14,
}}>
  Zero missed<br />
  <em style={{
    fontStyle: "italic",
    color: "#4D9FFF",
  }}>appointments.</em>
</h2>
        <p style={{
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 2,
  color: "rgba(255,255,255,0.45)",
}}>
  {[
    "Zero missed calls",
    "Zero forgotten follow-ups",
    "Zero no-shows",
    "Zero lost patients",
    "Zero missed revenue",
  ].map((item) => (
    <span key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: "#4D9FFF",
        flexShrink: 0,
        display: "inline-block",
      }} />
      {item}
    </span>
  ))}
</p>
      </div>

      {/* Vertical divider */}
      <div
        style={{
          width: 1,
          alignSelf: "stretch",
          background: "linear-gradient(to bottom, transparent, rgba(99,179,237,0.12), transparent)",
          margin: "0 4px",
          flexShrink: 0,
        }}
      />

      {/* ── Orbit diagram ── */}
      <div ref={stageRef} className="relative shrink-0" style={{ width: 480, height: 480 }}>

        {/* Dashed orbit ring */}
        <div
          className="absolute"
          style={{
            inset: 52,
            borderRadius: "50%",
            border: "1px dashed #60a5fa",
          }}
        />

        {/* SVG lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <marker id="arrowdot" markerWidth="4" markerHeight="4" refX="2" refY="2">
              <circle
                cx="2" cy="2" r="1.5"
                fill={isOn ? "rgba(52,211,153,0.55)" : "rgba(96, 165, 250, 0.45)"}
              />
            </marker>
          </defs>
          {lines.map((l, i) =>
            l ? (
              <line
                key={i}
                x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                strokeWidth={1}
                strokeDasharray="5 5"
                stroke={isOn ? "rgba(52,211,153,0.6)" : "rgb(96, 165, 250)"}
                markerEnd="url(#arrowdot)"
                style={{ transition: "stroke 0.5s" }}
              />
            ) : null
          )}
        </svg>

        {/* Pills */}
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => { pillRefs.current[i] = el }}
            className={`absolute z-10 flex items-center gap-2.5 whitespace-nowrap transition-all duration-500 ${pillPositions[i]}`}
            style={{
              padding: "8px 16px 8px 9px",
              borderRadius: 999,
              fontSize: 12.5,
              fontWeight: 500,
              letterSpacing: "0.01em",
              background: isOn ? "rgba(4,18,12,0.82)" : "rgba(6,16,36,0.82)",
              border: isOn
                ? "1px solid rgba(52,211,153,0.22)"
                : "1px solid rgba(96,165,250,0.18)",
              color: isOn ? "#6ee7b7" : "#93c5fd",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: isOn
                ? "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(52,211,153,0.06)"
                : "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(99,179,237,0.05)",
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${item.grad[0]}, ${item.grad[1]})`,
                flexShrink: 0,
                opacity: 0.88,
              }}
            />
            {isOn ? item.solution : item.problem}
          </div>
        ))}

        {/* Center card */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3 text-center"
          style={{
            width: 156,
            padding: "20px 16px",
            borderRadius: 20,
            background: "rgba(8,18,40,0.9)",
            border: "1px solid rgba(99,179,237,0.15)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(99,179,237,0.07)",
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 11,
              background: "linear-gradient(135deg, #1a3560, #243f7a)",
              border: "1px solid rgba(99,179,237,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: isOn
                  ? "radial-gradient(circle, #34d399, #059669)"
                  : "radial-gradient(circle, #60a5fa, #2563eb)",
                transition: "background 0.5s",
                boxShadow: isOn
                  ? "0 0 10px rgba(52,211,153,0.65)"
                  : "0 0 10px rgba(96,165,250,0.65)",
              }}
            />
          </div>

          <div
            style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: "whitesmoke" }}
          >
            FREMN AI
          </div>

          <p style={{ fontSize: 10.5, lineHeight: 1.65, color: "lightslategray", margin: 0 }}>
            {isOn ? "All systems active." : "All systems offline."}
          </p>

          <button
            onClick={() => setIsOn(!isOn)}
            style={{
              position: "relative",
              width: 44,
              height: 24,
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              background: isOn
                ? "linear-gradient(90deg, #059669, #34d399)"
                : "rgba(20,38,65,0.95)",
              boxShadow: isOn
                ? "0 0 14px rgba(52,211,153,0.45)"
                : "inset 0 2px 6px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,179,237,0.1)",
              transition: "all 0.35s",
              outline: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 3,
                left: isOn ? 22 : 3,
                width: 18,
                height: 18,
                background: "white",
                borderRadius: "50%",
                transition: "left 0.3s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.35)",
              }}
            />
          </button>

          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: isOn ? "#34d399" : "#304a62",
              transition: "color 0.35s",
            }}
          >
            {isOn ? "ACTIVE" : "OFFLINE"}
          </div>
        </div>
      </div>
    </section>
  )
}