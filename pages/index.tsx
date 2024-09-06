import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Custom primary color
    },
    secondary: {
      main: '#f50057', // Custom secondary color
    },
    background: {
      default: '#31363B',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h2: {
      fontFamily: 'Slabo 27px, serif',
    },
    h3: {
      fontFamily: 'Slabo 27px, serif',
    },
  },
});

export default function Home(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <main>
          <section id="about-me" className="py-10 section-padding">
            <AboutMe />
          </section>
          <section id="experience" className="py-10 section-padding">
            <Experience />
          </section>
          <section id="education" className="py-10 section-padding">
            <Education />
          </section>
          <section id="projects" className="py-10 section-padding">
            <Projects />
          </section>
          <section id="contact" className="py-10 section-padding">
            <ContactMe />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
