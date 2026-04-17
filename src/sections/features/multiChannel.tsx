"use client";
import { useState } from "react";

const channels = [
  {
    id: "voice",
    label: "Voice",
    tagline: "Picks up every call",
    description: "FREMN answers incoming calls with natural-sounding speech, handles booking end-to-end, and never puts a patient on hold.",
    color: "#1E6BFF",
    points: ["Answers in under 2 rings", "Natural Hindi & English support", "Transfers complex cases to staff"],
    mockup: (
      <div style={{
        background: "rgba(10,10,10,0.9)",
        borderRadius: 24,
        padding: 24,
        border: "1px solid rgba(255,255,255,0.06)",
        width: "100%",
        maxWidth: 320,
        margin: "0 auto",
      }}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24}}>
          <div style={{fontSize:12,color:"#6B7A99"}}>Incoming Call</div>
          <div style={{fontSize:11,color:"#4ade80",display:"flex",alignItems:"center",gap:5}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:"#4ade80"}}/>
            Connected
          </div>
        </div>
        <div style={{textAlign:"center",marginBottom:24}}>
          <div style={{width:64,height:64,borderRadius:"50%",background:"linear-gradient(135deg,#1E6BFF,#5BC0EB)",margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 28px rgba(30,107,255,0.4)"}}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z" stroke="white" strokeWidth="1.6"/><path d="M7 12a7 7 0 0 0 14 0" stroke="white" strokeWidth="1.6" strokeLinecap="round"/><path d="M14 19v3" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </div>
          <div style={{fontFamily:"Syne,sans-serif",fontSize:15,fontWeight:700,color:"#F0F4FF"}}>FREMN AI</div>
          <div style={{fontSize:12,color:"#6B7A99",marginTop:4}}>City Dental Clinic</div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:3,marginBottom:20,height:36}}>
          {[4,8,14,20,28,20,14,8,4,8,16,24,16,8,4,10,18,10,6].map((h,i) => (
            <div key={i} style={{width:3,height:h,borderRadius:2,background:`rgba(30,107,255,${0.3+i%3*0.2})`,flexShrink:0}}/>
          ))}
        </div>
        <div style={{background:"rgba(30,107,255,0.08)",border:"1px solid rgba(30,107,255,0.15)",borderRadius:10,padding:"10px 14px",fontSize:13,color:"rgba(240,244,255,0.75)",lineHeight:1.5,fontStyle:"italic"}}>
          &quot;I can book you with Dr. Sharma tomorrow at 10:30 AM. Shall I confirm?&quot;
        </div>
      </div>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    tagline: "Replies in seconds",
    description: "Full appointment booking, reschedule and FAQ support — right inside WhatsApp where your patients already spend their time.",
    color: "#25D366",
    points: ["No app download needed", "Rich media support", "Confirmation + reminders sent automatically"],
    mockup: (
      <div style={{
        background: "#111B21",
        borderRadius: 24,
        overflow: "hidden",
        width: "100%",
        maxWidth: 320,
        margin: "0 auto",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{background:"#1F2C34",padding:"14px 16px",display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#25D366,#128C7E)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="2.5" fill="white"/><path d="M3 15c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div style={{fontSize:14,fontWeight:600,color:"#E9EDEF"}}>FREMN AI · City Dental</div>
            <div style={{fontSize:11,color:"#8696A0"}}>Online</div>
          </div>
        </div>
        <div style={{padding:16,display:"flex",flexDirection:"column",gap:8,minHeight:220,background:"rgba(11,20,26,0.9)"}}>
          {[
            {from:"patient",text:"Hi, need to book a cleaning appointment"},
            {from:"ai",text:"Hello! 😊 We have slots tomorrow — 11 AM or 3 PM. Which works for you?"},
            {from:"patient",text:"11 AM please"},
            {from:"ai",text:"✅ Confirmed! Appointment with Dr. Rao tomorrow at 11:00 AM. We'll remind you an hour before."},
          ].map((msg,i)=>(
            <div key={i} style={{maxWidth:"78%",alignSelf:msg.from==="ai"?"flex-start":"flex-end"}}>
              <div style={{
                padding:"8px 12px",
                borderRadius:msg.from==="ai"?"4px 12px 12px 12px":"12px 4px 12px 12px",
                background:msg.from==="ai"?"#1F2C34":"#005C4B",
                fontSize:13,
                color:"#E9EDEF",
                lineHeight:1.5,
              }}>
                {msg.text}
              </div>
              <div style={{fontSize:10,color:"#8696A0",marginTop:2,textAlign:msg.from==="ai"?"left":"right"}}>
                {msg.from==="ai"?"FREMN AI":"You"} · now
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "web",
    label: "Web Widget",
    tagline: "Converts visitors to patients",
    description: "A floating chat widget embedded on your clinic website — quietly converting every curious visitor into a confirmed appointment.",
    color: "#5BC0EB",
    points: ["Zero-code embed, one script tag", "Matches your clinic's branding", "Works on mobile & desktop"],
    mockup: (
      <div style={{position:"relative",width:"100%",maxWidth:320,margin:"0 auto",height:280}}>
        <div style={{background:"rgba(26,31,43,0.8)",borderRadius:16,border:"1px solid rgba(255,255,255,0.06)",overflow:"hidden",height:"100%"}}>
          <div style={{background:"rgba(10,10,10,0.8)",padding:"10px 14px",display:"flex",alignItems:"center",gap:8}}>
            <div style={{display:"flex",gap:5}}>
              {["#EF4444","#F59E0B","#22C55E"].map((c,i)=><div key={i} style={{width:8,height:8,borderRadius:"50%",background:c}}/>)}
            </div>
            <div style={{flex:1,background:"rgba(255,255,255,0.05)",borderRadius:6,padding:"3px 10px",fontSize:10,color:"#6B7A99"}}>
              www.citydental.in
            </div>
          </div>
          <div style={{padding:16,fontSize:12,color:"rgba(240,244,255,0.3)",lineHeight:1.6}}>
            <div style={{height:10,background:"rgba(255,255,255,0.05)",borderRadius:4,marginBottom:8,width:"70%"}}/>
            <div style={{height:8,background:"rgba(255,255,255,0.04)",borderRadius:4,marginBottom:6,width:"90%"}}/>
            <div style={{height:8,background:"rgba(255,255,255,0.04)",borderRadius:4,marginBottom:6,width:"60%"}}/>
            <div style={{height:8,background:"rgba(255,255,255,0.04)",borderRadius:4,width:"80%"}}/>
          </div>
        </div>
        <div style={{
          position:"absolute",
          bottom:16,
          right:0,
          width:200,
          background:"rgba(15,20,30,0.98)",
          borderRadius:16,
          border:"1px solid rgba(91,192,235,0.2)",
          overflow:"hidden",
          boxShadow:"0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(91,192,235,0.06)",
        }}>
          <div style={{background:"linear-gradient(135deg,#1E6BFF,#0F52BA)",padding:"10px 12px",display:"flex",alignItems:"center",gap:8}}>
            <div style={{width:24,height:24,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="4" r="2" fill="white"/><path d="M1 11c0-2.8 2.2-4 5-4s5 1.2 5 4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div style={{fontSize:11,fontWeight:600,color:"white"}}>FREMN AI</div>
              <div style={{fontSize:9,color:"rgba(255,255,255,0.7)"}}>City Dental • Online</div>
            </div>
          </div>
          <div style={{padding:"10px 12px",display:"flex",flexDirection:"column",gap:6}}>
            <div style={{background:"rgba(255,255,255,0.04)",borderRadius:"4px 10px 10px 10px",padding:"7px 10px",fontSize:11,color:"rgba(240,244,255,0.7)",lineHeight:1.4}}>
               Hi! Ready to book your next appointment?
            </div>
            <div style={{display:"flex",gap:5,marginTop:2}}>
              {["Book Now","Learn More"].map((l,i)=>(
                <div key={i} style={{flex:1,textAlign:"center",padding:"5px 6px",borderRadius:7,border:`1px solid rgba(91,192,235,${i===0?0.4:0.15})`,fontSize:10,color:i===0?"#5BC0EB":"#6B7A99",background:i===0?"rgba(91,192,235,0.08)":"transparent"}}>
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "app",
    label: "Mobile App",
    tagline: "Always in their pocket",
    description: "Sits in your own app that puts appointments, records, and AI chat one tap away — keeping your clinic top of mind, always.",
    color: "#A78BFA",
    points: ["Push notifications for reminders", "View records & prescriptions", "In-app AI chat + quick rebook"],
    mockup: (
      <div style={{
        width: "100%",
        maxWidth: 320,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Phone shell */}
        <div style={{
          width: 210,
          background: "linear-gradient(160deg, #1a1030 0%, #0d0a1a 100%)",
          borderRadius: 36,
          border: "1.5px solid rgba(167,139,250,0.18)",
          boxShadow: "0 0 0 6px rgba(167,139,250,0.04), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(167,139,250,0.07)",
          padding: "14px 10px 20px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Inner glow */}
          <div style={{
            position:"absolute",top:-40,left:"50%",transform:"translateX(-50%)",
            width:160,height:160,borderRadius:"50%",
            background:"radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
            pointerEvents:"none",
          }}/>

          {/* Notch */}
          <div style={{
            width:60,height:18,borderRadius:"0 0 14px 14px",
            background:"rgba(10,8,20,0.9)",
            margin:"0 auto 10px",
            display:"flex",alignItems:"center",justifyContent:"center",gap:5,
            border:"1px solid rgba(167,139,250,0.08)",
            borderTop:"none",
          }}>
            <div style={{width:5,height:5,borderRadius:"50%",background:"rgba(167,139,250,0.3)"}}/>
            <div style={{width:20,height:4,borderRadius:3,background:"rgba(167,139,250,0.12)"}}/>
          </div>

          {/* Status bar */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 8px",marginBottom:10}}>
            <span style={{fontSize:9,color:"rgba(167,139,250,0.5)",fontWeight:600}}>9:41</span>
            <div style={{display:"flex",gap:4,alignItems:"center"}}>
              {/* Signal bars */}
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <rect x="0" y="5" width="2" height="3" rx="0.5" fill="rgba(167,139,250,0.5)"/>
                <rect x="3" y="3" width="2" height="5" rx="0.5" fill="rgba(167,139,250,0.5)"/>
                <rect x="6" y="1" width="2" height="7" rx="0.5" fill="rgba(167,139,250,0.5)"/>
                <rect x="9" y="0" width="2" height="8" rx="0.5" fill="rgba(167,139,250,0.25)"/>
              </svg>
              {/* Battery */}
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <rect x="0.5" y="0.5" width="13" height="7" rx="1.5" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
                <rect x="1.5" y="1.5" width="9" height="5" rx="1" fill="rgba(167,139,250,0.45)"/>
                <path d="M14 3v2" stroke="rgba(167,139,250,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* App header */}
          <div style={{padding:"0 8px",marginBottom:12}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div>
                <div style={{fontSize:9,color:"rgba(167,139,250,0.5)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:2}}>Good morning</div>
                <div style={{fontFamily:"Syne,sans-serif",fontSize:14,fontWeight:800,color:"#F0F4FF",letterSpacing:"-0.02em"}}>Rahul 👋</div>
              </div>
              <div style={{
                width:30,height:30,borderRadius:"50%",
                background:"linear-gradient(135deg,#A78BFA,#7C3AED)",
                display:"flex",alignItems:"center",justifyContent:"center",
                boxShadow:"0 0 14px rgba(167,139,250,0.35)",
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="5" r="2.5" stroke="white" strokeWidth="1.4"/>
                  <path d="M2 12.5c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Next appointment card */}
          <div style={{
            margin:"0 4px 10px",
            background:"linear-gradient(135deg,rgba(167,139,250,0.15),rgba(124,58,237,0.08))",
            border:"1px solid rgba(167,139,250,0.2)",
            borderRadius:16,
            padding:"10px 12px",
          }}>
            <div style={{fontSize:9,color:"rgba(167,139,250,0.6)",letterSpacing:"0.07em",textTransform:"uppercase",marginBottom:5}}>Next Appointment</div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              {/* Calendar icon */}
              <div style={{
                width:32,height:32,borderRadius:10,
                background:"rgba(167,139,250,0.12)",
                border:"1px solid rgba(167,139,250,0.15)",
                display:"flex",alignItems:"center",justifyContent:"center",
                flexShrink:0,
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1.5" y="3" width="13" height="11.5" rx="2.5" stroke="rgba(167,139,250,0.8)" strokeWidth="1.2"/>
                  <path d="M5 1.5v3M11 1.5v3" stroke="rgba(167,139,250,0.8)" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M1.5 7h13" stroke="rgba(167,139,250,0.5)" strokeWidth="1"/>
                  <circle cx="5.5" cy="10.5" r="1" fill="rgba(167,139,250,0.7)"/>
                  <circle cx="8" cy="10.5" r="1" fill="rgba(167,139,250,0.7)"/>
                </svg>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:11,fontWeight:600,color:"#F0F4FF"}}>Dr. Sharma · Cleaning</div>
                <div style={{fontSize:10,color:"rgba(167,139,250,0.6)",marginTop:1}}>Tomorrow · 10:30 AM</div>
              </div>
              {/* Chevron */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5.5 3.5L9 7l-3.5 3.5" stroke="rgba(167,139,250,0.5)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Quick actions */}
          <div style={{margin:"0 4px 10px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
            {[
              { label:"Book Visit", icon: (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1.5" y="2.5" width="11" height="10" rx="2" stroke="rgba(167,139,250,0.9)" strokeWidth="1.2"/>
                  <path d="M4.5 1v3M9.5 1v3" stroke="rgba(167,139,250,0.9)" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M7 6v4M5 8h4" stroke="rgba(167,139,250,0.9)" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              )},
              { label:"Ask AI", icon: (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 3.5C2 2.67 2.67 2 3.5 2h7C11.33 2 12 2.67 12 3.5v5c0 .83-.67 1.5-1.5 1.5H8L5.5 12V10H3.5C2.67 10 2 9.33 2 8.5v-5z" stroke="rgba(167,139,250,0.9)" strokeWidth="1.2"/>
                  <path d="M5 5.5h4M5 7.5h2.5" stroke="rgba(167,139,250,0.9)" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              )},
            ].map((action,i)=>(
              <div key={i} style={{
                background:"rgba(167,139,250,0.06)",
                border:"1px solid rgba(167,139,250,0.12)",
                borderRadius:12,
                padding:"8px 10px",
                display:"flex",alignItems:"center",gap:7,
              }}>
                {action.icon}
                <span style={{fontSize:10,fontWeight:500,color:"rgba(240,244,255,0.7)"}}>{action.label}</span>
              </div>
            ))}
          </div>

          {/* AI chat preview */}
          <div style={{margin:"0 4px",background:"rgba(10,8,20,0.6)",border:"1px solid rgba(167,139,250,0.1)",borderRadius:14,padding:"8px 10px"}}>
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
              <div style={{width:16,height:16,borderRadius:"50%",background:"linear-gradient(135deg,#A78BFA,#7C3AED)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="3" r="1.5" stroke="white" strokeWidth="0.9"/>
                  <path d="M1 7c0-1.7 1.3-2.5 3-2.5S7 5.3 7 7" stroke="white" strokeWidth="0.9" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{fontSize:9,fontWeight:600,color:"rgba(167,139,250,0.7)"}}>FREMN AI</span>
              <div style={{width:5,height:5,borderRadius:"50%",background:"#4ade80",marginLeft:"auto"}}/>
            </div>
            <div style={{fontSize:10,color:"rgba(240,244,255,0.55)",lineHeight:1.5,fontStyle:"italic"}}>
              &quot;Your next checkup is due in 3 months. Want me to book it now?&quot;
            </div>
          </div>

          {/* Home indicator */}
          <div style={{display:"flex",justifyContent:"center",marginTop:14}}>
            <div style={{width:48,height:4,borderRadius:3,background:"rgba(167,139,250,0.15)"}}/>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ChannelShowcase() {
  const [active, setActive] = useState(0);
  const ch = channels[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ch-section {
          padding: 100px 32px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .ch-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(30,107,255,0.06) 0%, transparent 70%);
          left: -150px; top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          transition: background 0.5s ease;
        }

        .ch-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ch-eyebrow {
          text-align: center;
          font-size: 11.5px;
          font-weight: 500;
          color: #5BC0EB;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .ch-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #F0F4FF;
          text-align: center;
          letter-spacing: -0.02em;
          margin-bottom: 48px;
          line-height: 1.15;
        }

        .ch-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 56px;
        }

        .ch-tab {
          padding: 9px 22px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.07);
          background: transparent;
          color: #6B7A99;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .ch-tab.active {
          background: rgba(26,31,43,0.9);
          border-color: rgba(91,192,235,0.25);
          color: #F0F4FF;
        }

        .ch-tab:hover:not(.active) {
          color: rgba(240,244,255,0.6);
          background: rgba(255,255,255,0.02);
        }

        .ch-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .ch-content { display: flex; flex-direction: column; gap: 20px; }

        .ch-tag {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 6px;
          width: fit-content;
        }

        .ch-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 800;
          color: #F0F4FF;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .ch-desc {
          font-size: 15.5px;
          color: #6B7A99;
          line-height: 1.7;
        }

        .ch-points { display: flex; flex-direction: column; gap: 10px; }

        .ch-point {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(240,244,255,0.65);
        }

        .ch-point-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .ch-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          text-decoration: none;
          padding: 11px 22px;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          width: fit-content;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.25s ease;
        }

        .ch-cta:hover { opacity: 0.88; transform: translateY(-1px); }

        .ch-mockup {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .ch-section { padding: 72px 20px; }
          .ch-body { grid-template-columns: 1fr; gap: 40px; }
          .ch-mockup { order: -1; }
        }

        @media (max-width: 480px) {
          .ch-tabs { flex-wrap: wrap; }
        }
      `}</style>

      <section className="ch-section" id="channels">
        <div className="ch-glow" style={{background:`radial-gradient(circle, ${ch.color}0F 0%, transparent 70%)`}} />
        <div className="ch-inner">
          <p className="ch-eyebrow">Multi-Channel</p>
          <h2 className="ch-heading">Meet patients on their<br />preferred channel</h2>

          <div className="ch-tabs">
            {channels.map((c, i) => (
              <button
                key={c.id}
                className={`ch-tab${active === i ? " active" : ""}`}
                style={active === i ? {borderColor:`${c.color}40`} : {}}
                onClick={() => setActive(i)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="ch-body">
            <div className="ch-content">
              <span
                className="ch-tag"
                style={{ color: ch.color, background: `${ch.color}15`, border: `1px solid ${ch.color}25` }}
              >
                {ch.label} Channel
              </span>
              <h3 className="ch-title">{ch.tagline}</h3>
              <p className="ch-desc">{ch.description}</p>
              <div className="ch-points">
                {ch.points.map((pt, i) => (
                  <div className="ch-point" key={i}>
                    <div className="ch-point-dot" style={{ background: ch.color }} />
                    {pt}
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="ch-cta"
                style={{ background: `linear-gradient(135deg, ${ch.color}, ${ch.color}99)` }}
              >
                Try it free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="ch-mockup">{ch.mockup}</div>
          </div>
        </div>
      </section>
    </>
  );
}