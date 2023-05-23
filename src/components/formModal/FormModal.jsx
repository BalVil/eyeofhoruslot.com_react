import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Modal from 'components/modal';
import GameModal from 'components/gameModal/GameModal';
import TermsModal from 'components/terms&PrivacyModal/TermsModal';
import PrivacyModal from 'components/terms&PrivacyModal/PrivacyModal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import Button from 'components/button/Button';
import styles from './FormModal.module.scss';
import modalImage from 'images/game.jpg';

function FormModal({ setIsOpen }) {
  const [isOpenGame, setIsOpenGame] = useState(false);
  const [isOpenTerms, setIsOpenTerms] = useState(false);
  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const handleSubmit = values => {
    if (values) {
      setIsOpenGame(true);
    }
  };

  return (
    <>
      {setIsOpen && (
        <Modal variant="formModal">
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => setIsOpen(false)}
          />

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
                <label className={styles.checkboxLabel}>
                  <Field
                    className={styles.checkbox}
                    required
                    name="acceptTerms"
                    type="checkbox"
                  />
                  <span className={styles.checkboxIcon}>
                    I'm 18 years old and I accept the&nbsp;
                    <a
                      href="#"
                      className={styles.link}
                      onClick={() => setIsOpenTerms(true)}
                    >
                      Terms & Conditions&nbsp;
                    </a>
                    and&nbsp;
                    <a
                      href="#"
                      className={styles.link}
                      onClick={() => setIsOpenPrivacy(true)}
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
                <Button type={'submit'} title={'Submit'} />
              </Form>
            )}
          </Formik>
        </Modal>
      )}
      {isOpenGame && <GameModal showGame={setIsOpen} />}
      {isOpenTerms && <TermsModal showTerms={setIsOpenTerms} />}
      {isOpenPrivacy && <PrivacyModal showPrivacy={setIsOpenPrivacy} />}
    </>
  );
}

export default FormModal;
