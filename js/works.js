/* =============================================================
   GP Portfolio — Works Data
   File: js/works.js

   HOW TO ADD / EDIT A PROJECT:
   - Add or edit an object in the WORKS array below.
   - Every field is optional except `id`, `title`, and `year`.
   - The `id` is used as the URL: /work/your-id (e.g. work/saas-launch)
   ============================================================= */

var WORKS = [
  {
    id:       'brand-identity-web',
    num:      '01',
    title:    'Brand Identity & Web Presence',
    year:     '2024',
    tags:     ['Web Design', 'Branding'],
    color:    '#c8ff00',           /* accent color for the detail page */
    bg:       'linear-gradient(135deg, #0a0a0f 0%, #0d1a00 100%)',
    cover:    '',                  /* path to cover image if you have one */
    summary:  'A full brand identity system and marketing website for a lifestyle startup — from logo and typography to a fully custom WordPress build.',
    role:     'Designer & Developer',
    stack:    ['Figma', 'WordPress', 'Elementor', 'CSS'],
    url:      '',                  /* live site URL */
    highlights: [
      'Built a custom Elementor theme with zero third-party page builder overhead',
      'Designed a complete brand system: logo, color palette, type scale',
      'Achieved 95+ Lighthouse performance score on mobile',
      'Delivered in 3 weeks from kickoff to launch'
    ]
  },
  {
    id:       'saas-product-launch',
    num:      '02',
    title:    'SaaS Product Launch',
    year:     '2024',
    tags:     ['UI/UX', 'Landing Page'],
    color:    '#ff3d00',
    bg:       'linear-gradient(135deg, #0f0500 0%, #2a0800 100%)',
    cover:    '',
    summary:  'High-converting landing page for a B2B SaaS product — designed and built in two weeks ahead of a Product Hunt launch.',
    role:     'UI Designer & Front-End Developer',
    stack:    ['Figma', 'HTML', 'CSS', 'JavaScript', 'GSAP'],
    url:      '',
    highlights: [
      'Designed 12 UI components from scratch in Figma',
      'Implemented scroll-triggered animations with GSAP',
      'A/B tested two hero variants — winner increased trial signups by 28%',
      'Fully responsive from 320px to 1920px'
    ]
  },
  {
    id:       'ecommerce-redesign',
    num:      '03',
    title:    'E-Commerce Store Redesign',
    year:     '2025',
    tags:     ['WooCommerce', 'UX'],
    color:    '#c8ff00',
    bg:       'linear-gradient(135deg, #001409 0%, #002a14 100%)',
    cover:    '',
    summary:  'Full redesign of a WooCommerce store for a local fashion brand — improving UX, checkout flow, and mobile performance.',
    role:     'UX Designer & WordPress Developer',
    stack:    ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'Figma'],
    url:      '',
    highlights: [
      'Reduced checkout abandonment by 34% through UX improvements',
      'Cut page load time from 8s to under 2s',
      'Redesigned product pages with sticky add-to-cart and image zoom',
      'Integrated custom size guide modal and product filter'
    ]
  },
  {
    id:       'interactive-web-app',
    num:      '04',
    title:    'Interactive Web Application',
    year:     '2025',
    tags:     ['JavaScript', 'Web App'],
    color:    '#ff3d00',
    bg:       'linear-gradient(135deg, #000d1a 0%, #001a36 100%)',
    cover:    '',
    summary:  'A browser-based productivity tool built with vanilla JavaScript — no frameworks, just clean and fast native JS.',
    role:     'Full-Stack Developer',
    stack:    ['HTML', 'CSS', 'JavaScript', 'LocalStorage API'],
    url:      '',
    highlights: [
      'Zero dependencies — pure vanilla JS under 18kb gzipped',
      'Drag-and-drop interface with smooth CSS transitions',
      'Offline-first with LocalStorage persistence',
      'Keyboard navigation and ARIA accessibility support'
    ]
  },
  {
    id:       'creative-director-portfolio',
    num:      '05',
    title:    'Creative Director Portfolio',
    year:     '2025',
    tags:     ['Portfolio', 'GSAP'],
    color:    '#c8ff00',
    bg:       'linear-gradient(135deg, #0d0014 0%, #1a0028 100%)',
    cover:    '',
    summary:  'A cinematic scroll-driven portfolio for a creative director — built with GSAP ScrollTrigger for award-worthy motion.',
    role:     'Designer & Motion Developer',
    stack:    ['HTML', 'CSS', 'GSAP', 'ScrollTrigger', 'Figma'],
    url:      '',
    highlights: [
      'Horizontal scroll sections with pinned GSAP animations',
      'Custom cursor with magnetic hover effects',
      'Image reveal animations on every project card',
      'Submitted to Awwwards SOTD'
    ]
  },
  {
    id:       'corporate-website-rebuild',
    num:      '06',
    title:    'Corporate Website Rebuild',
    year:     '2026',
    tags:     ['Corporate', 'SEO'],
    color:    '#ff3d00',
    bg:       'linear-gradient(135deg, #08080a 0%, #141420 100%)',
    cover:    '',
    summary:  'Complete rebuild of a corporate site for a mid-sized logistics company — focusing on SEO, speed, and lead generation.',
    role:     'Developer & SEO Specialist',
    stack:    ['WordPress', 'PHP', 'CSS', 'Google Analytics', 'SEMrush'],
    url:      '',
    highlights: [
      'Organic traffic increased 210% in 90 days post-launch',
      'Core Web Vitals all green on mobile and desktop',
      'Structured data and schema markup for all key pages',
      'Custom lead capture forms with CRM integration'
    ]
  }
];
