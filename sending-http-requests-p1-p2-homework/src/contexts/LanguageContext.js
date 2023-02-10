import { createContext, useContext, useMemo, useState } from "react";

export const languages = {
  english: {
    myPlans: "My Plans",
    addPlan: "Add New Plan",
    planned: "Planned",
    progress: "In Progress",
    done: "Done",
    edit: "edit",
    start: "Start",
    delete: "Delete",
    stop: "Stop",
    finish: "Finish",
    undo: "Undo",
    placeholder: "Enter Plan Here",
    submit: "Submit Plan",
  },
  georgian: {
    myPlans: "ჩემი გეგმები",
    addPlan: "დაამატე გეგმა",
    planned: "გეგმები",
    progress: "მიმდინარე გეგმები",
    done: "დასრულებული",
    edit: "ჩასწორება",
    start: "დაწყება",
    delete: "წაშლა",
    stop: "შეწყვეტა",
    finish: "დამთავრება",
    undo: "გაუქმება",
    placeholder: "შეიყვანე გეგმა",
    submit: "დადასტურება",
  },
};

const LanguageContext = createContext(null);

const LanguageContextProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false);

  const contextValue = useMemo(
    () => ({
      language: isEnglish ? "english" : "georgian",
      toggleLanguage: () => setIsEnglish((prev) => !prev),
    }),
    [isEnglish]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const contextValue = useContext(LanguageContext);

  if (!contextValue)
    throw new Error(
      "useLanguageContext can only be used inside LanguageContextProvider"
    );

  return contextValue;
};

export default LanguageContextProvider;
