// Projects — rendered as Finder-style file rows in projects.app
const projects = [
  {
    id: 'degree-audit',
    name: 'Degree Planning Audit Tool',
    file: 'degree-audit.js',
    org: 'The University of Texas at Dallas',
    kind: 'Web Development',
    year: '2022',
    period: 'Aug 2022 – Dec 2022',
    pitch:
      'Automated redundant degree-audit reporting, cutting manual calculation time.',
    detail:
      'A local server-based program that generates degree-plan and audit reports — parsing source PDFs and producing clean, generated documents.',
    tech: [
      'JavaScript',
      'HTML/CSS',
      'Node.js',
      'Express.js',
      'pdf-parse',
      'jsPDF'
    ],
    github: 'https://github.com/Ishinuki-Moncion'
  },
  {
    id: 'timeflies',
    name: 'TimeFlies',
    file: 'timeflies.ts',
    org: 'HackUTD VIII',
    kind: 'Database',
    year: '2021',
    period: 'Nov 2021',
    pitch:
      'Real-time data transfer from a PostgreSQL backend to the front-end.',
    detail:
      'Built a PostgreSQL database wired for real-time data transfer to the client, using MikroORM for the data layer at HackUTD VIII.',
    tech: ['TypeScript', 'PostgreSQL', 'MikroORM'],
    github: 'https://github.com/Ishinuki-Moncion'
  },
  {
    id: 'debug',
    name: 'Debug',
    file: 'debug.ts',
    org: 'Association for Computing Machinery',
    kind: 'Web Development',
    year: '2020',
    period: 'Aug 2020 – Dec 2020',
    pitch: 'A full-stack app for real-time collaborative code sharing.',
    detail:
      'Built a collaborative editor enabling real-time code sharing, with syntax highlighting and live sync backed by Firebase.',
    tech: ['TypeScript', 'React.js', 'Node.js', 'Highlight.js', 'Firebase'],
    github: 'https://github.com/Ishinuki-Moncion'
  }
]

export default projects
