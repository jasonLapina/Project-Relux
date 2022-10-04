import style from './Villas.module.scss';
import Button from '../UI/Button';

const Villas = (props) => {
  const villas = [
    {
      title: 'Christine',
      feats: {
        sqm: 600,
        bed: 3,
        bath: 2,
        theater: 'None',
        rating: '8.4 (902)',
      },
      price: '$200',
    },
    {
      title: 'Christina',
      feats: {
        sqm: 800,
        bed: 4,
        bath: 4,
        theater: 'None',
        rating: '8.8 (724)',
      },
      price: '$300',
    },
    {
      title: 'Whichizzit',
      feats: {
        sqm: 1000,
        bed: 5,
        bath: 6,
        theater: 'Included',
        rating: '9.8 (506)',
      },
      price: '$600',
    },
  ];
  return (
    <section id='villas' className={style.section}>
      <h2>Most Popular Villas</h2>
      <div className={style.container}>
        {villas.map((villa, i) => {
          return (
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
                  <h4 key={i + 5}>
                    <span
                      key={i + 6}
                      className={style[`card-heading--${i + 1}`]}
                    >
                      The {villa.title}
                    </span>
                  </h4>
                </div>
                <ul className={style.details} key={i + 7}>
                  <li key={i + 8}>
                    {villa.feats.sqm} m<sup>2</sup>
                  </li>
                  <li key={i + 9}>{villa.feats.bed} Bedrooms</li>
                  <li key={i + 10}> {villa.feats.bath} Bathrooms</li>
                  <li key={i + 11}>Theater room: {villa.feats.theater}</li>
                  <li key={i + 12}>Rating: {villa.feats.rating}</li>
                </ul>
              </div>
              <div
                key={i + 13}
                className={`${style['card__side']} ${
                  style[`card__side--back`]
                } ${style[`card__side--back--${i + 1}`]}`}
              >
                <div className={style.cta}>
                  <div className={style.pricebox}>
                    <p>ONLY</p>
                    <p className={style.value}>{villa.price}</p>
                    <p>/night</p>
                  </div>
                  <Button onClick={props.onShowForm}>Book now</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button className={style.btn}>Discover all villas</Button>
    </section>
  );
};

export default Villas;
