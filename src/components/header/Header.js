import logo from '../../assets/ReluxLogo.png';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header aria-label='hero image for ReLux' className={style.header}>
      <div className={style['logo-box']}>
        <img className={style.logo} src={logo} alt='relux logo' />
      </div>
      <h1 className={style.heading}>
        <p className={style['heading-main']}>relux</p>
        <p className={style['heading-sub']}>experience relaxation in luxury</p>
      </h1>
    </header>
  );
};

export default Header;
