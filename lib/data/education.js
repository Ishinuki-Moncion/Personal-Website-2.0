// Education + affiliations — rendered as a directory tree in education.dir
export const degrees = [
  {
    id: 'soka',
    school: 'Soka University',
    location: 'Tokyo, Japan',
    program: 'Post-Graduate Program in Japan Studies',
    grad: 'Jul 2024'
  },
  {
    id: 'utd',
    school: 'The University of Texas at Dallas',
    location: 'Richardson, TX',
    program: 'B.S. in Computer Science',
    grad: 'Dec 2022'
  }
]

export const milestones = [
  'B.S. in Computer Science — UT Dallas',
  'Post-Graduate Japan Studies — Soka University',
  'UTD ACM Projects alumnus',
  'Dallas Japanese Association',
  'All Star Code alumnus'
]

export const orgs = [
  { src: '/images/logo-utd.png', label: 'UT Dallas' },
  { src: '/images/logo-acm.png', label: 'ACM' },
  { src: '/images/logo-dja.jpg', label: 'DJA' },
  { src: '/images/logo-asc.jpg', label: 'All Star Code' }
]

export default { degrees, milestones, orgs }
