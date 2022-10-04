import style from './Booking.module.scss';
import Button from '../UI/Button';
const Booking = () => {
  return (
    <section id='booking' className={style.section}>
      <div className={style.book}>
        <div className={style['book__form']}>
          <h2 className={style.heading}>Start Booking Now</h2>
          <form className={style.form}>
            <div>
              <input
                className={style['form__input']}
                type='text'
                placeholder='Full Name'
                required
                id='name'
              />
              <label className={style['form__label']} htmlFor='name'>
                Full Name
              </label>
            </div>
            <div>
              <input
                className={style['form__input']}
                type='email'
                placeholder='Email address'
                required
                id='email'
              />
              <label className={style['form__label']} htmlFor='email'>
                Email address
              </label>
            </div>
            <div className={style['radio-group']}>
              <div className={style['radio-container']}>
                <input name='size' type='radio' id='solo' />
                <label htmlFor='solo'>
                  <span className={style.radio} />
                  Solo
                </label>
              </div>
              <div className={style['radio-container']}>
                <input name='size' type='radio' id='couple' />
                <label htmlFor='couple'>
                  <span className={style.radio} />
                  Couple
                </label>
              </div>
              <div className={style['radio-container']}>
                <input name='size' type='radio' id='group' />
                <label htmlFor='group'>
                  <span className={style.radio} />
                  Group
                </label>
              </div>
            </div>
            <Button className={style['btn--cta']}>Next Step &rarr;</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
