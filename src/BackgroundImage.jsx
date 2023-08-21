import bgDesktopLight from '../public/images/bg-desktop-light.jpg';
import bgMobileLight from '../public/images/bg-mobile-light.jpg';
import bgDesktopDark from '../public/images/bg-desktop-dark.jpg';
import bgMobileDark from '../public/images/bg-mobile-dark.jpg';

// eslint-disable-next-line react/prop-types
export default function BackgroundImage({ theme }) {
  return (
    <div className="background-img">
      {theme === 'light' ? (
        <picture>
          <source media="(max-width: 600px)" srcSet={bgMobileLight} />
          <img
            className="background-img--image"
            src={bgDesktopLight}
            alt="img background light theme"
          />
        </picture>
      ) : (
        ''
      )}
      {theme === 'dark' ? (
        <picture>
          <source media="(max-width: 600px)" srcSet={bgMobileDark} />
          <img
            className="background-img--image"
            src={bgDesktopDark}
            alt="img background dark theme"
          />
        </picture>
      ) : (
        ''
      )}
    </div>
  );
}
