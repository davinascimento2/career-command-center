import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  ExternalLink, 
  Github, 
  Code2, 
  Cpu, 
  Layers, 
  Activity, 
  Sparkles, 
  Send, 
  CornerDownLeft, 
  ShieldCheck, 
  Database, 
  Radio, 
  Laptop, 
  Globe, 
  Zap,
  CheckCircle2,
  FolderGit2,
  Mail
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  isFeatured?: boolean;
  metrics?: string;
  status: 'live' | 'building' | 'maintained';
}

const PROJECTS: Project[] = [
  {
    id: 'netwatch',
    title: 'NetWatch // Cyberpunk Network Simulator',
    category: 'Simulação de Sistemas & Redes',
    description: 'Simulador interativo de topologias de rede hop-by-hop com motor determinístico Dijkstra, firewall SPI, isolamento VLAN 802.1Q, CLI interativo e áudio procedural.',
    tags: ['React', 'TypeScript', 'Zustand', '@xyflow/react', 'Tailwind CSS', 'Web Audio API'],
    liveUrl: 'https://netwatch-toadbigode.vercel.app',
    githubUrl: 'https://github.com/davinascimento2/netwatch',
    isFeatured: true,
    metrics: 'Dijkstra Routing • CLI Diagnostics • 60 FPS',
    status: 'live'
  },
  {
    id: 'ayrton-senna',
    title: 'Ayrton Senna // Digital Museum & Telemetry',
    category: 'Experiência Cinematográfica & Editorial',
    description: 'Tributo cinematográfico interativo com telemetria curva a curva de Mônaco 1988 e Donington 1993, arquivo fotográfico 35mm, som Honda V10/V12 sintetizado e modo CRT.',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Web Audio API'],
    liveUrl: 'https://sennamuseum.vercel.app',
    githubUrl: 'https://github.com/davinascimento2/ayrton-senna-museum',
    isFeatured: true,
    metrics: 'Telemetry Curves • Sound Synthesizer • 35mm Gallery',
    status: 'live'
  },
  {
    id: 'easy-study',
    title: 'EasyStudy // Hub de Aprendizado & Foco',
    category: 'Educação & Produtividade',
    description: 'Plataforma inteligente de estudos com flashcards com repetição espaçada, cronômetro Pomodoro, quiz interativo e síntese de resumos.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage API'],
    liveUrl: 'https://easy-study-davinascimento2.vercel.app',
    githubUrl: 'https://github.com/davinascimento2/easy-study',
    metrics: 'Spaced Repetition • Pomodoro Engine • Quiz Mode',
    status: 'live'
  },
  {
    id: 'storyweaver',
    title: 'StoryWeaver // AI Interactive Narrative Engine',
    category: 'IA Generativa & Games',
    description: 'Motor de histórias e RPG interativo que gera ramificações narrativas em tempo real adaptadas às decisões do jogador.',
    tags: ['React', 'TypeScript', 'Prompt Engineering', 'Generative Narrative'],
    liveUrl: 'https://storyweaver-davinascimento2.vercel.app',
    githubUrl: 'https://github.com/davinascimento2/storyweaver',
    metrics: 'Branching Storylines • Dynamic Quests',
    status: 'live'
  },
  {
    id: 'time-capsule',
    title: 'Social Time Capsule // Digital Memory Vault',
    category: 'Web Social & Memórias',
    description: 'Cápsula do tempo digital onde mensagens, memórias e arquivos são trancados e liberados apenas em datas programadas no futuro.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Cryptographic Vault'],
    liveUrl: 'https://social-time-capsule-davinascimento2.vercel.app',
    githubUrl: 'https://github.com/davinascimento2/social-time-capsule',
    metrics: 'Scheduled Unlock • Media Vault',
    status: 'live'
  },
  {
    id: 'esp8266',
    title: 'ESP8266 IoT Telemetry Studio',
    category: 'Hardware & IoT',
    description: 'Dashboard interativo para simulação e monitoramento de dispositivos IoT e microcontroladores ESP8266 com stream de telemetria.',
    tags: ['JavaScript', 'IoT', 'MQTT Protocol', 'WebSocket'],
    githubUrl: 'https://github.com/davinascimento2/esp8266',
    metrics: 'Live Dials • Sensor Stream',
    status: 'maintained'
  }
];

export function App() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'COMMAND CENTER v2.5.0 [ONLINE]',
    'Digite "help" para ver os comandos ou "projects" para listar o portfólio.'
  ]);
  const termEndRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, `guest@command-center:~$ ${cmd}`];

    switch (cmd) {
      case 'help':
        newLogs.push(
          'COMANDOS DISPONÍVEIS:',
          '  projects    - Lista todos os projetos principais e links',
          '  skills      - Exibe o stack tecnológico e especialidades',
          '  about       - Breve biografia sobre Davi Nascimento',
          '  contact     - Informações de contato e redes',
          '  matrix      - Chuva de celebração digital',
          '  clear       - Limpa o terminal'
        );
        break;
      case 'projects':
        newLogs.push(
          'PROJETOS EM DESTAQUE:',
          '  1. NetWatch -> https://netwatch-toadbigode.vercel.app',
          '  2. Ayrton Senna Museum -> https://sennamuseum.vercel.app',
          '  3. EasyStudy -> https://github.com/davinascimento2/easy-study',
          '  4. StoryWeaver -> https://github.com/davinascimento2/storyweaver'
        );
        break;
      case 'skills':
        newLogs.push(
          'TECH STACK & CORE SKILLS:',
          '  Frontend : React 18/19, TypeScript, Next.js, Tailwind CSS, Zustand, @xyflow',
          '  Backend  : Node.js, REST APIs, Python, PostgreSQL, Supabase',
          '  AI/Agent : Prompt Engineering, LLM Tool Calling, Multi-Agent Orchestration',
          '  DevOps   : Vite, Git, Vercel, Docker, CI/CD'
        );
        break;
      case 'about':
        newLogs.push(
          'DAVI NASCIMENTO:',
          '  Desenvolvedor Full-Stack focado em construir aplicações web modernas,',
          '  simuladores de alta performance e experiências ricas com inteligência artificial.'
        );
        break;
      case 'contact':
        newLogs.push(
          'CANAIS DE CONTATO:',
          '  GitHub   : https://github.com/davinascimento2',
          '  Status   : Disponível para projetos & novas oportunidades'
        );
        break;
      case 'matrix':
      case 'party':
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        newLogs.push('🎉 Efeito Matrix ativado!');
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push(`Comando não reconhecido: "${cmd}". Digite "help".`);
        break;
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  useEffect(() => {
    termEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black font-sans">
      {/* Top Cyber Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#070b12]/90 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]">
            DN
          </div>
          <div>
            <div className="text-sm font-extrabold tracking-wider text-slate-100 font-display">
              DAVI NASCIMENTO
            </div>
            <div className="text-[10px] font-mono text-cyan-400">
              CAREER COMMAND CENTER // v2.5
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-xs font-mono">
          <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>DISPONÍVEL P/ PROJETOS</span>
          </div>

          <a
            href="https://github.com/davinascimento2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative px-4 md:px-8 py-16 md:py-24 max-w-6xl mx-auto w-full text-center md:text-left space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
          <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Full-Stack Engineer & AI Systems Architect</span>
        </div>

        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight font-display text-slate-100 leading-tight">
          Engenharia de Software, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
            Simulações Complexas & Sistemas de IA
          </span>
        </h1>

        <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed">
          Desenvolvedor focado em aplicações web de alta fidelidade, simuladores determinísticos de redes, experiências cinematográficas e fluxos baseados em agentes autônomos.
        </p>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 font-mono text-xs max-w-3xl">
          <div className="p-3 rounded-xl bg-[#0c121d] border border-slate-800">
            <div className="text-slate-400 text-[10px] uppercase">Projetos no Ar</div>
            <div className="text-lg font-bold text-cyan-400">100% Produção</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0c121d] border border-slate-800">
            <div className="text-slate-400 text-[10px] uppercase">Stack Principal</div>
            <div className="text-lg font-bold text-emerald-400">React + TS</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0c121d] border border-slate-800">
            <div className="text-slate-400 text-[10px] uppercase">Arquitetura</div>
            <div className="text-lg font-bold text-sky-400">Multi-Agent AI</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0c121d] border border-slate-800">
            <div className="text-slate-400 text-[10px] uppercase">Status</div>
            <div className="text-lg font-bold text-amber-400">Open to Work</div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="px-4 md:px-8 max-w-6xl mx-auto w-full space-y-16 pb-20">
        
        {/* SECTION: Featured Projects Bento */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-xl font-bold font-display text-slate-100 flex items-center space-x-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                <span>Portfólio de Projetos</span>
              </h2>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Projetos desenvolvidos, modernizados e publicados em produção.
              </p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-800">
              {PROJECTS.length} Aplicações
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map(proj => (
              <div
                key={proj.id}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  proj.isFeatured
                    ? 'bg-[#0a101b] border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:border-cyan-400'
                    : 'bg-[#080d16] border-slate-800 hover:border-slate-700 hover:bg-[#0c121e]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                      {proj.category}
                    </span>

                    {proj.status === 'live' && (
                      <span className="flex items-center space-x-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>NO AR</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-100 font-display">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {proj.description}
                  </p>

                  {proj.metrics && (
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800/80">
                      ⚡ {proj.metrics}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center space-x-3 pt-5 mt-2 border-t border-slate-800/80">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-1.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Ver Projeto Online</span>
                    </a>
                  )}

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center space-x-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Interactive CLI Terminal Widget */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <TerminalIcon className="w-4 h-4" />
            <span>Interactive Portfolio Terminal</span>
          </div>

          <div className="rounded-2xl bg-[#06090e] border border-slate-800 overflow-hidden shadow-2xl font-mono text-xs">
            <div className="px-4 py-2.5 bg-[#0a0f1a] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[11px] text-slate-400 ml-2">davi@portfolio:~ (zsh)</span>
              </div>
              <span className="text-[10px] text-slate-500">Try typing: "projects", "skills", "matrix"</span>
            </div>

            <div className="p-4 max-h-64 overflow-y-auto custom-scrollbar space-y-1.5 text-slate-300 leading-relaxed">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={log.startsWith('guest@') ? 'text-cyan-400 font-bold' : ''}>
                  {log}
                </div>
              ))}
              <div ref={termEndRef} />
            </div>

            <form onSubmit={handleCommand} className="px-4 py-2.5 bg-[#080d16] border-t border-slate-800 flex items-center space-x-2">
              <span className="text-cyan-400 font-bold">guest@command-center:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={e => setTerminalInput(e.target.value)}
                placeholder="type 'help'..."
                className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none"
              />
              <button type="submit" className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </section>

        {/* SECTION: Tech Radar */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-display text-slate-100 flex items-center space-x-2">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <span>Matriz de Especialidades & Tecnologias</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#080d16] border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold uppercase text-[11px] block">Frontend & UI Engine</span>
              <p className="text-slate-400 text-[11px]">React 18/19, TypeScript, Next.js, Tailwind CSS, Zustand, @xyflow/react, Web Audio API, Framer Motion.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#080d16] border border-slate-800 space-y-2">
              <span className="text-emerald-400 font-bold uppercase text-[11px] block">Backend & Sistemas</span>
              <p className="text-slate-400 text-[11px]">Node.js, Express, REST APIs, Python, PostgreSQL, Supabase, Docker, Vite, Git & GitHub Actions.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#080d16] border border-slate-800 space-y-2">
              <span className="text-purple-400 font-bold uppercase text-[11px] block">IA & Agentes Autônomos</span>
              <p className="text-slate-400 text-[11px]">LLM Tool Calling, Prompt Engineering, Agentes Multi-tarefas, Workflows Agentic, Síntese Procedural.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-[#06090e] py-8 px-4 text-center text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Davi Nascimento. Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/davinascimento2" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub (@davinascimento2)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
