import en from './en.json';
import fr from './fr.json';

const getLanguage = () => {
  const languageFromLocation = location.search.split('lang=').length > 1 && location.search.split('lang=').pop();
  return languageFromLocation || navigator.language || 'en';
}

const getTranslations = () => {
  switch (getLanguage()) {
    case 'fr':
      return fr;
    case 'en':
    default:
      return en;
  }
}

const translations = getTranslations();

const useI18n = () => ({
  t: (key) => key.split('.').reduce((translation, props) => translation[props], translations),
});

export default useI18n;
export { getLanguage };
