import style from './Features.module.scss';

const Features = () => {
  const features = [
    {
      title: 'King-sized Beds',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quam ratione iste pariatur! Laudantium reprehenderit ea natus temporibus nesciunt eaque? Culpa, harum!`,
      icon: <ion-icon name='bed-outline'></ion-icon>,
    },
    {
      title: 'Mini-Bar',
      text: 'iste pariatur! Laudantium reprehenderit ea natus temporibus nesciunt eaque? Culpa, harum! adipisicing elit',
      icon: <ion-icon name='wine-outline'></ion-icon>,
    },
    {
      title: 'Gym',
      text: 'Laudantium reprehenderit ea natus temporibus nesciunt eaque? Culpa, harum! Omnis vitae voluptatum adipisci iste ',
      icon: <ion-icon name='barbell-outline'></ion-icon>,
    },
    {
      title: 'Gaming Room',
      text: 'olor sit amet, consectetur adipisicing elit. reprehenderit ea natus temporibus voluptate animi Omnis vitae voluptatum adipisci iste voluptate animi illum!',
      icon: <ion-icon name='game-controller-outline'></ion-icon>,
    },
  ];
  return (
    <section className={style.section}>
      <div className={style.container}>
        {features.map((feat, i) => {
          return (
            <div className={style.feature} key={i}>
              <div className={style.icon}>{feat.icon}</div>
              <h3 key={i + 2}>{feat.title}</h3>
              <p key={i + 3}>{feat.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
