import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import videoBic from "../../assets/videos/bicVideo.mp4";
import { Transition } from "../../components/Animations/PageTransition/Transition.jsx";
import { TitleTransition } from "../../components/Animations/TextAnimation.jsx";
import Circle from "../../components/Common/Circle.jsx";
import Form from "../../components/Form/Form.jsx";
import SocialMedia from "../../components/SocialMedia/SocialMedia.jsx";
import { originauxData } from "../../data/data";
import "./Home.scss";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const infosOeuvresRefs = useRef([]);
  const oeuvresData = originauxData;

  useEffect(() => {
    infosOeuvresRefs.current = infosOeuvresRefs.current.slice(
      0,
      oeuvresData.length
    );
  }, [oeuvresData.length]);

  return (
    <Transition>
      <section className="home-container">
        <div className="home-content">
          <TitleTransition textClassName="title-content h1" yposition="400" />
          <div className="title-content">
            <div className="title">
              <h1>Margritt</h1>
              <p>
                No limits, just art. <br />
              </p>
            </div>
          </div>
        </div>
        <div className="bic-container">
          <div className="bic-title">
            <h2>Collaboration avec Bic</h2>
          </div>
          <div className="bic-video-container">
            <a href="https://www.instagram.com/p/C7xDlCzo2_P/">
              <video loop autoPlay muted src={videoBic} />
            </a>
          </div>
        </div>
        <SocialMedia />
      </section>
      <footer>
        <Circle target={"project-container"} />
        <Form />
      </footer>
    </Transition>
  );
};

export default Home;
