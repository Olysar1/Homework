import { Link } from "react-router-dom";
import { languages, useLanguageContext } from "../contexts/LanguageContext";

const Header = () => {
  //   const [isEnglish, setIsEnglish] = useState(false);

  const { language, toggleLanguage } = useLanguageContext();

  return (
    <header>
      <div className="link-wrapper">
        <Link to="/" className="router-link-style">
          {languages[language].myPlans}
        </Link>
        <Link to="/task/create" className="router-link-style">
          {languages[language].addPlan}
        </Link>
      </div>
      <button className="language-btn" onClick={toggleLanguage}>
        {language === "english" ? "GEO" : "ENG"}
      </button>
    </header>
  );
};

export default Header;
