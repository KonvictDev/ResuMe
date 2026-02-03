/* -------------------------------------------------------------------------
   1. CORE CONFIGURATION & STATE
------------------------------------------------------------------------- */
const FIELD_DEFS = {
    header: { title: 'Personal Info', icon: 'fa-user', fields: ['name', 'title', 'email', 'phone', 'location', 'links'] },
    summary: { title: 'Summary', icon: 'fa-align-left', type: 'textarea' },
    experience: { title: 'Experience', icon: 'fa-briefcase', type: 'list', fields: ['company', 'role', 'dates', 'desc'] },
    projects: { title: 'Projects', icon: 'fa-rocket', type: 'list', fields: ['name', 'tools', 'result'] },
    skills: { title: 'Skills', icon: 'fa-microchip', fields: ['hard', 'soft'] },
    education: { title: 'Education', icon: 'fa-graduation-cap', type: 'list', fields: ['school', 'degree', 'year'] },
    certifications: { title: 'Certifications', icon: 'fa-certificate', type: 'textarea' },
    languages: { title: 'Languages', icon: 'fa-language', type: 'textarea' },
    interests: { title: 'Interests', icon: 'fa-heart', type: 'textarea' }
};

const DEFAULT_DATA = {
    template: "modern",
    themeColor: "#4f46e5",
    settings: { scale: 1, spacing: 1.4, font: "'Inter', sans-serif", paper: "a4" },
    sectionOrder: ['header', 'summary', 'experience', 'projects', 'skills', 'education', 'certifications', 'languages', 'interests'],
    visibility: { 
        header: true, summary: true, experience: true, projects: true, skills: true, education: true, certifications: true, languages: true, interests: true,
        fields: { header_name: true, header_title: true, header_email: true, header_phone: true, header_location: true, header_links: true, skills_hard: true, skills_soft: true }
    },
    header: { name: "Jonathan Doe", title: "Senior Software Engineer", email: "j.doe@example.com", phone: "(555) 123-4567", location: "New York, USA", links: "linkedin.com/in/jdoe | github.com/jdoe", photo: "" },
    summary: "Results-oriented <b>Senior Software Engineer</b> with 6+ years of experience in full-stack development. Proven track record of designing scalable architecture and optimizing performance for high-traffic applications.",
    experience: [
        { company: "TechFlow Solutions", role: "Senior Developer", dates: "2021 - Present", desc: "• Spearheaded the migration of legacy monolith to microservices, reducing deployment time by 40%.\n• Mentored a team of 4 junior developers.\n• Optimized SQL queries improving reporting speed by 300%." },
        { company: "WebCorp Inc", role: "Frontend Developer", dates: "2018 - 2021", desc: "• Developed responsive UI components using React and Tailwind.\n• Integrated RESTful APIs for real-time data visualization." }
    ],
    projects: [
        { name: "E-Commerce Platform", tools: "Node.js, React, Stripe", result: "Built a fully functional marketplace handling $50k monthly revenue with secure payment processing." }
    ],
    skills: { hard: "JavaScript (ES6+), TypeScript, React, Node.js, AWS, Docker, SQL", soft: "Agile Leadership, Problem Solving, Communication" },
    education: [{ school: "University of Technology", degree: "B.S. Computer Science", year: "2018" }],
    certifications: "AWS Certified Solutions Architect\nGoogle Cloud Professional",
    languages: "English (Native)\nSpanish (Fluent)",
    interests: "Open Source Contributing, Hiking, Chess"
};

const TEMPLATE_GROUPS = {
    "Professional": ["modern", "classic", "minimalist", "timeline", "compact", "technical", "academic"],
    "Creative & Visual": ["darkside", "banner", "creative", "corporate", "elegant"],
    "Modern & Clean": ["executive", "nordic", "berkeley", "polished"]
};

const ROLE_PRESETS = {
    "software-engineer": {
        title: "Senior Software Engineer",
        summary: "Results-oriented <b>Senior Software Engineer</b> with 6+ years of experience in full-stack development. Proven track record of designing scalable architecture and optimizing performance for high-traffic applications.",
        experience: [
            { company: "TechFlow Solutions", role: "Senior Developer", dates: "2021 - Present", desc: "• Spearheaded the migration of legacy monolith to microservices, reducing deployment time by 40%.\n• Mentored a team of 4 junior developers.\n• Optimized SQL queries improving reporting speed by 300%." },
            { company: "WebCorp Inc", role: "Frontend Developer", dates: "2018 - 2021", desc: "• Developed responsive UI components using React and Tailwind.\n• Integrated RESTful APIs for real-time data visualization." }
        ],
        skills: { hard: "JavaScript (ES6+), TypeScript, React, Node.js, AWS, Docker, SQL", soft: "Agile Leadership, Problem Solving, Communication" }
    },
    "product-manager": {
        title: "Product Manager",
        summary: "Strategic <b>Product Manager</b> with experience in B2B SaaS. Expert in translating business requirements into technical specifications and leading cross-functional teams to successful product launches.",
        experience: [
            { company: "InnovateX", role: "Product Manager", dates: "2020 - Present", desc: "• Led the launch of the flagship mobile app, acquiring 50k users in first 3 months.\n• Conducted market research to identify key feature gaps, increasing retention by 15%." },
            { company: "StartUp Inc", role: "Associate PM", dates: "2018 - 2020", desc: "• Managed the product backlog and sprint planning using Jira.\n• Collaborated with UX/UI designers to improve user onboarding flows." }
        ],
        skills: { hard: "Product Strategy, Roadmap Planning, Jira, Agile/Scrum, A/B Testing, SQL", soft: "Stakeholder Management, Empathy, Analytical Thinking" }
    },
    "marketing-specialist": {
        title: "Digital Marketing Specialist",
        summary: "Creative <b>Marketing Specialist</b> focused on ROI-driven campaigns. Skilled in SEO, content strategy, and social media management to drive brand awareness and lead generation.",
        experience: [
            { company: "BrandBoost", role: "Marketing Manager", dates: "2019 - Present", desc: "• Managed a $20k monthly ad budget across Google and Facebook, achieving a 300% ROAS.\n• Increased organic website traffic by 150% through targeted SEO strategies." },
            { company: "Creative Agency", role: "Content Writer", dates: "2017 - 2019", desc: "• Created engaging blog content and email newsletters with a 25% open rate." }
        ],
        skills: { hard: "SEO/SEM, Google Analytics, Content Marketing, Email Automation (Mailchimp), Social Media", soft: "Creativity, Data Analysis, Time Management" }
    },
    "student": {
        title: "Computer Science Student",
        summary: "Motivated <b>Computer Science Student</b> with a strong foundation in algorithms and web development. Eager to apply academic knowledge to real-world projects in an internship setting.",
        experience: [
            { company: "University Tech Club", role: "Web Lead", dates: "2023 - Present", desc: "• Organized coding workshops for 50+ students.\n• Maintained the club website using HTML/CSS and JavaScript." }
        ],
        skills: { hard: "Python, Java, HTML, CSS, Basic JavaScript, Git", soft: "Teamwork, Quick Learner, Adaptability" }
    },
    "nurse": {
        title: "Registered Nurse",
        summary: "Compassionate <b>Registered Nurse</b> with 5 years of experience in critical care. Dedicated to providing top-quality patient care and collaborating with healthcare teams to improve patient outcomes.",
        experience: [
            { company: "City General Hospital", role: "ICU Nurse", dates: "2019 - Present", desc: "• Managed care for critical patients, monitoring vital signs and administering medications.\n• Trained 3 new nursing staff members on unit protocols." }
        ],
        skills: { hard: "Patient Care, EMR (Epic), Vital Signs Monitoring, IV Administration, BLS/ACLS Certified", soft: "Empathy, Stress Management, Attention to Detail" }
    }
};

// --- SINGLE STATE INITIALIZATION ---
let resumeData = JSON.parse(localStorage.getItem('rc_single_resume_data')) || JSON.parse(JSON.stringify(DEFAULT_DATA));

// Data Integrity Checks
if(!resumeData.sectionOrder) resumeData.sectionOrder = DEFAULT_DATA.sectionOrder;
if(!resumeData.header.title) resumeData.header.title = ""; 
if(!resumeData.settings) resumeData.settings = DEFAULT_DATA.settings;
if(!resumeData.settings.font) resumeData.settings.font = "'Inter', sans-serif";
if(!resumeData.settings.paper) resumeData.settings.paper = "a4";
if(!resumeData.visibility.fields) resumeData.visibility.fields = {};

let historyStack = [];
let historyIndex = -1;
let isUndoRedoAction = false;
let activeSectionId = null;

/* -------------------------------------------------------------------------
   2. TEMPLATE RENDERERS
------------------------------------------------------------------------- */
const safe = (val) => {
    if(!val) return '';
    const strVal = String(val);
    return strVal.replace(/</g, "&lt;").replace(/>/g, "&gt;")
              .replace(/&lt;b&gt;/g, "<b>").replace(/&lt;\/b&gt;/g, "</b>")
              .replace(/&lt;i&gt;/g, "<i>").replace(/&lt;\/i&gt;/g, "</i>");
};

const linkify = (val, type) => {
    if (!val) return '';
    const safeVal = safe(val);
    const classes = "text-inherit cursor-pointer hover:underline decoration-1 decoration-slate-400/50 print:no-underline";
    if (type === 'email') return `<a href="mailto:${safeVal}" class="${classes}">${safeVal}</a>`;
    if (type === 'phone') return `<a href="tel:${safeVal.replace(/[^\d+]/g, '')}" class="${classes}">${safeVal}</a>`;
    if (type === 'url') {
        const urlRegex = /((https?:\/\/|www\.)[^\s]+|[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[^\s]*)?)/g;
        return safeVal.replace(urlRegex, (match) => {
            if (!match.includes('.') && !match.includes('http')) return match;
            let href = match; if (!href.startsWith('http')) href = 'https://' + href;
            return `<a href="${href}" target="_blank" class="${classes}">${match}</a>`;
        });
    }
    return safeVal;
};

const hasData = (arr) => arr && arr.length > 0;
const isVisible = (sec) => resumeData.visibility && resumeData.visibility[sec] !== false;
const isFieldVisible = (sec, field) => {
    if(!resumeData.visibility || !resumeData.visibility.fields) return true;
    const key = `${sec}_${field}`;
    return resumeData.visibility.fields[key] !== false;
};
const getSectionTitle = (id, d) => {
    if(id.startsWith('custom_')) {
        const customSec = d.customSections ? d.customSections.find(c => c.id === id) : null;
        return customSec ? customSec.title : 'Custom Section';
    }
    return id;
};
const getHeaderContactArray = (d) => {
    return ['email', 'phone', 'location'].filter(f => d.header[f] && isFieldVisible('header', f)).map(f => {
            const iconClass = "mr-1.5 opacity-70"; 
            if(f === 'email') return `<span class="inline-flex items-center"><i class="fa-solid fa-envelope ${iconClass} text-[0.9em]"></i>${linkify(d.header[f], 'email')}</span>`;
            if(f === 'phone') return `<span class="inline-flex items-center"><i class="fa-solid fa-phone ${iconClass} text-[0.9em]"></i>${linkify(d.header[f], 'phone')}</span>`;
            if(f === 'location') return `<span class="inline-flex items-center"><i class="fa-solid fa-location-dot ${iconClass} text-[0.9em]"></i>${safe(d.header[f])}</span>`;
            return safe(d.header[f]);
        });
};

const renderSection = (id, d, style = 'standard') => {
    if (!isVisible(id)) return '';
    let title = getSectionTitle(id, d).toUpperCase(); 

    if (style === 'berkeley') {
        let content = '';
        if (id === 'experience' && hasData(d.experience)) {
            content = d.experience.map(item => `
            <div class="mb-5 break-inside-avoid">
                <div class="flex justify-between items-baseline mb-1">
                    <h3 class="text-slate-900 font-bold text-lg">${safe(item.company)}</h3>
                    <span class="text-sm font-semibold text-slate-500">${safe(item.dates)}</span>
                </div>
                <div class="font-bold text-[var(--accent)] mb-2 uppercase tracking-wide text-sm">${safe(item.role)}</div>
                <div class="text-slate-700 whitespace-pre-line leading-relaxed">${safe(item.desc)}</div>
            </div>`).join('');
        } else if (id === 'projects' && hasData(d.projects)) {
            content = d.projects.map(item => `<div class="mb-4 break-inside-avoid"><div class="flex justify-between items-baseline"><strong class="text-lg">${safe(item.name)}</strong> <span class="text-sm text-slate-500 font-mono">${safe(item.tools)}</span></div><div class="mt-1 text-slate-700">${safe(item.result)}</div></div>`).join('');
        } else if (id === 'skills') {
            content = `${isFieldVisible('skills', 'hard') ? `<div class="mb-3"><div><span class="font-bold text-slate-700">Technical:</span> ${safe(d.skills.hard)}</div></div>` : ''}${isFieldVisible('skills', 'soft') ? `<div><div><span class="font-bold text-slate-700">Professional:</span> ${safe(d.skills.soft)}</div></div>` : ''}`;
        } else if (id === 'education' && hasData(d.education)) {
            content = d.education.map(e => `<div class="mb-3 break-inside-avoid flex justify-between"><div><strong>${safe(e.school)}</strong><div class="text-slate-600">${safe(e.degree)}</div></div><div class="font-bold text-slate-400">${safe(e.year)}</div></div>`).join('');
        } else if (d[id] !== undefined) {
            content = `<div class="whitespace-pre-line leading-relaxed text-slate-700">${safe(d[id])}</div>`;
        } else return '';
        return `<div class="mb-8 section-block" data-id="${id}"><div class="section-title uppercase tracking-widest text-[var(--accent)] mb-4 border-l-4 border-[var(--accent)] pl-3 font-bold text-sm">${title}</div>${content}</div>`;
    }

    if (['creative', 'corporate', 'minimalist', 'technical', 'nordic', 'polished', 'darkside', 'banner'].includes(style)) {
        let content = '';
        if (id === 'experience' && hasData(d.experience)) {
            content = d.experience.map(item => `<div class="mb-5 break-inside-avoid"><div class="flex justify-between items-baseline mb-1"><h3 class="text-slate-900 font-bold ${style==='darkside'?'text-white':''}">${safe(item.company)}</h3><span class="text-tiny font-mono text-slate-500 ${style==='darkside'?'text-slate-400':''}">${safe(item.dates)}</span></div><div class="font-bold text-[var(--accent)] mb-2 uppercase tracking-wide text-xs">${safe(item.role)}</div><div class="opacity-80 whitespace-pre-line text-sm leading-relaxed ${style==='darkside'?'text-slate-300':''}">${safe(item.desc)}</div></div>`).join('');
        } else if (id === 'projects' && hasData(d.projects)) {
            content = d.projects.map(item => `<div class="mb-4 break-inside-avoid"><div><strong class="${style==='darkside'?'text-white':''}">${safe(item.name)}</strong> <span class="text-tiny text-slate-400">| ${safe(item.tools)}</span></div><div class="opacity-80 text-sm ${style==='darkside'?'text-slate-300':''}">${safe(item.result)}</div></div>`).join('');
        } else if (id === 'skills') {
            content = `${isFieldVisible('skills', 'hard') ? `<div class="mb-2"><div class="section-title uppercase mb-1 text-xs font-bold text-slate-400">Technical</div><div class="text-sm ${style==='darkside'?'text-slate-300':''}">${safe(d.skills.hard)}</div></div>` : ''}${isFieldVisible('skills', 'soft') ? `<div><div class="section-title uppercase mb-1 text-xs font-bold text-slate-400">Professional</div><div class="text-sm ${style==='darkside'?'text-slate-300':''}">${safe(d.skills.soft)}</div></div>` : ''}`;
        } else if (id === 'education' && hasData(d.education)) {
            content = d.education.map(e => `<div class="mb-2 break-inside-avoid"><strong class="${style==='darkside'?'text-white':''}">${safe(e.school)}</strong><div class="opacity-70 text-sm ${style==='darkside'?'text-slate-300':''}">${safe(e.degree)}, ${safe(e.year)}</div></div>`).join('');
        } else if (d[id] !== undefined) {
            content = `<div class="whitespace-pre-line text-sm ${style==='darkside'?'text-slate-300':''}">${safe(d[id])}</div>`;
        } else return '';

        if(style === 'technical') return `<div class="mb-6 break-inside-avoid"><div class="font-mono text-tiny text-[var(--accent)] mb-3 border-b border-slate-200 pb-1">// ${title}</div>${content}</div>`;
        if(style === 'nordic') return `<div class="mb-8 break-inside-avoid"><div class="uppercase tracking-widest text-slate-900 font-bold mb-3 text-sm">${title}</div>${content}</div>`;
        if(style === 'corporate' || style === 'creative' || style === 'polished') return `<div class="mb-6 break-inside-avoid"><div class="section-title uppercase tracking-widest text-slate-400 mb-3 font-bold text-xs">${title}</div>${content}</div>`;
        if(style === 'darkside') return `<div class="mb-6 break-inside-avoid"><div class="section-title uppercase tracking-widest text-indigo-400 mb-3 font-bold text-xs">${title}</div>${content}</div>`;
        if(style === 'banner') return `<div class="mb-6 break-inside-avoid"><div class="section-title uppercase tracking-widest text-[var(--accent)] mb-3 font-bold text-xs">${title}</div>${content}</div>`;
        return `<div class="grid grid-cols-4 gap-6 mb-8 break-inside-avoid"><div class="col-span-1 text-right section-title uppercase tracking-widest text-[var(--accent)] pt-1 font-bold text-xs">${title}</div><div class="col-span-3">${content}</div></div>`;
    }

    if (style === 'compact') {
        if (id === 'experience' && hasData(d.experience)) return `<div class="mb-3 break-inside-avoid"><h3 class="uppercase border-b border-black mb-2 text-sm font-bold">${title}</h3>${d.experience.map(i => `<div class="mb-2"><div class="flex justify-between font-bold text-sm"><span>${safe(i.company)} - ${safe(i.role)}</span><span>${safe(i.dates)}</span></div><div class="mt-1 whitespace-pre-line text-xs">${safe(i.desc)}</div></div>`).join('')}</div>`;
        if (id === 'projects' && hasData(d.projects)) return `<div class="mb-3 break-inside-avoid"><h3 class="uppercase border-b border-black mb-2 text-sm font-bold">${title}</h3>${d.projects.map(i => `<div class="mb-2"><div class="font-bold text-sm">${safe(i.name)} <span class="font-normal text-slate-600">(${safe(i.tools)})</span></div><div class="text-xs">${safe(i.result)}</div></div>`).join('')}</div>`;
        if (id === 'skills') return `<div class="mb-3 break-inside-avoid"><h3 class="uppercase border-b border-black mb-1 text-sm font-bold">Skills</h3><div class="text-xs">${isFieldVisible('skills', 'hard') ? `<strong>Hard:</strong> ${safe(d.skills.hard)}` : ''} ${isFieldVisible('skills', 'hard') && isFieldVisible('skills', 'soft') ? '<span class="mx-2">|</span>' : ''} ${isFieldVisible('skills', 'soft') ? `<strong>Soft:</strong> ${safe(d.skills.soft)}</div>` : ''}</div>`;
        if (id === 'education' && hasData(d.education)) return `<div class="mb-3 break-inside-avoid"><h3 class="uppercase border-b border-black mb-1 text-sm font-bold">${title}</h3>${d.education.map(e => `<div class="flex justify-between text-xs"><span><strong>${safe(e.school)}</strong>, ${safe(e.degree)}</span><span>${safe(e.year)}</span></div>`).join('')}</div>`;
        if (d[id] !== undefined) return `<div class="mb-3 break-inside-avoid"><h3 class="uppercase border-b border-black mb-1 text-sm font-bold">${title}</h3><div class="whitespace-pre-line text-xs">${safe(d[id])}</div></div>`;
        return '';
    }
    
    // Standard Render (for modern, timeline, executive)
    if (id === 'experience' && hasData(d.experience)) {
        return `<div class="mb-6 section-block" data-id="experience">
            <div class="section-title uppercase tracking-[0.15em] text-slate-400 mb-3 border-b border-slate-100 pb-1 ${style==='academic'?'text-center text-black border-black':''} ${style==='executive'?'text-center border-b-2 border-slate-800 text-slate-800 font-bold':''}">Experience</div>
            ${d.experience.map(item => `
            <div class="mb-4 break-inside-avoid relative pl-4 ${style==='timeline' ? 'border-l-2 border-slate-200' : ''} ${style==='academic'?'pl-0':''}">
                ${style==='timeline' ? `<div class="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]"></div>` : ''}
                <div class="flex justify-between items-baseline">
                    <h3 class="text-slate-900 ${style==='academic'?'font-serif':''} font-bold">${safe(item.company)}</h3>
                    <span class="font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs ${style==='academic'?'bg-white text-black italic':''}">${safe(item.dates)}</span>
                </div>
                <div class="font-bold text-[var(--accent)] mb-1 text-sm ${style==='academic'?'text-black italic':''}">${safe(item.role)}</div>
                <div class="whitespace-pre-line opacity-90 text-sm leading-relaxed">${safe(item.desc)}</div>
            </div>`).join('')}
        </div>`;
    }
    if (id === 'projects' && hasData(d.projects)) {
        return `<div class="mb-6 section-block" data-id="projects">
            <div class="section-title uppercase tracking-[0.15em] text-slate-400 mb-3 border-b border-slate-100 pb-1 ${style==='academic'?'text-center text-black border-black':''} ${style==='executive'?'text-center border-b-2 border-slate-800 text-slate-800 font-bold':''}">Projects</div>
            ${d.projects.map(item => `<div class="mb-3 break-inside-avoid"><div class="flex justify-between items-baseline"><h3 class="font-bold">${safe(item.name)}</h3><span class="text-tiny font-mono text-slate-500">${safe(item.tools)}</span></div><div class="opacity-90 text-sm">${safe(item.result)}</div></div>`).join('')}
        </div>`;
    }
    if (id === 'education' && hasData(d.education)) {
        return `<div class="mb-4 section-block" data-id="education">
            <div class="section-title uppercase tracking-[0.15em] text-slate-400 mb-2 border-b border-slate-100 pb-1 ${style==='academic'?'text-center text-black border-black':''} ${style==='executive'?'text-center border-b-2 border-slate-800 text-slate-800 font-bold':''}">Education</div>
            ${d.education.map(e => `<div class="mb-2 break-inside-avoid"><h3 class="text-slate-900 font-bold ${style==='academic'?'font-serif':''}">${safe(e.school)}</h3><div class="text-sm">${safe(e.degree)}</div><div class="text-slate-400 font-bold text-xs">${safe(e.year)}</div></div>`).join('')}
        </div>`;
    }
    if (id === 'skills') {
        return `<div class="mb-4 section-block" data-id="skills">
            <div class="section-title uppercase tracking-[0.15em] text-slate-400 mb-2 border-b border-slate-100 pb-1 ${style==='academic'?'text-center text-black border-black':''} ${style==='executive'?'text-center border-b-2 border-slate-800 text-slate-800 font-bold':''}">Skills</div>
            ${isFieldVisible('skills', 'hard') ? `<div class="mb-2"><span class="section-title uppercase text-xs font-bold text-slate-500">Technical</span><br/><span class="text-sm">${safe(d.skills.hard)}</span></div>` : ''}
            ${isFieldVisible('skills', 'soft') ? `<div><span class="section-title uppercase text-xs font-bold text-slate-500">Professional</span><br/><span class="text-sm">${safe(d.skills.soft)}</span></div>` : ''}
        </div>`;
    }
    if (id === 'summary' && d.summary) {
        return `<div class="mb-6 section-block" data-id="summary">
            <div class="section-title uppercase tracking-[0.15em] text-slate-400 mb-2 ${style==='academic'?'text-center text-black border-black border-b pb-1':''} ${style==='executive'?'text-center border-b-2 border-slate-800 text-slate-800 font-bold':''}">Summary</div>
            <p class="text-justify text-sm leading-relaxed">${safe(d.summary)}</p>
        </div>`;
    }
    if (d[id] !== undefined) return `<div class="section-block mb-4 break-inside-avoid" data-id="${id}"><strong class="text-slate-900 block mb-1 capitalize ${style==='academic'?'text-center border-b border-black pb-1 mb-2 uppercase':''} ${style==='executive'?'text-center border-b-2 border-slate-800 text-slate-800 font-bold uppercase':''}">${title}</strong><div class="text-sm">${safe(d[id])}</div></div>`;
    return '';
};

const TEMPLATES = {
    modern: (d) => {
        const order = d.sectionOrder;
        const mainColKeys = order.filter(k => ['summary', 'experience', 'projects'].includes(k) || k.startsWith('custom_'));
        const mainCol = mainColKeys.map(k => renderSection(k, d)).join('');
        const sideCol = order.filter(k => ['education', 'skills'].includes(k)).map(k => renderSection(k, d)).join('');
        const bottomCol = order.filter(k => ['certifications', 'languages', 'interests'].includes(k)).map(k => renderSection(k, d)).join('');
        const contactInfo = getHeaderContactArray(d);
        return `<div class="p-[15mm] h-full text-slate-700 flex flex-col">
            ${isVisible('header') ? `<div class="text-center mb-8 pb-6 border-b border-slate-200 section-block" data-id="header">
                ${isFieldVisible('header', 'name') ? `<h1 class="text-slate-900 uppercase tracking-tight mb-1 leading-none">${safe(d.header.name)}</h1>` : ''}
                ${isFieldVisible('header', 'title') ? `<div class="text-[var(--accent)] font-bold mb-2 uppercase tracking-widest text-tiny">${safe(d.header.title)}</div>` : ''}
                <div class="text-slate-500 font-medium flex justify-center gap-4 flex-wrap items-center mt-2">${contactInfo.map(t => `<span>${t}</span>`).join('<span class="w-1 h-1 rounded-full bg-slate-300"></span>')}</div>
                ${d.header.links && isFieldVisible('header', 'links') ? `<div class="font-bold text-slate-400 mt-2 flex flex-wrap items-center justify-center gap-1.5"><i class="fa-solid fa-link opacity-70"></i>${linkify(d.header.links, 'url')}</div>` : ''}
            </div>` : ''}
            <div class="flex-1">${mainCol}<div class="grid grid-cols-2 gap-8 mt-2"><div>${sideCol}</div><div></div></div></div><div class="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4 mt-auto text-tiny text-slate-500">${bottomCol}</div></div>`;
    },
    darkside: (d) => {
        const order = d.sectionOrder;
        const leftKeys = ['skills', 'education', 'certifications', 'languages', 'interests'];
        const rightKeys = ['summary', 'experience', 'projects'];
        const contactInfo = getHeaderContactArray(d);
        
        return `<div class="flex h-full text-slate-800">
            <div class="w-[75mm] bg-slate-900 text-white p-8 flex flex-col shrink-0">
                ${d.header.photo ? `<img src="${d.header.photo}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-slate-700">` : ''}
                ${isVisible('header') ? `<div class="text-center mb-10">
                    ${isFieldVisible('header', 'name') ? `<h1 class="text-2xl font-bold uppercase tracking-wider mb-2 leading-tight">${safe(d.header.name)}</h1>` : ''}
                    ${isFieldVisible('header', 'title') ? `<div class="text-indigo-400 font-medium text-sm tracking-wide uppercase">${safe(d.header.title)}</div>` : ''}
                </div>` : ''}
                
                <div class="space-y-8 text-sm opacity-90">
                    <div class="space-y-3 text-xs mb-8 border-b border-slate-700 pb-8">
                         ${contactInfo.map(c => `<div class="flex items-center gap-3">${c}</div>`).join('')}
                         ${d.header.links && isFieldVisible('header', 'links') ? `<div class="flex flex-wrap items-center gap-2 pt-2 text-indigo-400"><i class="fa-solid fa-link text-[0.8em]"></i>${linkify(d.header.links, 'url')}</div>` : ''}
                    </div>
                    
                    ${order.filter(k => leftKeys.includes(k) || k.startsWith('custom_')).map(k => {
                        if(!isVisible(k)) return '';
                        // Filter out right-side content if user moved it here (basic safety)
                        if(rightKeys.includes(k)) return ''; 
                        return renderSection(k, d, 'darkside');
                    }).join('')}
                </div>
            </div>
            <div class="flex-1 p-8 bg-white">
                 ${order.filter(k => rightKeys.includes(k) || (!leftKeys.includes(k) && !k.startsWith('header'))).map(k => renderSection(k, d)).join('')}
            </div>
        </div>`;
    },
    banner: (d) => {
        const contactInfo = getHeaderContactArray(d);
        return `<div class="p-[15mm] h-full text-slate-700">
            ${isVisible('header') ? `<div class="bg-[var(--accent)] text-white -mx-[15mm] -mt-[15mm] mb-10 p-[15mm] pb-12">
                ${isFieldVisible('header', 'name') ? `<h1 class="text-4xl font-bold mb-2 tracking-tight">${safe(d.header.name)}</h1>` : ''}
                ${isFieldVisible('header', 'title') ? `<div class="text-lg opacity-90 font-medium mb-6 uppercase tracking-wide">${safe(d.header.title)}</div>` : ''}
                <div class="flex flex-wrap gap-6 text-sm font-medium opacity-90">
                    ${contactInfo.join(' <span class="opacity-50">|</span> ')}
                </div>
                ${d.header.links && isFieldVisible('header', 'links') ? `<div class="text-sm font-bold mt-3 pt-3 border-t border-white/20 inline-flex flex-wrap gap-4 items-center"><i class="fa-solid fa-link"></i>${linkify(d.header.links, 'url')}</div>` : ''}
            </div>` : ''}
            <div class="grid grid-cols-3 gap-8">
                <div class="col-span-2 space-y-2">
                    ${d.sectionOrder.filter(k => ['summary', 'experience', 'projects'].includes(k)).map(k => renderSection(k, d, 'banner')).join('')}
                </div>
                <div class="space-y-6">
                    ${d.sectionOrder.filter(k => ['education', 'skills', 'certifications', 'languages', 'interests'].includes(k) || k.startsWith('custom_')).map(k => renderSection(k, d, 'banner')).join('')}
                </div>
            </div>
        </div>`;
    },
    classic: (d) => {
        const contactInfo = getHeaderContactArray(d);
        return `<div class="p-[15mm] h-full text-[#222]">
            ${isVisible('header') ? `<div class="text-center border-b-2 border-slate-800 pb-6 mb-8 section-block">
                ${isFieldVisible('header', 'name') ? `<h1 class="font-bold uppercase tracking-widest mb-2">${safe(d.header.name)}</h1>` : ''}
                ${isFieldVisible('header', 'title') ? `<div class="text-tiny uppercase tracking-widest text-slate-600 mb-2">${safe(d.header.title)}</div>` : ''}
                <div class="text-tiny uppercase tracking-widest text-slate-600 flex justify-center gap-4 flex-wrap">${contactInfo.join(' &nbsp;&bull;&nbsp; ')}</div>
                ${d.header.links && isFieldVisible('header', 'links') ? `<div class="italic mt-2 text-[var(--accent)] font-inter flex flex-wrap items-center justify-center gap-1.5"><i class="fa-solid fa-link opacity-70"></i>${linkify(d.header.links, 'url')}</div>` : ''}
            </div>` : ''}
            ${d.sectionOrder.filter(k => k !== 'header').map(k => { if(k==='experience') return renderSection(k,d,'academic'); return renderSection(k, d); }).join('')}</div>`
    },
    elegant: (d) => {
        const contactInfo = getHeaderContactArray(d);
        return `<div class="p-[15mm] h-full text-slate-600">${isVisible('header') ? `<div class="text-center mb-10 section-block">
            ${d.header.photo ? `<img src="${d.header.photo}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-slate-100 shadow-md">` : ''}
            ${isFieldVisible('header', 'name') ? `<h1 class="font-light uppercase tracking-[0.2em] text-slate-800 mb-2">${safe(d.header.name)}</h1>` : ''}
            ${isFieldVisible('header', 'title') ? `<div class="font-bold text-[var(--accent)] uppercase tracking-widest mb-4">${safe(d.header.title)}</div>` : ''}
            <div class="h-px bg-[var(--accent)] w-16 mx-auto mb-5"></div>
            <div class="font-bold text-slate-400 uppercase tracking-widest flex justify-center gap-6">${contactInfo.join(' ')}</div>
            ${d.header.links && isFieldVisible('header', 'links') ? `<div class="text-xs uppercase tracking-widest text-slate-400 mt-4 flex flex-wrap items-center justify-center gap-1.5"><i class="fa-solid fa-link opacity-70"></i>${linkify(d.header.links, 'url')}</div>` : ''}
        </div>` : ''}${d.sectionOrder.filter(k => k !== 'header').map(k => { if(!isVisible(k)) return ''; if(k==='experience' && hasData(d.experience)) { return `<div class="mb-8"><div class="flex items-center gap-4 mb-6"><div class="h-px bg-slate-200 flex-1"></div><span class="font-bold uppercase tracking-widest text-slate-800">Experience</span><div class="h-px bg-slate-200 flex-1"></div></div>${d.experience.map(i => `<div class="grid grid-cols-12 gap-4 mb-6 break-inside-avoid"><div class="col-span-3 text-right"><div><strong>${safe(i.company)}</strong></div><div class="text-tiny text-slate-400 font-bold uppercase mt-1">${safe(i.dates)}</div></div><div class="col-span-9 border-l border-slate-200 pl-4 relative"><div class="w-2 h-2 rounded-full bg-slate-200 absolute -left-[5px] top-1.5"></div><div class="font-bold text-[var(--accent)] uppercase mb-2">${safe(i.role)}</div><p>${safe(i.desc)}</p></div></div>`).join('')}</div>`; } return renderSection(k, d); }).join('')}</div>`
    },
    minimalist: (d) => {
        const contactInfo = getHeaderContactArray(d);
        return `<div class="p-[15mm] h-full text-slate-800">${isVisible('header') ? `<div class="grid grid-cols-4 gap-6 mb-12 border-b-4 border-black pb-6">
            <div class="col-span-2">
                ${isFieldVisible('header', 'name') ? `<h1 class="font-oswald uppercase leading-none tracking-tight">${safe(d.header.name)}</h1>` : ''}
                ${isFieldVisible('header', 'title') ? `<div class="text-lg mt-1 font-medium text-[var(--accent)]">${safe(d.header.title)}</div>` : ''}
            </div>
            <div class="col-span-2 text-right font-bold opacity-60 flex flex-col justify-end">
                ${contactInfo.map(t => `<div class="flex justify-end">${t}</div>`).join('')}
                ${d.header.links && isFieldVisible('header', 'links') ? `<div class="text-[var(--accent)] mt-1 flex flex-wrap justify-end items-center gap-1.5"><i class="fa-solid fa-link text-[0.8em]"></i>${linkify(d.header.links, 'url')}</div>` : ''}
            </div>
        </div>` : ''}${d.sectionOrder.filter(k => k !== 'header').map(k => renderSection(k, d, 'minimalist')).join('')}</div>`
    },
    timeline: (d) => {
         const contactInfo = getHeaderContactArray(d);
         return `<div class="p-[15mm] h-full text-slate-700">${isVisible('header') ? `<div class="flex justify-between items-end border-b border-slate-200 pb-6 mb-8">
            <div>
                ${isFieldVisible('header', 'name') ? `<h1 class="text-slate-900 mb-1">${safe(d.header.name)}</h1>` : ''}
                ${isFieldVisible('header', 'title') ? `<div class="text-[var(--accent)] font-bold uppercase tracking-wide">${safe(d.header.title)}</div>` : ''}
            </div>
            <div class="text-right font-medium text-slate-500">
                ${contactInfo.map(t => `<div class="mb-0.5 flex justify-end">${t}</div>`).join('')}
                ${d.header.links && isFieldVisible('header', 'links') ? `<div class="text-[var(--accent)] mt-1 flex flex-wrap justify-end items-center gap-1.5"><i class="fa-solid fa-link text-[0.8em]"></i>${linkify(d.header.links, 'url')}</div>` : ''}
            </div>
        </div>` : ''}<div class="grid grid-cols-3 gap-8"><div class="col-span-2">${d.sectionOrder.filter(k => ['summary','experience','projects'].includes(k) || k.startsWith('custom_')).map(k => renderSection(k, d, 'timeline')).join('')}</div><div class="bg-slate-50 p-4 rounded-lg h-fit">${d.sectionOrder.filter(k => ['education','skills','certifications','languages','interests'].includes(k)).map(k => renderSection(k, d)).join('')}</div></div></div>`
    },
    compact: (d) => {
         const contactInfo = getHeaderContactArray(d);
         return `<div class="p-[12mm] h-full font-roboto-mono text-slate-900 leading-normal">${isVisible('header') ? `<div class="flex justify-between items-center border-b-2 border-black pb-2 mb-4">
            <div class="flex items-center gap-4">
                ${isFieldVisible('header', 'name') ? `<h1 class="uppercase">${safe(d.header.name)}</h1>` : ''}
                ${isFieldVisible('header', 'title') ? `<span class="bg-black text-white px-2 py-0.5 text-tiny">${safe(d.header.title)}</span>` : ''}
            </div>
            <div class="text-tiny text-right">${contactInfo.join(' | ')}${d.header.links && isFieldVisible('header', 'links') ? `<div class="break-all"><i class="fa-solid fa-link mr-1"></i>${linkify(d.header.links, 'url')}</div>` : ''}</div>
        </div>` : ''}<div class="grid grid-cols-2 gap-x-8 gap-y-0">${d.sectionOrder.filter(k => k !== 'header').map(k => renderSection(k, d, 'compact')).join('')}</div></div>`
    },
    creative: (d) => {
         const order = d.sectionOrder;
         const leftOrder = order.filter(k => ['skills','education','certifications','languages','interests'].includes(k));
         const rightOrder = order.filter(k => ['summary','experience','projects'].includes(k) || k.startsWith('custom_'));
         const contactInfo = getHeaderContactArray(d);
         return `<div class="flex text-slate-700" style="min-height: var(--a4-height)">
            <div class="w-[70mm] bg-[var(--accent)] text-white p-6 flex flex-col">
                ${d.header.photo ? `<img src="${d.header.photo}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20">` : ''}
                ${isFieldVisible('header', 'name') ? `<h1 class="font-bold leading-tight mb-2 text-center text-white">${safe(d.header.name)}</h1>` : ''}
                ${isFieldVisible('header', 'title') ? `<div class="font-medium uppercase tracking-widest text-center opacity-80 mb-6">${safe(d.header.title)}</div>` : ''}
                <div class="text-tiny space-y-2 mb-8 opacity-90 border-t border-white/20 pt-4">
                    ${contactInfo.map(t => `<div class="flex items-center">${t}</div>`).join('')}
                    ${d.header.links && isFieldVisible('header', 'links') ? `<div class="flex flex-wrap items-center mt-2 pt-2 border-t border-white/10 break-all"><i class="fa-solid fa-link mr-1.5 opacity-70"></i> ${linkify(d.header.links, 'url')}</div>` : ''}
                </div>
                <div class="space-y-6 flex-1">${leftOrder.map(k => { 
                    if(!isVisible(k)) return ''; 
                    let title = getSectionTitle(k, d).toUpperCase(); 
                    if(k==='skills') return `<div><h3 class="font-bold uppercase mb-2 border-b border-white/20 pb-1 text-white">Skills</h3><div class="opacity-90">${isFieldVisible('skills', 'hard') ? safe(d.skills.hard) : ''} ${(isFieldVisible('skills', 'hard') && isFieldVisible('skills', 'soft')) ? '<br/><br/>' : ''} ${isFieldVisible('skills', 'soft') ? safe(d.skills.soft) : ''}</div></div>`; 
                    return `<div><h3 class="font-bold uppercase mb-2 border-b border-white/20 pb-1 text-white">${title}</h3><div class="opacity-90">${d[k] && d[k].length ? (Array.isArray(d[k])?d[k].map(i=>i.school||'').join(''):safe(d[k])) : ''}</div></div>`; 
                }).join('')}</div>
            </div>
            <div class="flex-1 p-8 bg-white">${rightOrder.map(k => renderSection(k, d, 'creative')).join('')}</div>
         </div>`
    },
    corporate: (d) => {
        const contactInfo = getHeaderContactArray(d);
        return `<div class="p-[15mm] h-full text-slate-800">
        ${isVisible('header') ? `<div class="flex items-center gap-6 mb-8 pb-8 border-b border-slate-200">
            ${d.header.photo ? `<img src="${d.header.photo}" class="w-24 h-24 object-cover border border-slate-200 p-1">` : ''}
            <div class="flex-1">
                ${isFieldVisible('header', 'name') ? `<h1 class="text-[var(--accent)] uppercase tracking-tight mb-1">${safe(d.header.name)}</h1>` : ''}
                ${isFieldVisible('header', 'title') ? `<div class="font-light tracking-widest uppercase mb-3">${safe(d.header.title)}</div>` : ''}
                <div class="font-bold text-slate-400 flex gap-4 flex-wrap">${contactInfo.join(' | ')}</div>
                ${d.header.links && isFieldVisible('header', 'links') ? `<div class="text-tiny text-[var(--accent)] mt-2 font-bold flex flex-wrap items-center gap-1.5"><i class="fa-solid fa-link opacity-70"></i>${linkify(d.header.links, 'url')}</div>` : ''}
            </div>
        </div>` : ''}
        <div class="grid grid-cols-3 gap-8">
             <div class="col-span-2">${d.sectionOrder.filter(k => ['summary','experience','projects'].includes(k) || k.startsWith('custom_')).map(k => renderSection(k, d, 'corporate')).join('')}</div>
             <div class="bg-slate-50 p-6 h-fit border-t-4 border-[var(--accent)]">
                ${d.sectionOrder.filter(k => ['skills','education','certifications'].includes(k)).map(k => { 
                    if(!isVisible(k)) return ''; 
                    let title = getSectionTitle(k, d).toUpperCase(); 
                    if(k==='skills') return `<div class="mb-6"><h3 class="font-bold text-slate-400 mb-2 uppercase text-tiny">Skills</h3><div>${isFieldVisible('skills', 'hard') ? safe(d.skills.hard) : ''} ${(isFieldVisible('skills', 'hard') && isFieldVisible('skills', 'soft')) ? '<br/>' : ''} ${isFieldVisible('skills', 'soft') ? safe(d.skills.soft) : ''}</div></div>`; 
                    if(k==='education') return `<div class="mb-6"><h3 class="font-bold text-slate-400 mb-2 uppercase text-tiny">Education</h3>${d.education.map(e=>`<div class="mb-2 font-bold">${e.school}</div><div>${e.degree}</div>`).join('')}</div>`; 
                    return `<div class="mb-6"><h3 class="font-bold text-slate-400 mb-2 uppercase text-tiny">${title}</h3><div>${safe(d[k])}</div></div>`; 
                }).join('')}
             </div>
        </div></div>`
    },
    technical: (d) => {
         const contactInfo = ['email', 'phone'].filter(f => d.header[f] && isFieldVisible('header', f))
            .map(f => linkify(d.header[f], f)); 
         return `<div class="p-[15mm] h-full text-slate-300 bg-[#1e1e1e]">
        ${isVisible('header') ? `<div class="mb-8 border-b border-gray-700 pb-6">
            ${isFieldVisible('header', 'name') ? `<h1 class="font-mono text-green-400 mb-2">&lt;${safe(d.header.name)} /&gt;</h1>` : ''}
            ${isFieldVisible('header', 'title') ? `<div class="font-mono text-gray-400 mb-2">class ${safe(d.header.title).replace(/\s/g,'_')} extends Developer {</div>` : ''}
            <div class="text-tiny font-mono text-gray-500 ml-4">// ${contactInfo.join('  // ')}</div>
            ${d.header.links && isFieldVisible('header', 'links') ? `<div class="text-tiny font-mono text-gray-500 ml-4 flex flex-wrap break-all gap-2">// ${linkify(d.header.links, 'url')}</div>` : ''}
            <div class="font-mono text-gray-400 mt-2">}</div>
        </div>` : ''}
        <div class="grid grid-cols-1 gap-4">${d.sectionOrder.filter(k => k !== 'header').map(k => renderSection(k, d, 'technical')).join('')}</div>
    </div>`
    },
    academic: (d) => {
        const contactInfo = getHeaderContactArray(d);
        return `<div class="p-[20mm] h-full font-serif text-black leading-relaxed">
        ${isVisible('header') ? `<div class="text-center mb-8">
            ${isFieldVisible('header', 'name') ? `<h1 class="mb-1 text-black">${safe(d.header.name)}</h1>` : ''}
            ${d.header.location && isFieldVisible('header', 'location') ? `<div class="mb-1 flex items-center justify-center gap-1.5">${safe(d.header.location)}</div>` : ''}
            <div class="flex items-center justify-center flex-wrap gap-4">${contactInfo.join(' • ')}</div>
             ${d.header.links && isFieldVisible('header', 'links') ? `<div class="text-xs italic mt-1 flex flex-wrap items-center justify-center gap-1.5"><i class="fa-solid fa-link mr-1 opacity-70"></i>${linkify(d.header.links, 'url')}</div>` : ''}
        </div>` : ''}
        ${d.sectionOrder.filter(k => k !== 'header').map(k => renderSection(k, d, 'academic')).join('')}
    </div>`
    },
    executive: (d) => {
        const contactInfo = getHeaderContactArray(d);
        return `<div class="p-[20mm] h-full text-slate-800 font-serif">
            ${isVisible('header') ? `<div class="text-center border-y-4 border-double border-slate-900 py-6 mb-10 section-block">
                ${isFieldVisible('header', 'name') ? `<h1 class="uppercase tracking-widest text-3xl mb-2 font-bold">${safe(d.header.name)}</h1>` : ''}
                ${isFieldVisible('header', 'title') ? `<div class="text-sm uppercase tracking-[0.2em] text-slate-600 font-bold mb-4">${safe(d.header.title)}</div>` : ''}
                <div class="flex justify-center flex-wrap gap-6 text-sm font-sans text-slate-600">${contactInfo.join('<span class="text-slate-300">|</span>')}</div>
                ${d.header.links && isFieldVisible('header', 'links') ? `<div class="mt-2 text-sm text-[var(--accent)] font-bold flex flex-wrap justify-center gap-2 items-center"><i class="fa-solid fa-link"></i> ${linkify(d.header.links, 'url')}</div>` : ''}
            </div>` : ''}
            ${d.sectionOrder.filter(k => k !== 'header').map(k => renderSection(k, d, 'executive')).join('')}
        </div>`;
    },
    nordic: (d) => {
        const order = d.sectionOrder;
        const mainColKeys = order.filter(k => ['summary', 'experience', 'projects'].includes(k) || k.startsWith('custom_'));
        const sideColKeys = order.filter(k => ['skills', 'education', 'certifications', 'languages', 'interests'].includes(k));
        const contactInfo = getHeaderContactArray(d);
        return `<div class="flex h-full text-slate-800 font-sans">
            <div class="w-[70mm] bg-slate-50 p-8 border-r border-slate-200 flex flex-col text-sm">
                ${isVisible('header') ? `<div class="mb-10">
                    ${isFieldVisible('header', 'name') ? `<h1 class="text-2xl font-light uppercase tracking-tight mb-2">${safe(d.header.name)}</h1>` : ''}
                    ${isFieldVisible('header', 'title') ? `<div class="text-[var(--accent)] font-bold uppercase tracking-wider text-xs mb-6">${safe(d.header.title)}</div>` : ''}
                    <div class="space-y-3 opacity-80 text-xs">${contactInfo.map(c => `<div class="flex items-center gap-2">${c}</div>`).join('')}</div>
                    ${d.header.links && isFieldVisible('header', 'links') ? `<div class="mt-4 pt-4 border-t border-slate-200 text-xs flex flex-wrap items-center gap-2 break-all"><i class="fa-solid fa-link opacity-50"></i>${linkify(d.header.links, 'url')}</div>` : ''}
                </div>` : ''}
                <div class="space-y-8">${sideColKeys.map(k => renderSection(k, d, 'nordic')).join('')}</div>
            </div>
            <div class="flex-1 p-10">
                ${mainColKeys.map(k => renderSection(k, d, 'nordic')).join('')}
            </div>
        </div>`;
    },
    berkeley: (d) => {
        const contactInfo = getHeaderContactArray(d);
        return `<div class="p-[15mm] h-full text-slate-800 font-sans">
            ${isVisible('header') ? `<div class="mb-10 pb-6 border-b border-slate-200">
                <div class="flex justify-between items-end">
                    <div>
                        ${isFieldVisible('header', 'name') ? `<h1 class="text-4xl font-extrabold tracking-tight text-slate-900 mb-1">${safe(d.header.name)}</h1>` : ''}
                        ${isFieldVisible('header', 'title') ? `<div class="text-lg font-medium text-[var(--accent)]">${safe(d.header.title)}</div>` : ''}
                    </div>
                    <div class="text-right text-sm space-y-1 text-slate-500 font-medium">
                        ${contactInfo.map(t => `<div>${t}</div>`).join('')}
                        ${d.header.links && isFieldVisible('header', 'links') ? `<div class="text-[var(--accent)] font-bold break-all">${linkify(d.header.links, 'url')}</div>` : ''}
                    </div>
                </div>
            </div>` : ''}
            <div class="space-y-2">
                ${d.sectionOrder.filter(k => k !== 'header').map(k => renderSection(k, d, 'berkeley')).join('')}
            </div>
        </div>`;
    },
    polished: (d) => {
        const order = d.sectionOrder;
        const contactInfo = getHeaderContactArray(d);
        
        return `<div class="p-[15mm] h-full text-slate-700">
             ${isVisible('header') ? `<div class="bg-slate-900 text-white -m-[15mm] mb-8 p-[15mm] pb-10">
                <div class="flex justify-between items-start">
                    <div>
                         ${isFieldVisible('header', 'name') ? `<h1 class="text-3xl font-bold uppercase tracking-widest mb-2">${safe(d.header.name)}</h1>` : ''}
                         ${isFieldVisible('header', 'title') ? `<div class="text-[var(--accent)] font-mono uppercase tracking-widest">${safe(d.header.title)}</div>` : ''}
                    </div>
                    <div class="text-right text-sm opacity-80 space-y-1 font-mono">
                        ${contactInfo.map(t => `<div>${t}</div>`).join('')}
                        ${d.header.links && isFieldVisible('header', 'links') ? `<div class="text-[var(--accent)] font-bold mt-2 break-all">${linkify(d.header.links, 'url')}</div>` : ''}
                    </div>
                </div>
             </div>` : ''}
             <div class="grid grid-cols-2 gap-10">
                <div class="space-y-4">${d.sectionOrder.filter(k => ['summary', 'experience', 'projects'].includes(k)).map(k => renderSection(k, d, 'polished')).join('')}</div>
                <div class="space-y-4">${d.sectionOrder.filter(k => ['education', 'skills', 'certifications', 'languages', 'interests'].includes(k) || k.startsWith('custom')).map(k => renderSection(k, d, 'polished')).join('')}</div>
             </div>
        </div>`;
    }
};

/* -------------------------------------------------------------------------
   3. UI RENDERERS (NEW: TEMPLATES, ONBOARDING & EDITOR)
------------------------------------------------------------------------- */

// RENDER TEMPLATE SELECTOR
function renderTemplateSelector() {
    const container = document.getElementById('template-grid');
    if(!container) return;
    container.innerHTML = '';
    
    // Scale factor to fit 210mm (~800px) into the card width (~250-300px)
    // 300 / 800 ~= 0.35, but we use a safer 0.25 to ensure margins
    const scale = 0.25; 

    Object.keys(TEMPLATE_GROUPS).forEach(groupName => {
        const groupTitle = document.createElement('h3');
        groupTitle.className = "text-lg font-bold text-slate-700 mt-8 mb-4 col-span-full border-b border-slate-200 pb-2";
        groupTitle.innerText = groupName;
        container.appendChild(groupTitle);

        TEMPLATE_GROUPS[groupName].forEach(tmpl => {
            const card = document.createElement('div');
            card.className = "bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-indigo-400 transition-all cursor-pointer group relative flex flex-col";
            card.onclick = () => selectTemplate(tmpl);
            
            // Render the HTML content for the template
            // We use DEFAULT_DATA so every template looks populated
            const previewHTML = TEMPLATES[tmpl](DEFAULT_DATA);
            
            card.innerHTML = `
                <div class="relative w-full pt-[141%] bg-slate-100 overflow-hidden border-b border-slate-100 group-hover:bg-indigo-50/30 transition-colors">
                    <div class="template-preview-wrapper absolute top-0 left-0 origin-top-left bg-white shadow-sm pointer-events-none select-none" 
                         style="width: 210mm; min-height: 297mm;">
                        ${previewHTML}
                    </div>
                    <div class="absolute inset-0 z-10"></div>
                </div>
                <div class="p-3 text-center bg-white z-20 relative">
                    <h4 class="font-bold text-slate-800 capitalize text-sm">${tmpl}</h4>
                </div>
            `;
            container.appendChild(card);
        });
    });
    
    // Trigger scale update immediately
    setTimeout(updateThumbnailScales, 0);
}

// UPDATE THUMBNAIL SCALES (Dynamic Resizing)
function updateThumbnailScales() {
    const wrappers = document.querySelectorAll('.template-preview-wrapper');
    const A4_WIDTH_PX = 793.7; // 210mm at 96 DPI
    
    wrappers.forEach(wrapper => {
        const parent = wrapper.parentElement;
        if(parent) {
            const containerWidth = parent.clientWidth;
            // Calculate scale: If container is 250px, scale = 250 / 794 = 0.31
            const scale = containerWidth / A4_WIDTH_PX;
            wrapper.style.transform = `scale(${scale})`;
        }
    });
}

// Add Resize Listener for responsiveness
window.addEventListener('resize', () => {
    // Debounce slightly for performance
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(updateThumbnailScales, 100);
});

// RENDER ONBOARDING FORM
function renderOnboarding() {
    const container = document.getElementById('onboarding-form');
    if(!container) return;
    container.innerHTML = '';

    resumeData.sectionOrder.forEach(secId => {
        let def = FIELD_DEFS[secId];
        if(!def && secId.startsWith('custom_')) { 
            const cs = resumeData.customSections ? resumeData.customSections.find(c => c.id === secId) : null; 
            def = { id: secId, title: cs ? cs.title : 'Custom', icon: 'fa-star', type: 'textarea', isCustom: true }; 
        }
        if(!def) return;
        def.id = secId;

        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 animate-[fadeIn_0.5s_ease-out]";
        
        let headerHTML = `
            <div class="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <i class="fa-solid ${def.icon} text-lg"></i>
                </div>
                <h2 class="text-xl font-bold text-slate-800">${def.title}</h2>
            </div>`;
            
        let contentHTML = '';

        if(def.type === 'list') {
            contentHTML = renderList(def, 'onboard-');
        } else if(def.type === 'textarea') {
            contentHTML = `
                <div class="relative group">
                    ${renderToolbar(true, `onboard-input-${secId}`)}
                    <textarea class="studio-input h-40 resize-y leading-relaxed text-sm p-4" 
                        id="onboard-input-${secId}" 
                        oninput="updateField('${secId}', null, this.value)">${resumeData[secId] || ''}</textarea>
                    <button onclick="fixBullets(this.previousElementSibling)" class="absolute bottom-4 right-4 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-200 hover:bg-white hover:text-indigo-600">Fix Bullets</button>
                </div>`;
        } else {
            const fieldsHTML = def.fields.map(f => {
                const rawVal = resumeData[secId] && resumeData[secId][f] !== undefined ? resumeData[secId][f] : '';
                const safeValue = String(rawVal).replace(/"/g, '&quot;');
                const inputId = `onboard-input-${secId}-${f}`;
                return `
                <div class="${(f==='desc'||f==='summary') ? 'col-span-2' : ''}">
                    <label class="input-label block mb-2">${f}</label>
                    ${secId === 'skills' ? renderToolbar(true, inputId) : ''}
                    <input type="text" id="${inputId}" class="studio-input p-3" value="${safeValue}" oninput="updateField('${secId}', '${f}', this.value)">
                </div>`;
            }).join('');
            
            contentHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">${fieldsHTML}</div>`;
            
            if(secId === 'header') {
                contentHTML += `
                <div class="mt-6 border-t border-slate-100 pt-6">
                    <label class="input-label mb-3 block">Profile Photo</label>
                    <div class="flex flex-col sm:flex-row items-center gap-6">
                        ${resumeData.header.photo ? `<img src="${resumeData.header.photo}" class="w-20 h-20 rounded-full object-cover border-4 border-slate-100">` : '<div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-300"><i class="fa-solid fa-user text-2xl"></i></div>'}
                        <div class="flex-1">
                            <input type="file" accept="image/*" onchange="handleImageUpload(this)" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100">
                            ${resumeData.header.photo ? `<button onclick="removePhoto()" class="mt-2 text-xs text-red-500 font-bold hover:underline">Remove Photo</button>` : ''}
                        </div>
                    </div>
                </div>`;
            }
        }
        
        card.innerHTML = headerHTML + contentHTML;
        container.appendChild(card);
    });
}

// Render Sidebar Editor
function renderEditor() {
    const container = document.getElementById('editor-accordion');
    container.innerHTML = '';
    resumeData.sectionOrder.forEach(secId => {
        let def = FIELD_DEFS[secId];
        if(!def && secId.startsWith('custom_')) { 
            const cs = resumeData.customSections ? resumeData.customSections.find(c => c.id === secId) : null; 
            def = { id: secId, title: cs ? cs.title : 'Custom', icon: 'fa-star', type: 'textarea', isCustom: true }; 
        }
        if(!def) return;
        def.id = secId;
        const isHidden = resumeData.visibility && resumeData.visibility[secId] === false;
        const isOpen = activeSectionId === secId;
        const card = document.createElement('div');
        card.className = `editor-card section-card ${isOpen ? 'active' : ''}`;
        card.id = `card-${secId}`;
        card.setAttribute('draggable', 'false');
        card.innerHTML = `
            <div class="card-header" onclick="toggleCard('${secId}')">
                <div class="flex items-center gap-3 flex-1">
                    <i class="fa-solid fa-grip-vertical text-slate-300 cursor-grab active:cursor-grabbing section-handle hover:text-indigo-500 hidden md:block" 
                       onmousedown="this.closest('.section-card').setAttribute('draggable', 'true')"
                       onmouseup="this.closest('.section-card').setAttribute('draggable', 'false')"></i>
                    <i class="fa-solid ${def.icon} text-slate-400 w-4 text-center text-xs"></i>
                    <span class="text-xs font-bold text-slate-700 uppercase tracking-wide">${def.title}</span>
                </div>
                <div class="flex items-center gap-2">
                    ${def.isCustom ? `<button onclick="event.stopPropagation(); deleteCustomSection('${secId}')" class="text-slate-300 hover:text-red-500 mr-2"><i class="fa-solid fa-trash"></i></button>` : ''}
                    <button onclick="event.stopPropagation(); toggleVisibility(event, '${secId}')" class="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-100 text-slate-400 transition-colors">
                        <i class="fa-solid ${isHidden ? 'fa-eye-slash text-slate-300' : 'fa-eye text-indigo-500'}"></i>
                    </button>
                    <i class="fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform arrow ${isOpen ? 'rotate-180' : ''}"></i>
                </div>
            </div>
            <div class="card-content ${isOpen ? '' : 'hidden'} p-4 border-t border-slate-100 bg-white"></div>
        `;
        const contentDiv = card.querySelector('.card-content');
        if(def.type === 'list') contentDiv.innerHTML = renderList(def, 'sidebar-');
        else if(def.type === 'textarea') contentDiv.innerHTML = `<div class="relative group">${renderToolbar(true, `sidebar-input-${secId}`)}<textarea class="studio-input h-32 resize-y leading-relaxed" id="sidebar-input-${secId}" oninput="updateField('${secId}', null, this.value)">${resumeData[secId] || ''}</textarea><button onclick="fixBullets(this.previousElementSibling)" class="absolute bottom-2 right-2 text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-200 hover:bg-white hover:text-indigo-600 transition-colors opacity-0 group-hover:opacity-100">Fix Bullets</button></div>`;
        else {
            const renderField = (f) => {
                const isVis = isFieldVisible(secId, f);
                const showEye = (secId === 'header' || secId === 'skills');
                const rawVal = resumeData[secId] && resumeData[secId][f] !== undefined ? resumeData[secId][f] : '';
                const safeValue = String(rawVal).replace(/"/g, '&quot;');
                const inputId = `sidebar-input-${secId}-${f}`;

                return `<div>
                    <div class="flex justify-between items-center mb-1">
                        <label class="input-label block">${f}</label>
                        ${showEye ? `<button onclick="toggleFieldVisibility('${secId}', '${f}')" class="text-[10px] ${isVis ? 'text-indigo-500' : 'text-slate-300'} hover:text-indigo-700" title="Toggle Visibility"><i class="fa-solid ${isVis ? 'fa-eye' : 'fa-eye-slash'}"></i></button>` : ''}
                    </div>
                    ${secId === 'skills' ? renderToolbar(true, inputId) : ''}
                    <input type="text" id="${inputId}" class="studio-input ${!isVis && showEye ? 'opacity-50 text-slate-400' : ''}" value="${safeValue}" oninput="updateField('${secId}', '${f}', this.value)">
                </div>`;
            }
            contentDiv.innerHTML = `<div class="grid grid-cols-1 gap-3">${def.fields.map(f => renderField(f)).join('')}</div>`;
            if(secId === 'header') {
                contentDiv.innerHTML += `<div class="mt-3 border-t border-slate-100 pt-3"><label class="input-label mb-2 block">Photo</label><div class="flex items-center gap-4">${resumeData.header.photo ? `<img src="${resumeData.header.photo}" class="photo-preview">` : ''}<input type="file" accept="image/*" onchange="handleImageUpload(this)" class="text-xs text-slate-500"></div></div>`;
            }
        }
        container.appendChild(card);
    });
    setupDragAndDrop();
}

// Shared List Renderer
function renderList(sec, prefix = '') { 
    const list = resumeData[sec.id] || []; 
    const listHTML = list.map((item, i) => {
        const fieldsHTML = sec.fields.map(f => {
            const rawVal = item[f] !== undefined && item[f] !== null ? item[f] : '';
            const safeVal = String(rawVal).replace(/"/g, '&quot;');
            const isTextarea = (f === 'desc' || f === 'result');
            const inputId = `${prefix}list-${sec.id}-${i}-${f}`;
            
            if (isTextarea) {
                return `<div>
                    <label class="input-label mb-1 block">${f}</label>
                    <div class="relative group">
                        ${renderToolbar(true, inputId)}
                        <textarea id="${inputId}" class="studio-input h-20 leading-relaxed" 
                            oninput="updateListItem('${sec.id}', ${i}, '${f}', this.value)">${safeVal}</textarea>
                        <button onclick="fixBullets(this.previousElementSibling)" class="absolute bottom-2 right-2 text-[9px] bg-white border px-1 rounded shadow-sm opacity-50 hover:opacity-100">Fix</button>
                    </div>
                </div>`;
            } else {
                return `<div>
                    <label class="input-label mb-1 block">${f}</label>
                    <input type="text" class="studio-input" value="${safeVal}" 
                        oninput="updateListItem('${sec.id}', ${i}, '${f}', this.value)">
                </div>`;
            }
        }).join('');
        return `
        <div class="bg-slate-50 border border-slate-200 rounded p-3 relative group transition-colors hover:border-indigo-200 draggable-item mb-3" draggable="true" data-index="${i}" data-section="${sec.id}">
            <div class="flex justify-between items-center mb-2 handle cursor-grab active:cursor-grabbing p-1 -m-1 bg-slate-100/50 rounded-t border-b border-slate-100">
                <i class="fa-solid fa-grip-lines text-slate-300 text-xs group-hover:text-indigo-400 hidden md:block"></i>
                <div class="flex gap-2 items-center md:hidden">
                    <button onclick="moveItem('${sec.id}', ${i}, -1)" class="text-slate-400 hover:text-indigo-600 ${i===0?'opacity-30 pointer-events-none':''}"><i class="fa-solid fa-arrow-up"></i></button>
                    <button onclick="moveItem('${sec.id}', ${i}, 1)" class="text-slate-400 hover:text-indigo-600 ${i===list.length-1?'opacity-30 pointer-events-none':''}"><i class="fa-solid fa-arrow-down"></i></button>
                </div>
                <button onclick="deleteItem('${sec.id}', ${i})" class="text-[10px] text-slate-400 hover:text-red-500 px-1 transition-colors"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="space-y-3">${fieldsHTML}</div>
        </div>`;
    }).join('');
    return `<div class="space-y-0" id="${prefix}list-${sec.id}">${listHTML}</div>
            <button onclick="addListItem('${sec.id}')" class="w-full mt-3 py-2 border border-dashed border-slate-300 text-slate-500 text-xs font-bold rounded hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">+ Add Item</button>`; 
}

function renderToolbar(includeMagic = false, targetId = '') { 
    return `<div class="rt-toolbar">
        <button class="rt-btn" onclick="insertTag(this, 'b')">B</button>
        <button class="rt-btn italic" onclick="insertTag(this, 'i')">I</button>
        ${includeMagic ? `<button class="rt-btn magic-btn" onclick="openWriterHelper('${targetId}')"><i class="fa-solid fa-wand-magic-sparkles mr-1"></i> Assist</button>` : ''}
    </div>` 
}
function insertTag(btn, tag) { const textarea = btn.parentElement.nextElementSibling; const start = textarea.selectionStart; const end = textarea.selectionEnd; const text = textarea.value; const newText = `${text.substring(0, start)}<${tag}>${text.substring(start, end)}</${tag}>${text.substring(end)}`; textarea.value = newText; textarea.dispatchEvent(new Event('input')); }

/* -------------------------------------------------------------------------
   4. NAVIGATION & VIEW SWITCHING
------------------------------------------------------------------------- */
function selectTemplate(tmpl) {
    resumeData.template = tmpl;
    saveData();
    switchToOnboarding();
}

function switchToOnboarding() {
    document.getElementById('view-templates').classList.add('hidden');
    document.getElementById('view-editor').classList.add('hidden');
    document.getElementById('view-editor').classList.remove('flex');
    
    document.getElementById('view-onboarding').classList.remove('hidden');
    window.scrollTo(0, 0);
    renderOnboarding();
}

function switchToEditor() {
    document.getElementById('view-templates').classList.add('hidden');
    document.getElementById('view-onboarding').classList.add('hidden');
    
    const editor = document.getElementById('view-editor');
    editor.classList.remove('hidden');
    editor.classList.add('flex');
    
    renderEditor();
    renderPreview();
    setTimeout(autoScaleCanvas, 100);
}

function goBackToTemplates() {
    document.getElementById('view-onboarding').classList.add('hidden');
    document.getElementById('view-editor').classList.add('hidden');
    document.getElementById('view-editor').classList.remove('flex');
    
    document.getElementById('view-templates').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function resetData() {
    if(confirm("Are you sure? This will delete all your data and reset the app to its default state.")) {
        localStorage.removeItem('rc_single_resume_data');
        location.reload();
    }
}

function applyRoleData() {
    const roleKey = document.getElementById('roleSelector').value;
    if (!roleKey) return;
    
    if(confirm("This will overwrite your current Summary, Experience, and Skills with sample data. Continue?")) {
        const preset = ROLE_PRESETS[roleKey];
        if (preset) {
            resumeData.header.title = preset.title;
            resumeData.summary = preset.summary;
            resumeData.experience = JSON.parse(JSON.stringify(preset.experience)); // Deep copy
            resumeData.skills = JSON.parse(JSON.stringify(preset.skills));
            
            saveData();
            renderOnboarding(); // Re-render inputs
            // Feedback
            alert("Sample data applied!");
        }
    }
}

// TOGGLE SIDEBAR (Hide Editor / Full Screen Preview)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const showBtn = document.getElementById('show-sidebar-btn');
    
    if (sidebar.classList.contains('hidden')) {
        // Show Sidebar
        sidebar.classList.remove('hidden');
        sidebar.classList.add('flex');
        showBtn.classList.add('hidden');
    } else {
        // Hide Sidebar
        sidebar.classList.add('hidden');
        sidebar.classList.remove('flex');
        showBtn.classList.remove('hidden');
    }
    
    // Recalculate scale after transition
    setTimeout(autoScaleCanvas, 50);
}

/* -------------------------------------------------------------------------
   5. FEATURE IMPLEMENTATIONS
------------------------------------------------------------------------- */
const WRITING_AIDS = {
    verbs: ["Spearheaded", "Orchestrated", "Engineered", "Optimized", "Revamped", "Accelerated", "Automated", "Pioneered", "Executed", "Leveraged"],
    templates: ["Reduced [metric] by [X]% through implementation of [technology].", "Led a team of [X] developers to deliver [project] ahead of schedule.", "Designed and deployed [system] resulting in [benefit].", "Improved user engagement by [X]% via [strategy]."],
    skills: { 
        "Frontend": ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Redux", "Next.js", "Webpack"],
        "Backend": ["Node.js", "Express", "Python", "Django", "Java", "Spring Boot", "Go", "PostgreSQL", "MongoDB", "Redis"],
        "DevOps": ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Terraform", "Jenkins", "Linux", "Git"],
        "Data Science": ["Python", "R", "Pandas", "NumPy", "TensorFlow", "PyTorch", "SQL", "Tableau", "Power BI"],
        "Mobile": ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"],
        "Design": ["Figma", "Adobe XD", "Photoshop", "Illustrator", "User Research", "Prototyping"],
        "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Time Management", "Agile", "Scrum", "Mentoring", "Collaboration"]
    }
};

let activeHelperTarget = null;
function openWriterHelper(targetId) { activeHelperTarget = targetId; document.getElementById('writerModal').classList.remove('hidden'); switchHelperTab('verbs'); }
function toggleWriterModal() { document.getElementById('writerModal').classList.add('hidden'); }
function switchHelperTab(tab) {
    ['verbs', 'templates', 'skills'].forEach(t => { const el = document.getElementById('tab-' + t); if(el) el.className = (t === tab) ? "px-3 py-1 text-xs font-bold rounded bg-white text-purple-600 shadow-sm flex-1" : "px-3 py-1 text-xs font-bold rounded hover:bg-white text-slate-500 flex-1"; });
    const contentDiv = document.getElementById('helper-content'); contentDiv.innerHTML = '';
    if (tab === 'skills') {
        const categories = Object.keys(WRITING_AIDS.skills);
        const selectContainer = document.createElement('div'); selectContainer.className = "mb-3";
        selectContainer.innerHTML = `<label class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Category</label><select id="skillCategorySelect" class="w-full p-2 border border-slate-200 rounded text-xs bg-slate-50 outline-none focus:border-purple-500">${categories.map(c => `<option value="${c}">${c}</option>`).join('')}</select>`;
        contentDiv.appendChild(selectContainer);
        const skillsContainer = document.createElement('div'); skillsContainer.id = "skillsList"; contentDiv.appendChild(skillsContainer);
        const renderSkillButtons = (cat) => { skillsContainer.innerHTML = ''; WRITING_AIDS.skills[cat].forEach(item => { const btn = document.createElement('button'); btn.className = "inline-block px-3 py-1.5 mr-2 mb-2 bg-slate-50 hover:bg-purple-50 hover:text-purple-700 border border-slate-200 rounded-full text-xs transition-colors"; btn.innerText = item; btn.onclick = () => insertHelperText(item); skillsContainer.appendChild(btn); }); };
        renderSkillButtons(categories[0]);
        document.getElementById('skillCategorySelect').addEventListener('change', (e) => { renderSkillButtons(e.target.value); });
    } else {
        WRITING_AIDS[tab].forEach(item => { const btn = document.createElement('button'); btn.className = "block w-full text-left p-3 mb-2 bg-slate-50 hover:bg-purple-50 hover:text-purple-700 border border-slate-200 rounded text-xs transition-colors"; btn.innerText = item; btn.onclick = () => insertHelperText(item); contentDiv.appendChild(btn); });
    }
}
function insertHelperText(text) {
    if(!activeHelperTarget) return;
    const inputEl = document.getElementById(activeHelperTarget);
    if(inputEl) {
        const start = inputEl.selectionStart; const current = inputEl.value;
        const toInsert = (start > 0 && current[start-1] !== ' ' && current[start-1] !== ',') ? ' ' + text : text;
        if (inputEl.tagName === 'INPUT') { const val = inputEl.value.trim(); inputEl.value = val ? (val + ", " + text) : text; } else { inputEl.value = current.substring(0, start) + toInsert + current.substring(inputEl.selectionEnd); }
        inputEl.dispatchEvent(new Event('input'));
        if(!document.getElementById('tab-skills').classList.contains('text-purple-600')) toggleWriterModal();
    }
}

function addToHistory() {
    const currentState = JSON.stringify(resumeData);
    if (historyStack.length > 0 && historyStack[historyIndex] === currentState) return;
    if (historyIndex < historyStack.length - 1) historyStack = historyStack.slice(0, historyIndex + 1);
    historyStack.push(currentState);
    if(historyStack.length > 20) historyStack.shift(); else historyIndex++;
}
function undo() { if(historyIndex > 0) { historyIndex--; isUndoRedoAction = true; resumeData = JSON.parse(historyStack[historyIndex]); saveData(true); renderEditor(); isUndoRedoAction = false; } }
function redo() { if(historyIndex < historyStack.length - 1) { historyIndex++; isUndoRedoAction = true; resumeData = JSON.parse(historyStack[historyIndex]); saveData(true); renderEditor(); isUndoRedoAction = false; } }
document.addEventListener('keydown', (e) => { if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); undo(); } if ((e.ctrlKey || e.metaKey) && e.key === 'y') { e.preventDefault(); redo(); } });

function copyAsText() {
    const d = resumeData;
    let t = `NAME: ${d.header.name}\n${d.header.title}\n${[d.header.email, d.header.phone, d.header.location].filter(Boolean).join(' | ')}\n\n`;
    if(d.summary) t += `SUMMARY\n${d.summary.replace(/<[^>]*>/g, '')}\n\n`;
    if(hasData(d.experience)) { t += `EXPERIENCE\n`; d.experience.forEach(e => { t += `${e.company} - ${e.role} (${e.dates})\n${e.desc.replace(/<[^>]*>/g, '')}\n\n`; }); }
    navigator.clipboard.writeText(t).then(() => { alert("Copied as plain text!"); });
}

function toggleCard(secId) { activeSectionId = (activeSectionId === secId) ? null : secId; renderEditor(); }
function toggleVisibility(e, secId) { e.stopPropagation(); resumeData.visibility[secId] = !resumeData.visibility[secId]; saveData(); renderEditor(); }
function toggleFieldVisibility(secId, field) { const key = `${secId}_${field}`; resumeData.visibility.fields[key] = (resumeData.visibility.fields[key] === false); saveData(); renderEditor(); }
function updateField(sec, key, val) { if(key) resumeData[sec][key] = val; else resumeData[sec] = val; saveData(); }
function updateListItem(sec, idx, key, val) { resumeData[sec][idx][key] = val; saveData(); }
function addListItem(sec) { const def = FIELD_DEFS[sec] || { fields: ['title', 'description'] }; const newObj = {}; def.fields.forEach(f => newObj[f] = ""); if(!resumeData[sec]) resumeData[sec] = []; resumeData[sec].push(newObj); activeSectionId = sec; saveData(); renderEditor(); renderOnboarding(); }
function deleteItem(sec, idx) { if(confirm("Remove this item?")) { resumeData[sec].splice(idx, 1); saveData(); renderEditor(); renderOnboarding(); } }
function addCustomSection() { const name = prompt("Name your new section:"); if(name) { const id = 'custom_' + Date.now(); if(!resumeData.customSections) resumeData.customSections = []; resumeData.customSections.push({ id: id, title: name }); resumeData[id] = ""; resumeData.sectionOrder.push(id); resumeData.visibility[id] = true; activeSectionId = id; saveData(); renderEditor(); renderOnboarding(); } }
function deleteCustomSection(id) { if(confirm("Delete this entire section?")) { resumeData.sectionOrder = resumeData.sectionOrder.filter(s => s !== id); if(resumeData.customSections) resumeData.customSections = resumeData.customSections.filter(c => c.id !== id); delete resumeData[id]; saveData(); renderEditor(); renderOnboarding(); } }
function fixBullets(textarea) { if(!textarea) return; textarea.value = textarea.value.replace(/^[\*\-]\s?/gm, "• "); textarea.dispatchEvent(new Event('input')); }
function moveItem(sec, idx, direction) { const list = resumeData[sec]; const newIdx = idx + direction; if(newIdx < 0 || newIdx >= list.length) return; const temp = list[idx]; list[idx] = list[newIdx]; list[newIdx] = temp; saveData(); renderEditor(); renderOnboarding(); }
function autoScaleCanvas() {
    const wrapper = document.getElementById('canvas-wrapper'); const canvas = document.getElementById('resume-canvas'); if(!wrapper || !canvas) return;
    const availableWidth = document.querySelector('.preview-area').clientWidth - 40; const a4WidthPx = 794; 
    if(availableWidth < a4WidthPx) { const scale = availableWidth / a4WidthPx; wrapper.style.transform = `scale(${scale})`; } else { wrapper.style.transform = 'scale(1)'; }
}
window.addEventListener('resize', autoScaleCanvas);

function renderPreview() {
    const tmpl = resumeData.template || 'modern'; const canvas = document.getElementById('resume-canvas'); const settings = resumeData.settings || DEFAULT_DATA.settings;
    const markers = canvas.querySelectorAll('.page-break-marker'); markers.forEach(m => m.remove());
    canvas.style.setProperty('--scale-factor', settings.scale); canvas.style.setProperty('--spacing-factor', settings.spacing); canvas.style.setProperty('--main-font', settings.font); 
    let pageHeightMm = 297; 
    if(settings.paper === 'letter') { document.documentElement.style.setProperty('--a4-width', '216mm'); document.documentElement.style.setProperty('--a4-height', '279mm'); document.getElementById('paperLabel').innerText = "Letter"; pageHeightMm = 279; } else { document.documentElement.style.setProperty('--a4-width', '210mm'); document.documentElement.style.setProperty('--a4-height', '297mm'); document.getElementById('paperLabel').innerText = "A4"; pageHeightMm = 297; }
    canvas.innerHTML = (TEMPLATES[tmpl] || TEMPLATES.modern)(resumeData);
    document.documentElement.style.setProperty('--accent', resumeData.themeColor || '#4f46e5');
    setTimeout(() => { drawPageBreaks(canvas, pageHeightMm); autoScaleCanvas(); }, 100);
}

function drawPageBreaks(canvas, pageHeightMm) {
    const mmToPx = 3.7795275591; const pageHeightPx = pageHeightMm * mmToPx; const contentHeight = canvas.scrollHeight;
    const old = canvas.querySelectorAll('.page-break-marker'); old.forEach(o => o.remove());
    if (contentHeight > pageHeightPx) { const totalPages = Math.ceil(contentHeight / pageHeightPx); for(let i = 1; i < totalPages; i++) { const marker = document.createElement('div'); marker.className = 'page-break-marker'; marker.style.top = `${(pageHeightPx * i) - 5}px`; canvas.appendChild(marker); } }
}

function downloadPDF() { const originalTitle = document.title; const filename = `${resumeData.header.name || 'Resume'}_ResuMe`; document.title = filename; window.print(); setTimeout(() => { document.title = originalTitle; }, 500); }
function updateStyle(prop, val) { if(!resumeData.settings) resumeData.settings = {}; resumeData.settings[prop] = val; if(prop === 'scale') document.getElementById('lbl-scale').innerText = val; if(prop === 'spacing') document.getElementById('lbl-space').innerText = val; saveData(); }
function changeTemplate(val) { resumeData.template = val; saveData(); }
function setTheme(val) { resumeData.themeColor = val; document.getElementById('colorPreview').style.background = val; document.getElementById('colorLabel').innerText = val; saveData(); }
function togglePaperSize() { const next = resumeData.settings.paper === 'a4' ? 'letter' : 'a4'; updateStyle('paper', next); }
function handleImageUpload(input) { if (input.files && input.files[0]) { const reader = new FileReader(); reader.onload = function(e) { const img = new Image(); img.onload = function() { const canvas = document.getElementById('imgCanvas'); const ctx = canvas.getContext('2d'); const maxWidth = 300; const scaleSize = maxWidth / img.width; canvas.width = maxWidth; canvas.height = img.height * scaleSize; ctx.drawImage(img, 0, 0, canvas.width, canvas.height); resumeData.header.photo = canvas.toDataURL('image/jpeg', 0.8); saveData(); renderEditor(); renderOnboarding(); }; img.src = e.target.result; }; reader.readAsDataURL(input.files[0]); } }
function removePhoto() { resumeData.header.photo = ""; saveData(); renderEditor(); renderOnboarding(); }
function setupDragAndDrop() { 
    const container = document.getElementById('editor-accordion'); let draggedSection = null; const sections = document.querySelectorAll('.section-card'); sections.forEach(sec => { sec.addEventListener('dragstart', (e) => { draggedSection = sec; sec.classList.add('dragging'); }); sec.addEventListener('dragend', () => { sec.classList.remove('dragging'); draggedSection = null; resumeData.sectionOrder = Array.from(container.children).map(c => c.id.replace('card-', '')); saveData(); }); sec.addEventListener('dragover', (e) => { e.preventDefault(); if (!draggedSection || draggedSection === sec) return; const box = sec.getBoundingClientRect(); const threshold = box.top + box.height / 2; if (e.clientY < threshold) container.insertBefore(draggedSection, sec); else container.insertBefore(draggedSection, sec.nextSibling); }); });
}
function saveData(skipHistory = false) { if(!skipHistory && !isUndoRedoAction) addToHistory(); localStorage.setItem('rc_single_resume_data', JSON.stringify(resumeData)); renderPreview(); }
function toggleATSModal() { document.getElementById('atsModal').classList.toggle('hidden'); }
function analyzeATS() { const jd = document.getElementById('jobDescription').value.toLowerCase(); if(!jd.trim()) { alert("Please paste a job description first."); return; } const stopWords = ["the","and","or","in","to","a","of","for","with","on","at","from","by","is","an","be","as","can","that","are","will","we","you"]; const words = jd.replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 3 && !stopWords.includes(w)); const freq = {}; words.forEach(w => freq[w] = (freq[w]||0)+1); const topKeywords = Object.keys(freq).sort((a,b) => freq[b] - freq[a]).slice(0, 15); const resumeText = JSON.stringify(resumeData).toLowerCase(); const matched = []; const missing = []; topKeywords.forEach(kw => { if(resumeText.includes(kw)) matched.push(kw); else missing.push(kw); }); const score = Math.round((matched.length / topKeywords.length) * 100); document.getElementById('atsResults').classList.remove('hidden'); const circle = document.getElementById('scoreCircle'); const circumference = 2 * Math.PI * 28; circle.style.strokeDashoffset = circumference - (score / 100) * circumference; let color = score >= 80 ? '#10b981' : (score >= 50 ? '#eab308' : '#ef4444'); circle.setAttribute('stroke', color); const scoreEl = document.getElementById('atsScore'); scoreEl.innerText = score + '%'; scoreEl.style.color = color; document.getElementById('matchedKeywords').innerHTML = matched.length ? matched.map(w => `<span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold border border-emerald-200">${w}</span>`).join('') : '<span class="text-xs text-slate-400">No matches found</span>'; document.getElementById('missingKeywords').innerHTML = missing.length ? missing.map(w => `<span class="bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-bold border border-red-100">${w}</span>`).join('') : '<span class="text-xs text-emerald-600">Great job!</span>'; }

// --- INITIALIZATION ---
historyStack = [JSON.stringify(resumeData)];
historyIndex = 0;
// Load settings
const s = resumeData.settings || DEFAULT_DATA.settings; 
const scaleIn = document.querySelector('input[oninput*="scale"]'); if(scaleIn) scaleIn.value = s.scale;
const scaleLbl = document.getElementById('lbl-scale'); if(scaleLbl) scaleLbl.innerText = s.scale;
const spaceIn = document.querySelector('input[oninput*="spacing"]'); if(spaceIn) spaceIn.value = s.spacing;
const spaceLbl = document.getElementById('lbl-space'); if(spaceLbl) spaceLbl.innerText = s.spacing;
const thmIn = document.getElementById('themeColor'); if(thmIn) thmIn.value = resumeData.themeColor || '#4f46e5'; 
const thmPrev = document.getElementById('colorPreview'); if(thmPrev) thmPrev.style.background = resumeData.themeColor || '#4f46e5'; 
const tmplSel = document.getElementById('templateSelect'); if(tmplSel) tmplSel.value = resumeData.template || 'modern'; 
const fontSel = document.getElementById('fontSelect'); if(fontSel && s.font) fontSel.value = s.font;

renderTemplateSelector();