import style from './Booking.module.scss';
import Button from '../UI/Button';
const Booking = () => {
  return (
    <section className={style.section}>
      <div className={style.book}>
        <div className={style['book__form']}>
          <h2 className={style.heading}>Start Booking Now</h2>
          <form className={style.form}>
            <div className={style['form__group']}>
              <input type='text' placeholder='Full Name' required id='name' />
              <label htmlFor='name'>Full Name</label>
            </div>
            <div className={style['form__group']}>
              <input
                type='email'
                placeholder='Email address'
                required
                id='email'
              />
              <label htmlFor='email'>Email address</label>
            </div>

            <Button>Next Step &rarr;</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
