/** biome-ignore-all lint/suspicious/noArrayIndexKey: Ignore */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: Ignore */
"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

const SNIPPETS = [
  { label: "client.ts", lang: "ts", color: "#3178c6", code: `const result = await\n  UserController\n  .getById(id);` },
  { label: "lib.rs", lang: "rust", color: "#dea584", code: `pub async fn get_by_id(\n  id: &str\n) -> Result<User> {` },
  { label: "client.py", lang: "python", color: "#3572A5", code: `async def get_by_id(\n  self, id: str\n) -> User:` },
  { label: "README.md", lang: "md", color: "#83b6d0", code: `## getById\nFetches user by ID.\nReturns \`User\` object.` },
  { label: "Cargo.toml", lang: "toml", color: "#9c4221", code: `[dependencies]\nvovk_client = "0.4"\ntokio = { version = "1" }` },
  { label: "package.json", lang: "json", color: "#f1e05a", code: `"dependencies": {\n  "vovk-client": "^0.4"\n}` },
  { label: "pyproject.toml", lang: "toml", color: "#4B8BBE", code: `[project]\nname = "vovk-client"\ndependencies = ["httpx"]` },
  { label: "AI Tool", lang: "ts", color: "#10b981", code: `tools: [{\n  name: "getById",\n  parameters: UserSchema\n}]` },
  { label: "types.ts", lang: "ts", color: "#c084fc", code: `export interface User {\n  id: string;\n  name: string;\n}` },
];

const PROCEDURE_CODE = `import { post, procedure } from "vovk";
import { z } from "zod";
import UserService from "./UserService";

export default class UserController {
  @post("{id}")
  static updateUser = procedure({
    params: z.object({ id: z.string() }),
    body: z.object({ name: z.string() }),
  }).handle(async (req, { id }) => {
    return UserService.updateUser(id, await req.json());
  });
}`;

function syntaxHighlight(code, lang) {
  const keywords = {
    ts: ["import","from","export","default","class","static","async","const","type","interface","await","return","Promise"],
    rust: ["pub","async","fn","let","Result","use","impl","struct"],
    python: ["async","def","self","from","import","return","await","class"],
    md: [], toml: [], json: [],
  };
  const kws = keywords[lang] || keywords.ts;
  let e = code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  e = e.replace(/"([^"]*)"/g, '<span style="color:#c3e88d">"$1"</span>');
  e = e.replace(/'([^']*)'/g, "<span style=\"color:#c3e88d\">'$1'</span>");
  e = e.replace(/`([^`]*)`/g, '<span style="color:#c3e88d">`$1`</span>');
  kws.forEach((kw) => { e = e.replace(new RegExp(`\\b(${kw})\\b`,"g"), '<span style="color:#c792ea">$1</span>'); });
  e = e.replace(/@(\w+)/g, '<span style="color:#89ddff">@$1</span>');
  e = e.replace(/\b(User|UserController|UserService|VovkRequest|UserSchema)\b/g, '<span style="color:#ffcb6b;font-style:italic">$1</span>');
  e = e.replace(/##\s(.+)/g, '<span style="color:#82aaff;font-weight:700">## $1</span>');
  e = e.replace(/\[([^\]]+)\]/g, '<span style="color:#ff5370">[$1]</span>');
  return e;
}

const ORBIT_A = 310;
const ORBIT_B = 150;
const TILT_RAD = (60 * Math.PI) / 180;

function getPos(index, total, time) {
  const speed = 0.0003 + index * 0.00003;
  const angle = (index / total) * Math.PI * 2 + time * speed;
  const x = Math.cos(angle) * ORBIT_A;
  const yFlat = Math.sin(angle) * ORBIT_B;
  const y = yFlat * Math.cos(TILT_RAD);
  const z = yFlat * Math.sin(TILT_RAD);
  const yFloat = Math.sin((index / total) * Math.PI * 3 + time * 0.001) * 8;
  return { x, y: y + yFloat, z };
}

export function CodeOrbit() {
  const [isPaused, setIsPaused] = useState(false);
  const [positions, setPositions] = useState(() => SNIPPETS.map((_, i) => getPos(i, SNIPPETS.length, 0)));
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const lastRef = useRef(null);
  const rafRef = useRef(null);
  const containerRef = useRef(null);
  const pausedRef = useRef(isPaused);

  useEffect(() => { pausedRef.current = isPaused; }, [isPaused]);

  const loop = useCallback((ts) => {
    if (lastRef.current === null) lastRef.current = ts;
    const dt = ts - lastRef.current;
    lastRef.current = ts;
    if (!pausedRef.current) timeRef.current += dt;
    setPositions(SNIPPETS.map((_, i) => getPos(i, SNIPPETS.length, timeRef.current)));
    rafRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [loop]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const h = (e) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: (e.clientX - r.left - r.width / 2) * 0.015, y: (e.clientY - r.top - r.height / 2) * 0.015 });
    };
    el.addEventListener("mousemove", h);
    return () => el.removeEventListener("mousemove", h);
  }, []);

  const highlightedProcedure = useMemo(() => syntaxHighlight(PROCEDURE_CODE, "ts"), []);

  const sorted = useMemo(() => {
    return SNIPPETS.map((s, i) => ({ ...s, i, ...positions[i] })).sort((a, b) => a.z - b.z);
  }, [positions]);

  const particles = useMemo(() => {
    const colors = ["rgba(199,146,234,0.35)","rgba(49,120,198,0.35)","rgba(16,185,129,0.3)","rgba(255,203,107,0.3)"];
    return Array.from({ length: 14 }, (_, i) => ({
      left: `${15 + ((i * 37 + 13) % 70)}%`,
      top: `${15 + ((i * 53 + 7) % 70)}%`,
      dur: 3 + (i % 4),
      delay: (i * 0.6) % 4,
      color: colors[i % 4],
    }));
  }, []);

  return (
    <div ref={containerRef} style={{
      position: "relative", width: "100%", height: 700,
      background: "#0a0a0f", display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", fontFamily: "'JetBrains Mono', monospace", userSelect: "none",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes floatP { 0%,100%{opacity:0;transform:translateY(0) scale(.5)} 50%{opacity:1;transform:translateY(-40px) scale(1)} }
        @keyframes pulseR { 0%{transform:translate(-50%,-50%) scale(1);opacity:.15} 100%{transform:translate(-50%,-50%) scale(1.15);opacity:0} }
        .snip-card:hover { border-color: var(--acc) !important; transform: scale(1.08) !important; }
      `}</style>

      {/* ambient bg */}
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",
        background:"radial-gradient(ellipse 900px 500px at 50% 50%,rgba(121,83,210,.06) 0%,transparent 70%),radial-gradient(ellipse 400px 400px at 30% 40%,rgba(49,120,198,.04) 0%,transparent 60%),radial-gradient(ellipse 400px 300px at 70% 60%,rgba(16,185,129,.03) 0%,transparent 60%)"
      }}/>

      {/* orbit ring hint */}
      <div style={{
        position:"absolute",left:"50%",top:"50%",width:ORBIT_A*2,height:ORBIT_B*2,
        transform:"translate(-50%,-50%) rotateX(60deg)",
        border:"1px solid rgba(255,255,255,.035)",borderRadius:"50%",pointerEvents:"none",
      }}/>

      {/* pulse ring */}
      <div style={{
        position:"absolute",left:"50%",top:"50%",width:374,height:280,
        border:"1px solid rgba(121,83,210,.2)",borderRadius:10,
        animation:"pulseR 3s ease-out infinite",pointerEvents:"none",zIndex:9,
      }}/>

      {/* central block */}
      <div style={{
        position:"relative",zIndex:10,width:370,
        background:"#12121a",border:"1px solid #1e1e2e",borderRadius:10,
        boxShadow:"0 0 0 1px rgba(255,255,255,.03),0 8px 40px rgba(0,0,0,.5),0 0 120px -20px rgba(121,83,210,.12)",
        overflow:"hidden",transition:"transform .4s cubic-bezier(.23,1,.32,1),box-shadow .4s ease",
      }}>
        <div style={{
          display:"flex",alignItems:"center",gap:6,padding:"10px 14px",
          background:"rgba(255,255,255,.02)",borderBottom:"1px solid #1e1e2e",
        }}>
          {["#ff5f57","#febc2e","#28c840"].map(c=>(
            <div key={c} style={{width:8,height:8,borderRadius:"50%",background:c}}/>
          ))}
          <span style={{marginLeft:8,fontSize:11,color:"#5a5e6e",letterSpacing:.3}}>UserController.ts</span>
        </div>
        <pre style={{margin:0,padding:16,fontSize:11.5,lineHeight:1.65,color:"#c9cdd6",overflow:"hidden"}}>
          <code dangerouslySetInnerHTML={{__html:highlightedProcedure}}/>
        </pre>
      </div>

      {/* orbiting snippets */}
      {sorted.map((s) => {
        const depthNorm = (s.z + ORBIT_B) / (ORBIT_B * 2);
        const scale = 0.65 + depthNorm * 0.55;
        const opacity = 0.4 + depthNorm * 0.6;
        return (
          <div key={s.label} style={{
            position:"absolute",left:"50%",top:"50%",
            transform:`translate(calc(-50% + ${s.x+mouse.x}px),calc(-50% + ${s.y+mouse.y}px)) scale(${scale})`,
            zIndex: depthNorm > 0.5 ? 15 : 5,
            opacity,transition:"opacity .3s ease",pointerEvents:"auto",
          }}>
            <div className="snip-card" style={{
              "--acc":s.color,
              width:175,background:"rgba(18,18,26,.92)",backdropFilter:"blur(12px)",
              border:"1px solid rgba(255,255,255,.06)",borderRadius:8,overflow:"hidden",
              cursor:"default",position:"relative",transition:"transform .25s ease,border-color .25s ease",
            }}>
              <div style={{
                display:"flex",alignItems:"center",gap:6,padding:"5px 10px",
                fontSize:9,fontWeight:500,color:"#5a5e6e",
                background:"rgba(255,255,255,.02)",borderBottom:"1px solid rgba(255,255,255,.04)",
                letterSpacing:.4,textTransform:"uppercase",
              }}>
                <span style={{width:5,height:5,borderRadius:"50%",background:s.color,flexShrink:0}}/>
                {s.label}
              </div>
              <pre style={{margin:0,padding:"8px 10px",fontSize:9.5,lineHeight:1.55,color:"#c9cdd6",whiteSpace:"pre",overflow:"hidden"}}>
                <code dangerouslySetInnerHTML={{__html: syntaxHighlight(s.code,s.lang)}}/>
              </pre>
              <div style={{
                position:"absolute",bottom:-20,left:"50%",transform:"translateX(-50%)",
                width:80,height:30,borderRadius:"50%",background:s.color,
                opacity:.08,filter:"blur(16px)",pointerEvents:"none",
              }}/>
            </div>
          </div>
        );
      })}

      {/* particles */}
      {particles.map((p,i) => (
        <div key={i} style={{
          position:"absolute",width:2,height:2,borderRadius:"50%",
          background:p.color,left:p.left,top:p.top,pointerEvents:"none",
          animation:`floatP ${p.dur}s ease-in-out ${p.delay}s infinite`,
        }}/>
      ))}

      <button type="button" onClick={()=>setIsPaused(p=>!p)} style={{
        position:"absolute",bottom:20,right:20,zIndex:20,
        background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",
        color:"#5a5e6e",fontFamily:"'JetBrains Mono',monospace",fontSize:10,
        padding:"6px 12px",borderRadius:6,cursor:"pointer",letterSpacing:.5,textTransform:"uppercase",
      }}>
        {isPaused ? "▶ play" : "❚❚ pause"}
      </button>
    </div>
  );
}