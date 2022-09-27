import style from './Testimonials.module.scss';
import jason from '../../assets/testimonial-1.jpg';
import jelanie from '../../assets/testimonial-2.jpg';
import LinkButton from '../UI/LinkButton';
import videoBg from '../../assets/video.mp4';

const Testimonials = () => {
  const testimonials = [
    {
      title: 'Medyo masaya naman',
      img: jason,
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis rerum corporis distinctio laudantium obcaecati eveniet maiores ut qui dolore quis voluptatum, saepe necessitatibus maxime adipisci labore corrupti exercitationem fugit. orporis distinctio laudantium obcaecati eveniet maiores ut qui dolore quis voluptatum, saepe necessitatibus maxime adipisci labore corrupti exercitationem fugit.',
      name: 'Gaul Soodman',
    },
    {
      title: 'Kinda happy happy nemern',
      img: jelanie,
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis rerum corporis distinctio laudantium obcaecati eveniet maiores ut qui dolore quis voluptatum, saepe necessitatibus maxime adipisci labore corrupti exercitationem fugit. orporis distinctio laudantium obcaecati eveniet maiores ut qui dolore quis voluptatum, saepe necessitatibus maxime adipisci labore corrupti exercitationem fugit.',
      name: 'Wim Kexler',
    },
  ];

  return (
    <section className={style.section}>
      <div className={style['bg-video']}>
        <video src={videoBg} autoPlay loop muted />
      </div>
      <div>
        <h2>Read our customers' stories</h2>
        {testimonials.map((entry, i) => {
          return (
            <div key={i} className={style.story}>
              <figure key={i + 1} className={style.figure}>
                <img key={i + 2} src={entry.img} alt='customer profile' />
                <figcaption className={style.caption}>{entry.name}</figcaption>
              </figure>
              <div key={i + 3} className={style.text}>
                <h3 key={i + 4}>{entry.title}</h3>
                <p key={i + 5}>{entry.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style['link-container']}>
        <LinkButton>Read all stories</LinkButton>
      </div>
    </section>
  );
};

export default Testimonials;
