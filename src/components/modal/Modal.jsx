import React, { useState } from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import ButtonClose from 'components/buttonClose/ButtonClose';
import Button from 'components/button/Button';
import styles from './Modal.module.scss';
import modalImage from 'images/game.jpg';

function Modal({ setIsOpen }) {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const handleSubmit = values => {
    console.log(values);

    document.getElementById('gameFrame').src =
      'https://cdn02.cdn.amatic.com/gmsl/amanet/game.html?game=luckyjoker100&hash=&wallet=w13&currency=USD&config=14720&isFreeplay=true&language=en&exit=&type=desktop';
  };

  return (
    <div className={styles.backDrop}>
      <div className={styles.modalWrap}>
        <ButtonClose type={'button'} onClick={() => setIsOpen(false)}>
          <AiOutlineCloseCircle />
        </ButtonClose>

        <img
          src={modalImage}
          alt="Colt Lightning"
          className={styles.modalImg}
          width="250"
        />

        <Formik
          initialValues={{
            email: '',
            acceptTerms: false,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <label className={styles.formGroup}>
                <Field
                  required
                  type="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="Enter your email"
                />
                {errors.email && touched.email && (
                  <div className={styles.errorMsg}>
                    Something went wrong, try again.
                  </div>
                )}
              </label>
              <label className={styles.formGroup}>
                <Field required name="acceptTerms" type="checkbox" />
                <span>Accept Terms</span>
              </label>
              <Button type={'submit'} title={'Submit'} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Modal;
