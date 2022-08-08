import './App.css';

import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import VerticalTime from './components/VerticalTime';

function App() {
  return (
      <div>
        <Particles />
        {/*  navbar start */}
        <Navbar />
        {/* navbar end */}
        {/* main start */}      
        <main id="top">
          {/* start of wellcome */}
          <Home />
          {/*  end of welcome */}
          {/* start of about me */}
          <Aboutme />
          {/* end of about me */}
          {/* start of portfolio */}
          <div className="portfolio" id="portfolio">
            <h4>Portfolio</h4>
          </div>
          {/* <div className="projects-section">
            <div className="container-root container-root-maxWidthLg">
              <div className="projects-container"> */}
                <Projects />
              {/* </div>
            </div>
          </div> */}
          {/* end of portfolio */}
          {/* start of timeline */}
          <div className="portfolio" id="experience">
            <h4>Professional experience and education</h4>
          </div>
          <VerticalTime />
          {/*  end of timeline */}
        </main>
        {/* main end */}

      </div>
  );
};

export default App;
