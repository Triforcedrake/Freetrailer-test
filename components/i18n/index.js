import i18n from "i18n-js";
import dk from "./languages/dk";  
import en from "./languages/en";

//Here we configure i18n before exporting to the main 

i18n.fallbacks = true;

i18n.translations = {
  dk,
  en,
};

i18n.locale = "dk";

export default i18n; 