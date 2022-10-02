import style from './Footer.module.scss';
import logo from '../../assets/ReluxLogo.png';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.logobox}>
        <img src={logo} alt='relux logo' />
      </div>

      <div className={style['text-box']}>
        <div className={style.nav}>
          <ul>
            <li>
              <a href='/'>Company</a>
            </li>
            <li>
              <a href='/'>Contact us</a>
            </li>
            <li>
              <a href='/'>Careers</a>
            </li>
            <li>
              <a href='/'>Privacy policy</a>
            </li>
            <li>
              <a href='/'>Terms</a>
            </li>
          </ul>
        </div>
        <div className={style.copyright}>
          <p>
            Built by{' '}
            <a href='https://github.com/jasonLapina' target='_blank'>
              JASON LAPINA
            </a>{' '}
            to practice his ADVANCED CSS AND SASS skillset. Copyright &copy; by
            Jason Lapina. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolore id ea animi possimus voluptatum rem officia magni. Iure
            quisquam dicta dolores consequatur ab. Corporis placeat quaerat
            minus harum ut in.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
