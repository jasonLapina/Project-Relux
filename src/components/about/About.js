import style from './About.module.scss';
import pool from '../../assets/pool.jpg';
import spa from '../../assets/spa.jpg';
import villa from '../../assets/villa.jpg';
import LinkButton from '../UI/LinkButton';

const About = () => {
  return (
    <section className={style.section}>
      <h2>LOREM IPSUM DOLOR sit</h2>
      <div className={style.container}>
        <div className={style.text}>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <LinkButton>Learn more</LinkButton>
        </div>
        <div className={style.images}>
          <img
            className={style['images--pool']}
            src={pool}
            alt='big swimming pool'
          />
          <img className={style['images--spa']} src={spa} alt='spa room' />
          <img
            className={style['images--villa']}
            src={villa}
            alt='luxury villa'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
