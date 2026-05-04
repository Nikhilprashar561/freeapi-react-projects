


// Navbar Component
function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <h1 style={styles.navTitle}>⚛️ React Mini Projects</h1>
        <a 
          href="https://github.com/Nikhilprashar561/freeapi-react-projects" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.githubLink}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </nav>
  );
}

// Project Card Component
function ProjectCard({ name, liveLink, repoLink, repoPath }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{name}</h3>
      <div style={styles.linksContainer}>
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.liveLink}
        >
          🌐 Live
        </a>
        <a 
          href={repoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.repoLink}
        >
          📁 Repo
        </a>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const projects = [
    {
      name: 'Authentication',
      liveLink: 'https://authnikhil.netlify.app/',
      repoLink: 'https://github.com/Nikhilprashar561/freeapi-react-projects/tree/main/authentication'
    },
    {
      name: 'Jokes Viewer',
      liveLink: 'https://jokesview.netlify.app/',
      repoLink: 'https://github.com/Nikhilprashar561/freeapi-react-projects/tree/main/jokesViewer'
    },
    {
      name: 'Meals Listing',
      liveLink: 'https://mealseating.netlify.app/',
      repoLink: 'https://github.com/Nikhilprashar561/freeapi-react-projects/tree/main/mealsLisitng'
    },
    {
      name: 'Product Listing',
      liveLink: 'https://productlisted.netlify.app/',
      repoLink: 'https://github.com/Nikhilprashar561/freeapi-react-projects/tree/main/productLisitng'
    },
    {
      name: 'Quotes Listing',
      liveLink: 'https://quotelisted.netlify.app/',
      repoLink: 'https://github.com/Nikhilprashar561/freeapi-react-projects/tree/main/quotesListing'
    },
    {
      name: 'Random Cat Viewer',
      liveLink: 'https://randomcatviewer.netlify.app/',
      repoLink: 'https://github.com/Nikhilprashar561/freeapi-react-projects/tree/main/randomCatViewer'
    },
    {
      name: 'Random User',
      liveLink: 'https://randomsuser.netlify.app/',
      repoLink: 'https://github.com/Nikhilprashar561/freeapi-react-projects/tree/main/randomUser'
    },
    {
      name: 'YouTube Video Listing',
      liveLink: 'https://youtubevideolisitng.netlify.app/',
      repoLink: 'https://github.com/Nikhilprashar561/freeapi-react-projects/tree/main/youtubeVideoLisitng'
    }
  ];

  return (
    <div style={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Explore My React Mini Projects</h2>
        <p style={styles.heroDescription}>
          A collection of 8 mini projects built with React using FreeAPI. 
          Each project demonstrates different React concepts and real-world API integration. 
          Click on the "Live" link to see the project in action, or check the "Repo" link to view the source code.
        </p>
      </section>

      {/* Projects Grid */}
      <section style={styles.projectsSection}>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              name={project.name}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 React Mini Projects. Built with ❤️ by Nikhil Prashar</p>
      </footer>
    </div>
  );
}

// Styles Object
const styles = {
  container: {
    backgroundColor: '#0f0f0f',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  navbar: {
    backgroundColor: '#1a1a1a',
    borderBottom: '2px solid #333333',
    padding: '0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
  },
  navTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    margin: '0',
    color: '#61dafb',
  },
  githubLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.7rem 1.2rem',
    backgroundColor: '#333333',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    border: '1px solid #444444',
    cursor: 'pointer',
  },
  hero: {
    maxWidth: '1200px',
    margin: '3rem auto 0',
    padding: '3rem 2rem',
    textAlign: 'center',
    borderBottom: '1px solid #333333',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #61dafb, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroDescription: {
    fontSize: '1.1rem',
    color: '#cccccc',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto',
  },
  projectsSection: {
    maxWidth: '1200px',
    margin: '3rem auto',
    padding: '0 2rem',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1a1a1a',
    border: '1px solid #333333',
    borderRadius: '10px',
    padding: '2rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-5px)',
      borderColor: '#61dafb',
      boxShadow: '0 8px 25px rgba(97, 218, 251, 0.2)',
    },
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: '#61dafb',
  },
  linksContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  liveLink: {
    display: 'inline-block',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#0066cc',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    border: '1px solid #0052a3',
    cursor: 'pointer',
  },
  repoLink: {
    display: 'inline-block',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#cc0000',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    border: '1px solid #990000',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#1a1a1a',
    borderTop: '1px solid #333333',
    padding: '2rem',
    textAlign: 'center',
    color: '#999999',
    marginTop: '3rem',
    fontSize: '0.95rem',
  },
};

export default App
