import style from './Form.module.scss';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from '../UI/Button';

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose} />;
};

const FormOverlay = (props) => {
  return (
    <div className={style.form}>
      <div className={style.imgbox} />
      <div className={style.textbox}>
        <div className={style.icon}>
          <ion-icon onClick={props.onClose} name='close-outline' />
        </div>
        <h2 className={style.heading}>Start booking now</h2>
        <h3 className={style.subheading}>
          IMPORTANT PLEASE READ THESE TERMS BEFORE BOOKING
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          repudiandae officia quod blanditiis? Rerum, deleniti. Aliquam soluta
          pariatur suscipit consequuntur agnam. Odio nisi excepturi aperiam,
          commodi eos minima! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Optio sunt facere quibusdam, repellat, amet eveniet cupiditate
          eaque ad facilis, minus nostrum neque alias aspe consectetur
          adipisicing elit. Optio sunt facere quibusdam, repellat, amet eveniet
          cupiditate eaque ad facilis, minus nostrum neque alias aspe. t facere
          quibusdam, repellat, amet eveniet cupiditate eaque ad facilis, minus
          lias aspe. t facere quibusdam, repellat, amet eveniet cupiditate eaque
          ad facilis, minus nostrum neque alias aspe
        </p>
        <Button onClick={props.onClose}>Book now</Button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Form = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <FormOverlay onClose={props.onClose} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Form;
