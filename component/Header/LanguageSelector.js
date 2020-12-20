import I18nIcon from 'asset/I18nIcon';
import styles from './styles.module.css';
import { getLanguage } from 'i18n/useI18n';

const buildLink = ([ lang, label ]) => getLanguage() === lang
  ? <span className={styles.languageSelected}>{label}</span>
  : <a href={`?lang=${lang}`} className={styles.language}>{label}</a>

const LanguageSelector = () => (
  <div className={styles.languageSelector}>
    <I18nIcon />
    {Object.entries({ fr: 'Français', en: 'English'}).map(([ lang, label ]) => buildLink([ lang, label ]))}
  </div>
);

export default LanguageSelector;
