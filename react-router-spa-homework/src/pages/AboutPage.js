import { Link } from "react-router-dom";

const AboutPage = () => (
  <div className="info-page-style">
    <h1>About Hercules</h1>
    <h3>
      Hercules is the Roman equivalent of the Greek divine hero Heracles, son of
      Jupiter and the mortal Alcmena. In classical mythology, Hercules is famous
      for his strength and for his numerous far-ranging adventures. The Romans
      adapted the Greek hero's iconography and myths for their literature and
      art under the name Hercules. In later Western art and literature and in
      popular culture, Hercules is more commonly used than Heracles as the name
      of the hero. Hercules is a multifaceted figure with contradictory
      characteristics, which enabled later artists and writers to pick and
      choose how to represent him.
    </h3>
    <Link to="/" className="link-style">
      Go Back
    </Link>
  </div>
);

export default AboutPage;
