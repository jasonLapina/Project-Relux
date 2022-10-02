import style from './Button.module.scss';
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style.btn} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
