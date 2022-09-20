import logo from '../../assets/ReluxLogo.png';
import Button from '../UI/Button';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header aria-label='hero image for ReLux' className={style.header}>
      <div className={style['logo-box']}>
        <img className={style.logo} src={logo} alt='relux logo' />
      </div>
      <div>
        <h1 className={style.heading}>
          <p className={style['heading-main']}>relux</p>
          <p className={`subheading ${style.subheading}`}>
            experience relaxation in luxury
          </p>
          <Button className={style.btn}>Discover Villas</Button>
        </h1>
      </div>
    </header>
  );
};

export default Header;
