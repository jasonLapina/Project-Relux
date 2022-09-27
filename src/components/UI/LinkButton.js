import style from './LinkButton.module.scss';
const LinkButton = (props) => {
  return (
    <a
      href='/'
      className={`${style.anchor} ${props.className ? props.className : ''}`}
    >
      {props.children} &rarr;
    </a>
  );
};

export default LinkButton;
