import style from './Button.module.scss';
const Button = (props) => {
  return (
    <button className={`${style.btn} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
