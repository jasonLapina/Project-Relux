import style from './Navigation.module.scss';
import ReactDOM from 'react-dom';
import { useState, Fragment } from 'react';

const NavOverlay = () => {
  const [checked, setChecked] = useState(false);
  const checkHandler = () => {
    setChecked((prevState) => !prevState);
  };

  const hideNavHandler = () => {
    setChecked(false);
  };

  return (
    <Fragment>
      <input
        onClick={checkHandler}
        className={style.checkbox}
        type='checkbox'
        id='nav-toggle'
      />
      <label className={style.label} htmlFor='nav-toggle'>
        <span />
      </label>
      <div
        className={`${style.backdrop} ${checked ? style.showBackdrop : ''}`}
      />
      <nav className={`${style.nav} ${checked ? style.showNav : ''}`}>
        <ul>
          <li>
            <a onClick={hideNavHandler} href='#about'>
              01 About Relux
            </a>
          </li>
          <li>
            <a onClick={hideNavHandler} href='#features'>
              02 Benefits
            </a>
          </li>
          <li>
            <a onClick={hideNavHandler} href='#villas'>
              03 Popular Villas
            </a>
          </li>
          <li>
            <a onClick={hideNavHandler} href='#testimonials'>
              04 Testimonials
            </a>
          </li>
          <li>
            <a onClick={hideNavHandler} href='#booking'>
              05 Book now
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const portalElement = document.getElementById('overlays');

const Navigation = () => {
  return ReactDOM.createPortal(<NavOverlay />, portalElement);
};

export default Navigation;
