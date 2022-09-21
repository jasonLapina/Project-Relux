import { Fragment } from 'react';
import style from './Villas.module.scss';
import Button from '../UI/Button';
const Villas = () => {
  const villas = [
    {
      title: 'Christine',
      /////// FEATS ARE AREA, BEDROOM, BATHROOM, THEATHER ROOM, RATING
      feats: [600, 3, 2, 'None', '8.4(902)'],
      img: '',
      price: '',
    },
    {
      title: 'Christina',
      feats: [800, 4, 4, 'Included', '8.8(724)'],

      img: '',
      price: '',
    },
    {
      title: 'Whichizzit',
      feats: [1000, 5, 6, 'Included (bar)', '9.8(506)'],

      img: '',
      price: '',
    },
  ];
  return (
    <section className={style.section}>
      <h2>Most Popular Villas</h2>
      <div className={style.container}>
        {villas.map((villa, i) => {
          return (
            <Fragment>
              <div key={i} className={style.card}>
                <div
                  key={i + 2}
                  className={`${style['card__side']} ${style['card__side--front']}`}
                >
                  <div
                    key={i + 3}
                    className={`${style.img} ${style[`img--${i + 1}`]}`}
                    aria-label='high-end villa'
                  />
                  <div key={i + 4} className={style['card-heading']}>
                    <h3 key={i + 5}>{villa.title}</h3>
                  </div>
                </div>
                <div
                  key={i + 6}
                  className={`${style['card__side']} ${style['card__side--back']}`}
                >
                  <Button key={i + 7}>BOOK NOW LIKE A NIGGER</Button>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Villas;
