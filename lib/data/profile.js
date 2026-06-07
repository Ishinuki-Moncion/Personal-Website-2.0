// Core identity + bio. Single source for the hero terminal, about.md, footer.
const profile = {
  name: 'Ishinuki Daikie',
  handle: 'ishinuki_daikie',
  roles: ['developer', 'photographer', 'technical producer'],
  title: 'Technical Producer @ SeenThis Japan',
  location: 'Tokyo, JP',
  locationNote: 'ex-Dallas, TX',
  avatar: '/images/about.jpg',

  // One-line self-intro, flipped EN <-> casual JP in about.md
  intro: {
    en: "Hi — I'm Daikie, a Tokyo-based developer and photographer.",
    ja: 'はじめまして、東京在住の開発者・写真家のダイキです。'
  },

  // Long-form bio (carried over from the old About section).
  bio: [
    "I'm Ishinuki Daikie, a developer who likes turning ideas into things people actually use. I studied Computer Science at The University of Texas at Dallas and work across the stack — React, Next.js, and Node/Express on PostgreSQL and REST APIs. Today I'm a Technical Producer at SeenThis Japan, building and converting advertising materials into open-web digital ad banners in HTML, CSS, and JavaScript — I've shepherded 100+ campaigns from creation to execution alongside clients and internal teams.",
    "I'm based in Tokyo by way of Dallas. After UTD I followed a deeper pull toward Japan and completed a Post-Graduate Program in Japan Studies at Soka University; I speak native English and conversational Japanese (JLPT N3). Photography is a real practice for me, not a side note — it's where the engineer and the artist in me meet, and you'll find a gallery of that work just below."
  ],

  interests: ['photography', 'japan', 'retro-computing', 'web', 'open-source'],

  // Public contacts — socials only (no email exposed, by request).
  socials: [
    {
      key: 'github',
      label: 'GitHub',
      handle: 'Ishinuki-Moncion',
      href: 'https://github.com/Ishinuki-Moncion'
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      handle: 'daikie-moncion',
      href: 'https://www.linkedin.com/in/daikie-moncion-6a637b71/'
    },
    {
      key: 'instagram',
      label: 'Instagram',
      handle: 'd.moncion',
      href: 'https://www.instagram.com/d.moncion/'
    }
  ]
}

export default profile
