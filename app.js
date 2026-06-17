import PortfolioConfig from './config.js';

// Setup GSAP plugins safely
gsap.registerPlugin(ScrollTrigger);

class PortfolioEngine {
    constructor() {
        this.config = PortfolioConfig;
        this.activeFilter = 'all';
        
        this.initDOM();
        this.initThree();
        this.initInteractions();
        this.initAnimations();
        this.initSystemTriggers();
    }

    // --- COMPLETE HYDRATION PLATFORM GRID ---
    initDOM() {
        const p = this.config.profile;
        
        document.getElementById('hero-avatar').src = p.profileImage;
        document.getElementById('hero-name').innerText = p.name.toUpperCase();
        document.getElementById('hero-tagline').innerText = p.tagline;
        
        document.getElementById('about-p1').innerText = p.aboutSummary;
        document.getElementById('about-p2').innerText = `Primary Mandate: ${p.careerGoals}`;
        document.getElementById('about-vision-text').innerText = 'Great design attracts attention, but great user experience builds trust. I believe every website should be visually appealing, responsive, fast, and intuitive. My goal is to create interfaces that not only look outstanding but also provide a seamless experience for every user.';
        document.getElementById('btn-download-resume').href = p.resumeUrl;
        
        // Build Metric Counter Nodes
        const statsWrap = document.getElementById('stats-container');
        this.config.stats.forEach(s => {
            statsWrap.innerHTML += `
                <div class="glass-card p-6 rounded-xl text-center">
                    <div class="stat-number text-3xl font-black text-cyan-400 mb-1" data-target="${s.value}">0</div>
                    <div class="text-slate-500 text-[10px] tracking-wider uppercase font-bold">${s.label}</div>
                </div>
            `;
        });

        this.hydrateSkills('skills-fe', this.config.skills.frontend);
        this.hydrateSkills('skills-design', this.config.skills.design);
        this.hydrateSkills('skills-tools', this.config.skills.tools);

        // Build Service Layout Matrices
        const srvWrap = document.getElementById('services-container');
        this.config.services.forEach(srv => {
            srvWrap.innerHTML += `
                <div class="glass-card p-6 rounded-xl space-y-2">
                    <h3 class="text-sm font-bold text-cyan-400 tracking-wide">// ${srv.title}</h3>
                    <p class="text-xs text-slate-400 leading-relaxed">${srv.desc}</p>
                </div>
            `;
        });

        // 🌟 RECONFIGURED COMMUNICATION INTERFACE MAPPER
        const socWrap = document.getElementById('social-grid');
        
        // Context Descriptions mapping layout identifiers
        const connectionSubtitles = {
            telegram: "Secure Comms",
            instagram: "Visual Grid",
            github: "Source Trees",
            linkedin: "Corporate ID",
            whatsapp: "Direct Ping",
            gmail: "Secure Box"
        };

        Object.entries(this.config.socials).forEach(([key, val]) => {
            if(!val || val === '#' || val === '') return;
            
            const link = key === 'gmail' ? `mailto:${val}` : val;
            const subtitle = connectionSubtitles[key] || "External Link";
            
            socWrap.innerHTML += `
                <a href="${link}" target="_blank" class="glass-card p-5 rounded-xl flex flex-col items-center justify-center text-center hover:border-cyan-400/40 transition-all group relative overflow-hidden">
                    <span class="text-xs uppercase font-black text-slate-100 tracking-widest group-hover:text-cyan-400 transition-colors">${key}</span>
                    <span class="text-[9px] font-mono text-slate-500 uppercase mt-1 tracking-wider">${subtitle}</span>
                </a>
            `;
        });

        this.renderProjects();
        this.initModals();
    }

    hydrateSkills(targetId, dataset) {
        const el = document.getElementById(targetId);
        dataset.forEach(sk => {
            el.innerHTML += `
                <div class="space-y-1">
                    <div class="flex justify-between text-[11px] text-slate-400"><span>${sk.name}</span><span class="font-mono">${sk.level}%</span></div>
                    <div class="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                        <div class="skill-bar h-full bg-gradient-to-r from-purple-500 to-cyan-400 w-0" data-level="${sk.level}"></div>
                    </div>
                </div>
            `;
        });
    }

    // --- THREE.JS PARTICLE ENGINE CORE ---
    initThree() {
        const canvas = document.getElementById('webgl-bg');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const count = 1000;
        const geom = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);

        for(let i=0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 75;
        }

        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = new THREE.PointsMaterial({ size: 0.12, color: 0x22d3ee, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending });
        const starfield = new THREE.Points(geom, mat);
        scene.add(starfield);

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        const clock = new THREE.Clock();
        const renderLoop = () => {
            const time = clock.getElapsedTime();
            starfield.rotation.y = time * 0.02;
            starfield.rotation.x = time * 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(renderLoop);
        };
        renderLoop();
    }

    // --- INTERACTIVE MOUSE INTERACTIONS ---
    initInteractions() {
        const cursor = document.getElementById('custom-cursor');
        const glow = document.getElementById('mouse-glow');

        window.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });

        // Interactive Button Ripples
        document.body.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-neon, .glass-card, .border');
            if (!btn) return;
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rip = document.createElement('span');
            rip.className = 'ripple-fx';
            rip.style.left = `${x}px`;
            rip.style.top = `${y}px`;
            btn.appendChild(rip);
            setTimeout(() => rip.remove(), 500);
        });

        // Filter and Search Triggers
        document.getElementById('project-search').addEventListener('input', (e) => {
            this.renderProjects(e.target.value.toLowerCase());
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.activeFilter = e.target.getAttribute('data-filter');
                this.renderProjects(document.getElementById('project-search').value.toLowerCase());
            });
        });

        // Simulated Local Form Submission Handling
        document.getElementById('contact-form').addEventListener('submit', () => {
            const sBtn = document.getElementById('form-submit-btn');
            sBtn.innerText = "TRANSMITTING DATA DATASETS...";
            sBtn.disabled = true;
            
            setTimeout(() => {
                sBtn.innerText = "TRANSMISSION SUCCESSFUL ✓";
                sBtn.className = "w-full bg-emerald-500 text-slate-950 text-xs font-bold tracking-widest py-4 rounded-lg";
                document.getElementById('contact-form').reset();
                setTimeout(() => {
                    sBtn.innerText = "SEND TRANSMISSION";
                    sBtn.className = "w-full bg-cyan-400 text-slate-950 text-xs font-bold tracking-widest py-4 rounded-lg shadow-md shadow-cyan-400/10";
                    sBtn.disabled = false;
                }, 3000);
            }, 1200);
        });
    }

    // --- RENDER REPOSITORIES GALLERY ---
    renderProjects(query = '') {
        const wrapper = document.getElementById('projects-container');
        wrapper.innerHTML = '';

        const displayed = this.config.projects.filter(p => {
            const matchedCategory = this.activeFilter === 'all' || p.category === this.activeFilter;
            const matchedSearch = p.title.toLowerCase().includes(query) || p.tech.some(t => t.toLowerCase().includes(query));
            return matchedCategory && matchedSearch;
        });

        displayed.forEach(p => {
            const block = document.createElement('div');
            block.className = 'glass-card project-card rounded-2xl overflow-hidden flex flex-col group';
            block.innerHTML = `
                <div class="w-full h-44 overflow-hidden relative">
                    <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                        <h3 class="text-base font-bold text-slate-100">${p.title}</h3>
                        <p class="text-xs text-slate-400 mt-2 leading-relaxed">${p.desc}</p>
                        <div class="flex flex-wrap gap-2 mt-4">${p.tech.map(t => `<span class="text-[9px] font-bold bg-slate-950 px-2 py-1 rounded text-cyan-400 uppercase tracking-wider">${t}</span>`).join('')}</div>
                    </div>
                    <div class="flex gap-4 pt-2 text-[11px] font-bold tracking-widest">
                        <a href="${p.demoUrl}" class="text-cyan-400 hover:underline">WEBSITE ↗</a>
                        <a href="${p.sourceUrl}"
   class="source-link text-slate-300 hover:text-white hover:underline"
   data-coming-soon="${p.comingSoon || false}">
   SOURCE 💾
</a>
                    </div>
                </div>
            `;
            wrapper.appendChild(block);
            const sourceBtn = block.querySelector('.source-link');

if (sourceBtn) {
    sourceBtn.addEventListener('click', (e) => {
        if (sourceBtn.dataset.comingSoon === 'true') {
            e.preventDefault();
            alert('🚀 Coming Soon...');
        }
    });
}
            this.apply3DTilt(block);
        });
    }

    apply3DTilt(card) {
        card.addEventListener('mousemove', (e) => {
            const bounds = card.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const y = e.clientY - bounds.top;
            const midX = bounds.width / 2;
            const midY = bounds.height / 2;
            const rotX = (midY - y) / 12;
            const rotY = (x - midX) / 12;
            card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.01, 1.01, 1.01)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    }

    // --- MODAL DIALOG CONTROLS ---
    initModals() {
        const modal = document.getElementById('resume-modal');
        const p = this.config.profile;

        document.getElementById('btn-view-resume').addEventListener('click', () => {
            document.getElementById('resume-img').src = p.profileImage;
            document.getElementById('resume-name').innerText = p.name.toUpperCase();
            document.getElementById('resume-title').innerText = p.title.toUpperCase();
            document.getElementById('resume-summary').innerText =p.resumeSummary;
            modal.classList.add('active');
        });

        document.getElementById('modal-close-btn').addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
    }

    // --- TITLES INFINITE SLIDE LOOP ---
    initAnimations() {
        const block = document.getElementById('rotating-text-span');
        const list = this.config.titlesRotation;
        let index = 0;
        block.innerText = list[0];

        setInterval(() => {
            gsap.to(block, {
                y: -24, opacity: 0, duration: 0.35, onComplete: () => {
                    index = (index + 1) % list.length;
                    block.innerText = list[index];
                    gsap.fromTo(block, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 });
                }
            });
        }, 3200);
    }

    // --- SCROLL ACTION LAYOUT REVEALS ---
    initSystemTriggers() {
        setTimeout(() => {
            gsap.to('#loader-progress', {
                width: '100%', duration: 0.4, onComplete: () => {
                    gsap.to('#loading-screen', { opacity: 0, duration: 0.4, onComplete: () => document.getElementById('loading-screen').remove() });
                    
                    // Entrance Direction Matrix
                    gsap.from('.image-container', { x: Math.random() > 0.5 ? -120 : 120, opacity: 0, duration: 1, ease: 'power3.out' });
                    gsap.from('#hero h1, #hero p, #hero .flex', { y: 25, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power2.out' });
                }
            });
        }, 500);

        // General Component Fade Reveal Triggers
        document.querySelectorAll('.glass-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
                y: 30, opacity: 0, duration: 0.7, ease: 'power2.out'
            });
        });

        // Numeric Statistics Counters Increments
        document.querySelectorAll('.stat-number').forEach(node => {
            const value = parseInt(node.getAttribute('data-target'));
            gsap.to(node, {
                scrollTrigger: { trigger: node, start: 'top 92%' },
                innerText: value, duration: 1.8, snap: { innerText: 1 }, ease: 'power1.out'
            });
        });

        // Capability Progress Bars Width Expansion
        document.querySelectorAll('.skill-bar').forEach(bar => {
            const width = bar.getAttribute('data-level');
            gsap.to(bar, {
                scrollTrigger: { trigger: bar, start: 'top 92%' },
                width: `${width}%`, duration: 1.2, ease: 'power2.out'
            });
        });
    }
}



// Loader removal
window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.remove();
        }, 500);
    }
});

// Fallback
setTimeout(() => {
    const loader = document.getElementById("loading-screen");

    if (loader) {
        loader.remove();
    }
}, 5000);
window.addEventListener('DOMContentLoaded', () => { new PortfolioEngine(); });
