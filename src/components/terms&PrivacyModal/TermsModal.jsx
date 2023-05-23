import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function TermsModal({ showTerms }) {
  return (
    <>
      {showTerms && (
        <Modal variant="modal">
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => showTerms(false)}
          />
          <ModalTextWrap title={'Terms & Conditions'}>
            <p>
              We kindly ask that you read and understand these terms and
              conditions before using our service. The capitalized words in
              these terms and conditions have the same meaning regardless of
              whether they are singular or plural.
            </p>
            <p>
              The term "Site" in these terms and conditions refers to "the
              Site," "We," "Us," or "Our." A "Device" is any digital device
              capable of connecting to the Service, such as a computer,
              smartphone, or tablet. The term "Service" refers to our Website,
              and the term "You" refers to the person or entity using the
              Service.
            </p>
            <p>
              You acknowledge that you have read, understood, and agreed to be
              bound by these terms and conditions by using the Service. They
              define all users' rights and responsibilities and establish the
              relationship between you and the Site.
            </p>
            <p>
              Your use of the Service is conditional on your acceptance and
              compliance with these terms and conditions, which apply to all
              visitors and users.
            </p>
            <p>
              You agree to be bound by these terms and conditions by accessing
              or using the Service. You may not use the Service if you disagree
              with any part of them.
            </p>
            <p>
              You must confirm that you are at least 18 years old in order to
              use the Service. Individuals under the age of 18 are not allowed
              to use the Service.
            </p>
            <p>
              Furthermore, your use of the Service is governed by your
              acceptance and compliance with the Site's Privacy Policy. Our
              Privacy Policy describes your privacy rights, the legal safeguards
              in place, and our practices for collecting, using, and disclosing
              your personal information. Before using the Service, we recommend
              that you read the Privacy Policy.
            </p>
            <p>
              The Service may include hyperlinks to third-party websites. We and
              our suppliers, however, are not liable for any damages resulting
              from the use or inability to use the Service.
            </p>
            <p>
              The Service is provided on a "AS IS" and "AS AVAILABLE" basis,
              with no express or implied warranties. To the fullest extent
              permitted by law, we disclaim all warranties.
            </p>
            <p>
              We make no warranty or representation about the Service's ability
              to meet your needs, achieve desired results, or run without
              interruptions or errors. We also do not guarantee the accuracy,
              reliability, or currency of any information made available via the
              Service.
            </p>
            <p>
              Please contact us at info@jamminjarslots.com if you have any
              questions about these terms and conditions.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;
