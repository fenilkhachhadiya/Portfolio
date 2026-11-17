/**
 * FENIL KACHHADIYA - PORTFOLIO INTERACTION ENGINE
 * Vanilla JavaScript implementation for smooth interactivity, project filtering,
 * live Figma prototype modal embeds, dark theme toggle, and resume preview.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. Project Case Studies Data ---
  const caseStudies = {
    // Project 1: User's Official Figma Landing Page Project
    landing: {
      title: "Landing Page UI Design",
      category: "Landing Page UI Design",
      categoryKey: "landing",
      tools: "Figma, Auto Layout, Typography, Spacing",
      role: "Solo UI/UX Designer (Personal Project)",
      timeline: "Personal Project | Figma",
      image: "assets/images/project-landing.svg",
      figmaUrl: "https://www.figma.com/proto/uNOfTvyoccqm5wHvAGYy3f/landing-page?node-id=1-2&p=f&t=X0XXQmtgpjF9CSWm-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FuNOfTvyoccqm5wHvAGYy3f%2Flanding-page%3Fnode-id%3D1-2%26p%3Df%26t%3DX0XXQmtgpjF9CSWm-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1",
      overview: "Designed a modern and visually appealing landing page using Figma. Created page layouts with clear visual hierarchy, typography, colors, and balanced spacing. Focused on creating a clean, user-friendly interface that communicates value clearly and guides visitors smoothly toward key actions.",
      challenge: "Building a landing page that captures user interest within the first few seconds while maintaining a clean, uncluttered layout. The focus was to establish a strong visual rhythm between hero banners, key highlights, and call-to-action sections without visual noise.",
      process: [
        "Sketched low-fidelity wireframes to explore visual hierarchy and content layout variations.",
        "Created scalable components using Figma Auto Layout to ensure consistent padding and alignment.",
        "Carefully selected typography pairs and balanced contrast to maximize readability and accessibility.",
        "Built interactive micro-interactions and linked frames for a smooth clickable Figma prototype."
      ],
      deliverables: "Interactive Figma prototype, desktop responsive layout, component variants, and clear typography system.",
      takeaways: "Deepened practical expertise in Figma Auto Layout constraints, visual hierarchy, and creating seamless responsive page structures."
    },

    // Project 2: Mobile App UI Design
    mobile: {
      title: "Mobile App UI Design",
      category: "Mobile App UI Design",
      categoryKey: "mobile",
      tools: "Figma, Wireframing, iOS Guidelines, Prototyping",
      role: "Solo UI/UX Designer (Personal Project)",
      timeline: "Personal Project | Figma",
      image: "assets/images/project-mobile.svg",
      figmaUrl: "https://www.figma.com/design/T3Cgvgt25qsW8bAcyCrzvD/Untitled?node-id=43-684&t=ewUaL9wL5eWmhAHd-1",
      overview: "Designed a user-friendly mobile application interface using Figma. Created wireframes and high-fidelity UI screens for mobile devices, focusing on intuitive navigation flows and comfortable one-handed mobile ergonomics.",
      challenge: "Designing a feature-rich mobile interface that keeps users engaged without overwhelming them on smaller screens, prioritizing key actions in the primary thumb zone.",
      process: [
        "Mapped user journey flows from initial onboarding to routine daily interaction.",
        "Created wireframes and tested one-handed navigation reachability.",
        "Applied typography, color theory, spacing, and visual hierarchy for a polished look.",
        "Built high-fidelity interactive screens and component variants in Figma."
      ],
      deliverables: "High-fidelity interactive mobile Figma prototype, bottom navigation bar system, and customizable card components.",
      takeaways: "Mastered mobile ergonomics, thumb-zone hierarchy, and responsive mobile viewport constraints."
    },

    // Project 3: Coffee Shop Landing Page UI Design (Real Figma Prototype Link)
    coffee: {
      title: "Coffee Shop Landing Page UI Design",
      category: "Landing Page UI Design",
      categoryKey: "landing",
      tools: "Figma, Auto Layout, Visual Hierarchy, Typography",
      role: "Solo UI/UX Designer (Personal Project)",
      timeline: "Personal Project | Figma",
      image: "assets/images/project-coffee.jpg",
      figmaUrl: "https://www.figma.com/proto/KBMRsjteFPyOnC48pT5x63/Untitled?node-id=1-5&t=wHg7FWxvB1Pru4AN-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FKBMRsjteFPyOnC48pT5x63%2FUntitled%3Fnode-id%3D1-5%26t%3DwHg7FWxvB1Pru4AN-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1",
      overview: "Designed an inviting, modern coffee shop landing page in Figma titled 'Savor the Perfect Brew!'. The interface highlights specialty artisan drinks (Espresso, Latte, Cold Brew), store operating hours, promotional offers, and clear call-to-action touchpoints.",
      challenge: "Creating an appetizing, warm aesthetic with coffee-inspired earth tones while maintaining strong visual hierarchy, accessible contrast ratios, and clean typography that guides visitors smoothly toward ordering.",
      process: [
        "Curated a warm coffee-inspired color scheme featuring rich espresso brown, warm latte beige, and golden amber accents.",
        "Engineered an impactful hero section with appetizing coffee visuals and prominent 'Order Now' & 'Learn More' buttons.",
        "Built a modular product spotlight carousel highlighting Espresso, Latte, and Cold Brew with clean circular badges.",
        "Designed promotional callout cards highlighting store opening hours and special customer discounts.",
        "Connected frames and micro-interactions for a live, clickable Figma prototype."
      ],
      deliverables: "High-fidelity interactive Figma prototype, responsive desktop layout, coffee drink component system, and typography hierarchy.",
      takeaways: "Mastered warm chromatic color palettes, hero section visual pacing, and designing high-conversion commercial landing pages."
    },

    // Project 3: Admin Dashboard UI Design (Real Figma Prototype Link)
    dashboard: {
      title: "Admin Dashboard UI Design",
      category: "Admin Dashboard UI Design",
      categoryKey: "dashboard",
      tools: "Figma, Information Architecture, Data Visualization",
      role: "Solo UI/UX Designer (Personal Project)",
      timeline: "Personal Project | Figma",
      image: "assets/images/project-dashboard.svg",
      figmaUrl: "https://www.figma.com/proto/a2n4TC7eEzYL2yCrigN9Gs/Untitled?node-id=1-6&t=vwqfBqX2PhHtZLD8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fa2n4TC7eEzYL2yCrigN9Gs%2FUntitled%3Fnode-id%3D1-6%26t%3DvwqfBqX2PhHtZLD8-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1",
      overview: "Designed a modern and user-friendly dashboard interface using Figma. Created a structured layout with sidebar navigation, summary KPI cards, interactive chart components, and clear tabular data presentation.",
      challenge: "Structuring dense data, charts, and activity feeds so administrators can make fast, accurate decisions without suffering from cognitive data overload.",
      process: [
        "Structured information architecture into 4 logical tiers: KPI metrics > Data visualization chart > Recent activity table > Quick actions.",
        "Created clean sidebar navigation with active/hover indicator states.",
        "Designed clear data tables with status badge pills (Completed, In Progress, Pending).",
        "Applied consistent typography scale, spacing rules, and contrast ratios."
      ],
      deliverables: "Complete desktop dashboard Figma UI kit, reusable component library, and interactive states.",
      takeaways: "Learned how to organize complex data matrices and build scalable UI design systems."
    },

    // Project 4: Graphic Design Projects
    graphic: {
      title: "Graphic Design & Brand Identity Projects",
      category: "Graphic Design Projects",
      categoryKey: "graphic",
      tools: "Adobe Photoshop, Adobe Illustrator, Canva, Color Theory",
      role: "Graphic Designer",
      timeline: "Design Exploration",
      image: "assets/images/project-graphic.svg",
      figmaUrl: null, // Ready to plug in when user shares link
      overview: "A creative visual identity and graphic design exploration demonstrating foundational graphic design principles: logo grid geometry, modular typographic hierarchy, color theory harmonies, and editorial poster balance.",
      challenge: "Creating a cohesive visual language that remains versatile across multiple touchpoints—from digital avatars to print posters and business cards.",
      process: [
        "Explored geometric monogram sketches using golden ratio proportions.",
        "Constructed vector assets with precision bezier curves in Adobe Illustrator.",
        "Formulated balanced color palettes pairing primary purple (#7445C5) with warm coral (#FF8A45).",
        "Designed editorial posters demonstrating Swiss Minimalist layout and typographic balance."
      ],
      deliverables: "Vector brand marks, color swatch specifications, stationery mockups, and creative poster designs.",
      takeaways: "Strengthened core understanding of vector geometry, chromatic balance, and typographic pacing."
    },

    // Project 5: EcoSphere E-Commerce Landing Page
    ecosphere: {
      title: "EcoSphere – Sustainable E-Commerce Store",
      category: "Landing Page UI Design",
      categoryKey: "landing",
      tools: "Figma, E-Commerce UI, Responsive Design",
      role: "Solo UI/UX Designer",
      timeline: "Personal Concept",
      image: "assets/images/project-ecomarket.svg",
      figmaUrl: null,
      overview: "A clean, sustainable e-commerce landing page crafted with generous whitespace, high product card clarity, and frictionless add-to-cart interaction flows.",
      challenge: "Balancing brand storytelling with high e-commerce conversion, avoiding cluttered grids and annoying popups.",
      process: [
        "Studied e-commerce drop-off points to optimize product cards.",
        "Designed high-contrast product cards with instant price visibility and quick-add actions.",
        "Built responsive grid layouts adapting seamlessly from mobile to desktop."
      ],
      deliverables: "Desktop & mobile responsive landing page design, card component system, and cart interaction flows.",
      takeaways: "Learned the direct correlation between intentional whitespace and product value perception."
    },

    // Project 6: FlowTask Mobile Productivity App
    flowtask: {
      title: "FlowTask – Productivity & Focus Mobile App",
      category: "Mobile App UI Design",
      categoryKey: "mobile",
      tools: "Figma, Mobile UX, Interactive Prototyping",
      role: "Solo UI/UX Designer",
      timeline: "Personal Concept",
      image: "assets/images/project-taskflow.svg",
      figmaUrl: null,
      overview: "A distraction-free task management mobile app with an integrated Pomodoro timer and Kanban task prioritization, exploring both immersion dark mode and clean light theme.",
      challenge: "Unifying time-tracking and task management workflows on a single screen without cognitive clutter.",
      process: [
        "Mapped user flows between active Pomodoro focus blocks and task review.",
        "Designed a central circular countdown timer with intuitive pause/resume actions.",
        "Developed priority tag pills with high visual scanning contrast."
      ],
      deliverables: "Interactive mobile prototype, dual dark/light themes, and animated transitions.",
      takeaways: "Learned how theme contrast modes affect user focus and productivity."
    }
  };

  // Robust Key Aliases so both semantic names and category names open the modals
  caseStudies.finpulse = caseStudies.landing;
  caseStudies.fittrack = caseStudies.mobile;
  caseStudies.coffeeLanding = caseStudies.coffee;
  caseStudies.nova = caseStudies.dashboard;
  caseStudies.aura = caseStudies.graphic;

  // --- 2. Theme Toggle (Light / Dark Mode) ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('fenil_portfolio_theme') || 'light';

  const setTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('fenil_portfolio_theme', 'dark');
      if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('fenil_portfolio_theme', 'light');
      if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  };

  // Robust Key Aliases so both semantic names and category names open the modals
  caseStudies.finpulse = caseStudies.landing;
  caseStudies.fittrack = caseStudies.mobile;
  caseStudies.coffeeLanding = caseStudies.coffee;
  caseStudies.nova = caseStudies.dashboard;
  caseStudies.aura = caseStudies.graphic;

  // Initialize theme
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // --- 3. Header & Sticky Navigation Scroll ---
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-drawer-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 4. Mobile Navigation Drawer ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link, .mobile-drawer-cta');

  const toggleMobileMenu = () => {
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) {
      mobileDrawer.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('modal-open');
    } else {
      mobileDrawer.classList.add('open');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('modal-open');
    }
  };

  // Robust Key Aliases so both semantic names and category names open the modals
  caseStudies.finpulse = caseStudies.landing;
  caseStudies.fittrack = caseStudies.mobile;
  caseStudies.coffeeLanding = caseStudies.coffee;
  caseStudies.nova = caseStudies.dashboard;
  caseStudies.aura = caseStudies.graphic;

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('modal-open');
    });
  });

  // --- 5. Project Category Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('is-hidden');
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = 'fadeInUp 0.35s ease forwards';
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // --- 6. Project Case Study Modal (With Live Figma Prototype Embed) ---
  const caseStudyModal = document.getElementById('caseStudyModal');
  const caseStudyBody = document.getElementById('caseStudyBody');
  const viewProjectBtns = document.querySelectorAll('[data-project-target]');
  const modalCloseBtns = document.querySelectorAll('.modal-close-trigger');

  const openProjectModal = (projectId) => {
    const data = caseStudies[projectId];
    if (!data) return;

    caseStudyBody.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <span class="modal-category-tag">${data.category}</span>
        ${data.figmaUrl ? `
          <a href="${data.figmaUrl}" target="_blank" rel="noopener noreferrer" class="btn-figma-link">
            <svg width="14" height="14" viewBox="0 0 24 24"><path d="M8 2h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4H8V2z" fill="#FF7262"/><path d="M4 6a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E"/><path d="M4 14a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#A259FF"/><circle cx="16" cy="14" r="4" fill="#1ABCFE"/><path d="M4 22a4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4z" fill="#0ACF83"/></svg>
            Open in Figma ↗
          </a>
        ` : ''}
      </div>

      <h2 class="modal-title">${data.title}</h2>

      ${data.figmaEmbedUrl ? `
        <!-- Live Interactive Figma Prototype Embed -->
        <div class="modal-figma-wrapper">
          <div class="modal-figma-header">
            <div class="modal-figma-title">
              <svg width="16" height="16" viewBox="0 0 24 24"><path d="M8 2h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4H8V2z" fill="#FF7262"/><path d="M4 6a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E"/><path d="M4 14a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#A259FF"/><circle cx="16" cy="14" r="4" fill="#1ABCFE"/><path d="M4 22a4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4z" fill="#0ACF83"/></svg>
              <span>Interactive Figma Prototype (Live Preview)</span>
            </div>
            <a href="${data.figmaUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700;">
              Fullscreen Figma ↗
            </a>
          </div>
          <iframe class="modal-figma-iframe" src="${data.figmaEmbedUrl}" allowfullscreen></iframe>
        </div>
      ` : `
        <div class="modal-image-preview">
          <img src="${data.image}" alt="${data.title} Preview" loading="lazy">
        </div>
      `}

      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <span class="modal-meta-label">My Role</span>
          <span class="modal-meta-val">${data.role}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Tools Used</span>
          <span class="modal-meta-val">${data.tools}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Project Scope</span>
          <span class="modal-meta-val">${data.timeline}</span>
        </div>
      </div>

      <h3 class="modal-section-title">Project Overview</h3>
      <p class="modal-text">${data.overview}</p>

      <h3 class="modal-section-title">The Design Problem & Goals</h3>
      <p class="modal-text">${data.challenge}</p>

      <h3 class="modal-section-title">Design Process & Decisions</h3>
      <ul class="modal-list">
        ${data.process.map(step => `<li>${step}</li>`).join('')}
      </ul>

      <h3 class="modal-section-title">Key Deliverables</h3>
      <p class="modal-text">${data.deliverables}</p>

      <h3 class="modal-section-title">What I Learned as a Fresher Designer</h3>
      <p class="modal-text">${data.takeaways}</p>

      <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        ${data.figmaUrl ? `
          <a href="${data.figmaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background-color: #1E1E1E; border: 1px solid #444;">
            <svg class="btn-icon" viewBox="0 0 24 24"><path d="M8 2h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4H8V2z" fill="#FF7262"/><path d="M4 6a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E"/><path d="M4 14a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#A259FF"/><circle cx="16" cy="14" r="4" fill="#1ABCFE"/><path d="M4 22a4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4z" fill="#0ACF83"/></svg>
            Launch Prototype in Figma
          </a>
        ` : ''}
        <a href="#contact" class="btn btn-secondary" onclick="closeAllModals()">
          Discuss This Project With Me
          <svg class="btn-icon btn-icon-right" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    `;

    caseStudyModal.classList.add('open');
    document.body.classList.add('modal-open');
    caseStudyModal.setAttribute('aria-hidden', 'false');
  };

  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-target');
      openProjectModal(projectId);
    });
  });

  // --- 7. Resume Modal Handling ---
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtns = document.querySelectorAll('.open-resume-trigger');
  const printResumeBtn = document.getElementById('printResumeBtn');

  const openResumeModal = () => {
    resumeModal.classList.add('open');
    document.body.classList.add('modal-open');
    resumeModal.setAttribute('aria-hidden', 'false');
  };

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // --- 8. Generic Modal Close Logic ---
  window.closeAllModals = () => {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
    document.body.classList.remove('modal-open');
  };

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', window.closeAllModals);
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeAllModals();
      if (mobileDrawer.classList.contains('open')) {
        toggleMobileMenu();
      }
    }
  });

  // --- 9. Copy Email to Clipboard & Toast System ---
  const copyEmailBtns = document.querySelectorAll('.copy-email-trigger');
  const toastNotice = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');
  let toastTimer = null;

  const showToast = (message) => {
    if (toastTimer) clearTimeout(toastTimer);
    toastText.textContent = message;
    toastNotice.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3200);
  };

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'kachhadiyafenil78@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('✓ Email copied to clipboard: ' + email);
        }).catch(() => {
          showToast('Fenil\'s Email: ' + email);
        });
      } else {
        showToast('Fenil\'s Email: ' + email);
      }
    });
  });

  // --- 10. Contact Form Interactive Feedback ---
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('projectType');
      const messageInput = document.getElementById('messageText');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please fill out all required fields so Fenil can respond.';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please enter a valid email address.';
        return;
      }

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="btn-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" stroke-dasharray="32" />
        </svg>
        Sending Message...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = `Thank you, ${nameInput.value.trim()}! Your message has been prepared. Fenil will get back to you shortly at ${emailInput.value.trim()}.`;

        const mailtoUri = `mailto:kachhadiyafenil78@gmail.com?subject=${encodeURIComponent(subjectInput.value + ' - Inquiry from ' + nameInput.value)}&body=${encodeURIComponent('From: ' + nameInput.value + ' (' + emailInput.value + ')\n\nMessage:\n' + messageInput.value)}`;
        
        showToast('✓ Message ready! Opening default mail client...');
        window.location.href = mailtoUri;

        contactForm.reset();
      }, 900);
    });
  }

  // --- 11. Interactive Playground Component Handlers ---
  // Habit Ring Counter
  let currentSteps = 6420;
  const maxSteps = 10000;
  const stepCountEl = document.getElementById('playgroundStepsCount');
  const stepRingCircle = document.getElementById('playgroundStepRing');
  const addStepBtn = document.getElementById('addStepsBtn');

  if (addStepBtn && stepCountEl && stepRingCircle) {
    addStepBtn.addEventListener('click', () => {
      currentSteps = Math.min(maxSteps, currentSteps + 800);
      stepCountEl.textContent = currentSteps.toLocaleString();
      const percent = currentSteps / maxSteps;
      const offset = 282 - (282 * percent);
      stepRingCircle.style.strokeDashoffset = offset;
      showToast(`+800 Steps logged! (${Math.round(percent * 100)}% of daily goal)`);
    });
  }

  // 3D Card Hover Perspective Physics
  const tiltCards = document.querySelectorAll('.interactive-tilt-card, .project-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // Swatch copy
  document.querySelectorAll('.token-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      const hex = swatch.getAttribute('data-hex');
      if (hex) {
        navigator.clipboard.writeText(hex);
        showToast(`Copied token ${hex} to clipboard!`);
      }
    });
  });

  // --- 12. Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
});
