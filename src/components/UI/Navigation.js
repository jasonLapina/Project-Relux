import style from './Navigation.module.scss';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const NavOverlay = (props) => {
  return (
    <Fragment>
      <input className={style.checkbox} type='checkbox' id='nav-toggle' />
      <label
        className={style.label}
        onClick={props.onShowNav}
        htmlFor='nav-toggle'
      >
        <span />
      </label>
      <div className={style.backdrop} />
      <nav className={style.nav}>
        <ul>
          <li>
            <a onClick={props.onClose} href='/'>
              01 About Relux
            </a>
          </li>
          <li>
            <a onClick={props.onClose} href='/'>
              02 Benefits
            </a>
          </li>
          <li>
            <a onClick={props.onClose} href='/'>
              03 Popular Villas
            </a>
          </li>
          <li>
            <a onClick={props.onClose} href='/'>
              04 Stories
            </a>
          </li>
          <li>
            <a onClick={props.onClose} href='/'>
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
