import moonIcon from '../public/images/icon-moon.svg';
import sunIcon from '../public/images/icon-sun.svg';

// eslint-disable-next-line react/prop-types
export default function ThemeSwitcher({ theme, onThemeSwitch }) {
  return (
    <button className="btn btn--theme" onClick={onThemeSwitch}>
      {theme === 'light' ? <img src={moonIcon} /> : ''}
      {theme === 'dark' ? <img src={sunIcon} /> : ''}
    </button>
  );
}
