import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import GenerateForm from '../../components/GenerateForm/GenerateForm';
import classes from './PrintForm.module.scss';

const PrintForm = props => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={classes.PrintForm}>
      <GenerateForm ref={componentRef} {...props} />
      <button onClick={handlePrint} className={classes.PrintForm__btn}>Print</button>
    </div>
  );
};

export default PrintForm;