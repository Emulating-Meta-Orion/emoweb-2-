import TypewriterEffect from './components/Home';
import { Services } from './components/Services';
import { About } from './components/About';
import { Team } from './components/Team';

const Home = () => {
  return (
    <div>
      <TypewriterEffect />
      <section id="about">
        <About />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="service">
        <Services />
      </section>
    </div>
  );
};

export default Home;
