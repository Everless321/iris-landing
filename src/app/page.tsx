import Image from "next/image";

const features = [
  {
    title: "任意 N 跳级联",
    desc: "拓扑画布拖拽节点即生效。1 跳到 10 跳同一套接口，路径在 master 集中编排，节点零配置。",
    grad: "from-cyan-400 to-teal-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="4" cy="12" r="2" /><circle cx="12" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><circle cx="20" cy="12" r="2" />
        <path d="M6 12c0-2.5 2-6 6-6" /><path d="M6 12c0 2.5 2 6 6 6" /><path d="M14 6c2.5 0 4 2.5 4 6" /><path d="M14 18c2.5 0 4-2.5 4-6" />
      </svg>
    ),
  },
  {
    title: "splice(2) 零拷贝",
    desc: "单跳直连 fastpath 走 Linux splice，socket↔pipe↔socket 全程不进 userland。单流稳定 9.5 Gbps 量级，跟 realm 同一水位。",
    grad: "from-emerald-400 to-cyan-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
      </svg>
    ),
  },
  {
    title: "全链路 mTLS",
    desc: "节点间 raw_tunnel 默认 TLS 1.3 + AES-GCM 加密；master ↔ node gRPC 双向证书校验。CA 内置，无需 Let's Encrypt。",
    grad: "from-indigo-400 to-violet-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    title: "故障秒级转移",
    desc: "每跳支持节点组，权重轮询 + 主动 probe。任一节点掉线自动剔除路径，无需人工切换。",
    grad: "from-violet-400 to-fuchsia-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-3-6.7" /><path d="M21 4v6h-6" />
      </svg>
    ),
  },
  {
    title: "一键 enrollment",
    desc: "Web 面板新增节点 → 显示一行 curl 命令 → SSH 粘贴 → 节点自动注册 + 签证书 + 启动 systemd。",
    grad: "from-amber-400 to-pink-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 9l3 3 5-6" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "远程一键升级",
    desc: "master 自检 GitHub HEAD，可更新时 header 亮灯。点击 → 全节点滚动升级 + watchdog 自愈，失败自动回滚。",
    grad: "from-pink-400 to-rose-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12" /><path d="M7 8l5-5 5 5" /><rect x="3" y="15" width="18" height="6" rx="2" />
      </svg>
    ),
  },
  {
    title: "实时监控面板",
    desc: "CPU / RAM / 磁盘 / 网速 / 负载 / 节点延迟矩阵 / SLA 故障事件。Prometheus 兼容 metrics 端点。",
    grad: "from-cyan-400 to-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" />
      </svg>
    ),
  },
  {
    title: "公开状态首页",
    desc: "Komari 风格无需登录的节点状态看板，可对外公开。访客看节点健康，admin 用 /admin 进后台。",
    grad: "from-teal-400 to-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 010 20" /><path d="M12 2a15 15 0 000 20" />
      </svg>
    ),
  },
  {
    title: "TCP / UDP 双协议",
    desc: "TCP 走 raw_tunnel + splice fastpath，UDP 走 QUIC tunnel。WireGuard / SSH / 游戏 / VoIP 全覆盖。",
    grad: "from-blue-400 to-indigo-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12c4-8 16-8 20 0" /><path d="M2 12c4 8 16 8 20 0" />
      </svg>
    ),
  },
];

const stats = [
  { value: "9.5", unit: "Gbps", label: "单流吞吐（splice 实测，10G NIC）" },
  { value: "<3", unit: "s", label: "故障节点剔除时间" },
  { value: "10", unit: "Hop", label: "最大级联跳数" },
  { value: "1.3", unit: "TLS", label: "节点间默认 mTLS 加密" },
];

const stack = [
  "Rust", "Tokio", "Tonic gRPC", "rustls", "SQLx + SQLite",
  "splice(2)", "QUIC", "React 19", "Ant Design", "Vite",
];

const HOPS = [
  { cx: 90,  label: "Entry" },
  { cx: 235, label: "HK" },
  { cx: 380, label: "JP" },
  { cx: 525, label: "US" },
  { cx: 670, label: "Exit" },
];

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg" />
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </div>

      <nav className="fixed top-0 inset-x-0 z-50 nav-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="Iris" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold text-lg tracking-tight">Iris</span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">v0.1.0</span>
          </a>
          <div className="flex items-center gap-7">
            <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">特性</a>
            <a href="#perf" className="text-sm text-white/60 hover:text-white transition-colors">性能</a>
            <a href="#install" className="text-sm text-white/60 hover:text-white transition-colors">部署</a>
            <a href="https://github.com/Everless321/Iris" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-12 px-6 min-h-[92vh] flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-white/70">Rust · Tokio · splice(2) · mTLS</span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-6xl sm:text-8xl font-bold tracking-tight mb-6">
            <span className="text-gradient">Iris</span>
          </h1>

          <p className="animate-fade-in-up delay-200 text-2xl sm:text-4xl font-medium text-white/90 mb-4">
            高性能多级转发控制平台
          </p>
          <p className="animate-fade-in-up delay-300 text-base sm:text-lg text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
            任意 N 跳级联 · 全链路 mTLS · splice 零拷贝近线速 · Web 面板可视化编排<br />
            Rust 重写，性能对标 realm，体验对标商业产品
          </p>

          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <a href="https://github.com/Everless321/Iris" target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3.5 rounded-xl text-base inline-flex items-center justify-center gap-2">
              开始使用
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="https://github.com/Everless321/Iris" target="_blank" rel="noopener noreferrer" className="btn-ghost px-7 py-3.5 rounded-xl text-base inline-flex items-center justify-center gap-2 font-medium">
              查看源码
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M21 3l-9 9M15 3h6v6"/></svg>
            </a>
          </div>

          <div className="animate-fade-in-up delay-500 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 sm:p-10">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-5 uppercase tracking-widest">
                <span className="text-cyan-300/80">● live topology</span>
                <span>mTLS · TLS 1.3 · AES-GCM</span>
              </div>
              <svg viewBox="0 0 760 120" className="w-full h-auto">
                <defs>
                  <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#22d3ee" stopOpacity="0.1" />
                    <stop offset="0.5" stopColor="#22d3ee" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#818cf8" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {HOPS.slice(0, -1).map((h, i) => (
                  <line key={i} x1={h.cx + 12} y1={60} x2={HOPS[i+1].cx - 12} y2={60} stroke="url(#line)" strokeWidth="2" className="path-line" />
                ))}
                {HOPS.map((h, i) => (
                  <g key={i}>
                    <circle cx={h.cx} cy={60} r={10} fill={i === 0 || i === HOPS.length-1 ? "#22d3ee" : "#818cf8"} className="node-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                    <circle cx={h.cx} cy={60} r={4} fill="#05070d" />
                    <text x={h.cx} y={95} textAnchor="middle" fontSize="11" fill="#9ca6c2" fontFamily="var(--font-mono), monospace">{h.label}</text>
                  </g>
                ))}
              </svg>
              <div className="mt-2 text-center text-[11px] font-mono text-white/35">
                每段链路独立 mTLS · 任一节点掉线自动剔除 · splice 走单跳直连
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="perf" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-cyan-300/70 uppercase tracking-[0.3em] mb-3">benchmark</p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">真实数据，不夸张</h2>
            <p className="text-white/55 max-w-xl mx-auto">GCP n2-standard-4 × 3，us-east1-b 同 zone，iperf3 实测</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-7 text-center">
                <div className="flex items-baseline justify-center gap-1.5 mb-2">
                  <span className="stat-num text-5xl sm:text-6xl leading-none">{s.value}</span>
                  <span className="text-white/40 text-lg font-mono">{s.unit}</span>
                </div>
                <p className="text-xs text-white/55 mt-3 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 glass-card rounded-2xl p-8">
            <div className="flex flex-wrap items-baseline gap-4 justify-between mb-2">
              <h3 className="text-xl font-semibold">和 <span className="font-mono text-white/55">realm</span> 同一水位</h3>
              <span className="text-xs font-mono text-white/40">10G NIC / TCP / 1-hop splice</span>
            </div>
            <p className="text-sm text-white/50 mb-7">realm 是非常优秀的对手，多次跑分结果互有胜负、差距通常在 ±5% 以内。下面是某次实测的 4 组并发数据：</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[11px] font-mono uppercase tracking-widest text-white/40 border-b border-white/5">
                    <th className="text-left py-3 font-normal">并发</th>
                    <th className="text-right py-3 font-normal">realm</th>
                    <th className="text-right py-3 font-normal">Iris</th>
                    <th className="text-right py-3 font-normal">差距</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  {[
                    { p: "P=1", a: 9.35, b: 9.56 },
                    { p: "P=2", a: 8.93, b: 8.93 },
                    { p: "P=4", a: 8.63, b: 9.51 },
                    { p: "P=8", a: 9.32, b: 9.54 },
                  ].map((r) => {
                    const diff = ((r.b - r.a) / r.a) * 100;
                    const winner = Math.abs(diff) < 0.5 ? "tie" : diff > 0 ? "iris" : "realm";
                    return (
                      <tr key={r.p} className="border-b border-white/5 last:border-b-0">
                        <td className="py-3 text-white/70">{r.p}</td>
                        <td className={`py-3 text-right ${winner === "realm" ? "text-cyan-300" : "text-white/75"}`}>{r.a.toFixed(2)} <span className="text-white/35">Gbps</span></td>
                        <td className={`py-3 text-right ${winner === "iris"  ? "text-cyan-300" : "text-white/75"}`}>{r.b.toFixed(2)} <span className="text-white/35">Gbps</span></td>
                        <td className={`py-3 text-right ${winner === "tie" ? "text-white/40" : "text-white/55"}`}>
                          {winner === "tie" ? "持平" : `${diff > 0 ? "Iris" : "realm"} +${Math.abs(diff).toFixed(1)}%`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-white/35 mt-6 font-mono leading-relaxed">
              * GCP n2-standard-4 × 3 同 zone · 1-hop splice fastpath · 明文 TCP。<br />
              * 选 realm 对比因为它是 Rust 转发里最强对手；我们不宣称“更快”，目标是“不输”。<br />
              * N-hop 走 raw_tunnel + mTLS，性能数据待补测。
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-cyan-300/70 uppercase tracking-[0.3em] mb-3">capabilities</p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">为多机中转而生</h2>
            <p className="text-white/55 max-w-xl mx-auto">从 gost / realm / nps 迁移过来的人都中过的招，Iris 用一套架构全部解决</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="feature-card p-7">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.grad} flex items-center justify-center text-white mb-5 shadow-lg shadow-black/30`}>
                  <div className="w-5 h-5">{f.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{f.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="install" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-cyan-300/70 uppercase tracking-[0.3em] mb-3">deploy</p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">3 步上线</h2>
            <p className="text-white/55">从零开始，5 分钟搞定一台 master + N 台节点</p>
          </div>

          <div className="space-y-4">
            {[
              {
                num: "01", title: "部署 master",
                desc: "在控制机上跑一条命令，自动签发内置 CA、起 gRPC + Web 面板。",
                code: "curl -fsSL https://raw.githubusercontent.com/Everless321/Iris/main/install.sh | bash -s -- --master",
              },
              {
                num: "02", title: "Web 面板加节点",
                desc: "浏览器打开 master:7080，新增节点，复制弹出的一行 enrollment 命令。",
                code: "// http://<master-ip>:7080/admin/nodes  →  ＋新增节点",
              },
              {
                num: "03", title: "目标机粘贴执行",
                desc: "SSH 到中转机粘贴运行。节点自动注册、签证书、起 systemd 服务、加入集群。",
                code: "curl -fsSL http://<master>/install.sh | bash -s -- --token <one-time-token>",
              },
            ].map((s) => (
              <div key={s.num} className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row gap-5">
                <div className="flex-shrink-0">
                  <div className="text-3xl font-mono font-bold stat-num leading-none">{s.num}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-1.5">{s.title}</h3>
                  <p className="text-sm text-white/55 mb-3.5">{s.desc}</p>
                  <pre className="code-block px-4 py-3 overflow-x-auto"><code>{s.code}</code></pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono text-cyan-300/70 uppercase tracking-[0.3em] mb-5">tech stack</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {stack.map((t) => (
              <span key={t} className="glass-card px-4 py-2 rounded-full text-xs font-mono text-white/75">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="div-grad max-w-5xl mx-auto" />

      <section className="relative py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            把<span className="text-gradient">基础设施</span>夺回来
          </h2>
          <p className="text-white/55 text-lg mb-10">
            AGPL-3.0 开源 · 单二进制部署 · 100% 自托管 · 无遥测
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://github.com/Everless321/Iris" target="_blank" rel="noopener noreferrer" className="btn-primary px-9 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              在 GitHub 上 Star
            </a>
            <a href="https://github.com/Everless321/Iris/releases/latest" target="_blank" rel="noopener noreferrer" className="btn-ghost px-9 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2 font-medium">
              下载二进制
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Iris" width={20} height={20} className="rounded" />
            <span>Iris — high-perf forward control plane</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs">
            <a href="https://github.com/Everless321/Iris" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            <a href="https://github.com/Everless321/Iris/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Releases</a>
            <a href="https://github.com/Everless321/Iris/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Issues</a>
          </div>
          <span className="font-mono text-xs">AGPL-3.0</span>
        </div>
      </footer>
    </div>
  );
}
