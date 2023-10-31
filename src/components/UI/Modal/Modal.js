import React from 'react';
import ReactDOM from 'react-dom';

import {Cancel} from '../../../assets/SvgComponents/index';
import Backdrop from './Backdrop/Backdrop';
import classes from './Modal.module.scss';

const Modal = props => {
    if(!props.open) return null
    return ReactDOM.createPortal(
        <>
            <Backdrop show={props.open} clicked={props.onClose} />
            <div className={classes.modal}>
                <button className={classes.modal__cancelBtn} onClick={props.onClose}><Cancel /></button>
                {props.children}
            </div>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;