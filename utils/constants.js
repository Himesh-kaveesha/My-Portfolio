export const skills = {
  design: [
    { name: 'Figma', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Wireframing', level: 88 },
    { name: 'Prototyping', level: 82 },
    { name: 'Responsive Design', level: 90 }
  ],
  frontend: [
    { name: 'React.js', level: 92 },
    { name: 'React Native', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Mobile-first Design', level: 88 }
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 78 },
    { name: 'REST APIs', level: 82 },
    { name: 'Postman', level: 85 },
    { name: '.NET (Basic)', level: 60 }
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Cross-platform Dev', level: 82 },
    { name: 'MongoDB', level: 78 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'SQL (MySQL)', level: 80 }
  ]
};

export const projects = [
  {
    id: 1,
    title: 'LankaTrails',
    subtitle: 'Tourism Mobile Application',
    description: 'Built a comprehensive mobile application using React Native for tourists in Sri Lanka with interactive maps, navigation, and visual components designed to improve tourist engagement.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    tags: ['React Native', 'Interactive Maps', 'UI/UX', 'Figma'],
    features: [
      'Interactive maps and navigation',
      'Visual components for engagement', 
      'UI screens and workflows',
      'Cross-platform usability'
    ],
    link: 'https://github.com/LankaTrails/lankatrails-mobile-app.git'
  },
  {
    id: 2,
    title: 'Beehive',
    subtitle: 'Child Vaccination & Healthcare Management System',
    description: 'Developed the frontend dashboard for parents and doctors using HTML, CSS, and JavaScript with responsive UI and interactive forms for tracking vaccinations.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design','PHP'],
    features: [
      'Parent & doctor dashboards',
      'Responsive UI design',
      'Interactive vaccination forms',
      'Healthcare data tracking'
    ],
    link: 'https://github.com/vishwani014/Beehive-PHP.git'
  },
  {
    id: 3,
    title: 'UI/UX Design Portfolio',
    subtitle: 'Personal Design Practice Projects',
    description: 'Created mobile and web UI designs to strengthen design skills with selected works published on Dribbble, focusing on modern design principles.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tags: ['UI/UX', 'Mobile Design', 'Web Design', 'Dribbble'],
    features: [
      'Mobile & web UI designs',
      'Modern design principles',
      'Published on Dribbble',
      'Design skill development'
    ],
    link: 'https://dribbble.com/himesh_kaveesha'
  },
  {
  id: 4,
  title: 'MERN Authentication System',
  subtitle: 'Login, Logout & Secure Authentication',
  description:
    'Developed a full-stack MERN authentication system with user registration, login, logout, password hashing, and protected routes using JWT.',
  image:
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
  tags: ['MERN Stack', 'JWT', 'MongoDB', 'Express.js', 'React', 'Node.js'],
  features: [
    'User registration & login',
    'JWT-based authentication',
    'Password hashing with bcrypt',
    'Protected API routes',
    'Secure logout handling'
  ],
  link: '#'
},
{
  id: 5,
  title: 'CRUD Management System',
  subtitle: 'Full Stack MERN Application',
  description:
    'Built a full-stack CRUD application using the MERN stack with authentication, allowing users to create, read, update, and delete records securely.',
  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CRUD', 'REST API'],
  features: [
    'Create, Read, Update, Delete operations',
    'Authenticated user access',
    'RESTful API development',
    'MongoDB schema design',
    'Frontend-backend integration'
  ],
  link: 'https://github.com/Himesh-kaveesha/NewsApplicationFS.git'
}
];

export const certifications = [
  { name: 'Google UX Design', provider: 'Coursera', status: 'In Progress', icon: '🎓' }
];

export const softSkills = [
  'Creativity', 'Communication', 'Collaboration', 
  'Time Management', 'Problem-Solving', 'Adaptability'
];

export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];