import Hero from '@/components/Hero';
import About from '@/components/About';
import InteractiveActivity from '@/components/InteractiveActivity';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import ExperienceEducation from '@/components/ExperienceEducation';
import Skills from '@/components/Skills';
import Blog from '@/components/Blog';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <InteractiveActivity />
      <Projects />
      <Research />
      <ExperienceEducation />
      <Skills />
      <Blog />
      <Achievements />
      <Contact />
    </>
  );
}
