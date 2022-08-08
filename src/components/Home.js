import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="main-container">
            <div className="main-hero">
                <div className="prof-img-container">

                </div>
                <h1 className="main-h1">Pablo Solis</h1>
                <h4 className="main-h4">Developer, Pilot & Gamer</h4>
                <div className="links-b-container">
                    <a className="links-b" href="https://github.com/slicutium" title="slicutium"><FontAwesomeIcon  icon={faGithub} /></a>
                    <a className="links-b" href="https://www.linkedin.com/in/pablo-solis-baa99286/" title="Pablo Solis"><FontAwesomeIcon  icon={faLinkedin} /></a>
                    <a className="links-b" href="https://steamcommunity.com/profiles/76561198044338987" title="Slicutium"><FontAwesomeIcon  icon={faSteam} /></a>
                    <a className="links-b" href="https://discord.com/" title="Slicutium#4095"><FontAwesomeIcon  icon={faDiscord} /></a>
                    <a className="links-b" href="mailto: pablo.solis.h@gmail.com" title="Pablo.solis.h@gmail.com"><FontAwesomeIcon  icon={faEnvelope} /></a>
                </div>
            </div>
        </div>
    );
};

export default Home;