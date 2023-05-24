import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function PrivacyModal({ showPrivacy }) {
  return (
    <>
      {showPrivacy && (
        <Modal variant="modal" closeModal={showPrivacy}>
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => showPrivacy(false)}
          />
          <ModalTextWrap title={'Privacy Policy'}>
            <p>
              The collection, use, and disclosure of user information in
              connection with our service is governed by this Privacy Policy. It
              defines privacy rights and legal safeguards.
            </p>
            <p>
              You agree to the collection and use of your information as
              described in this Privacy Policy by using our service.
            </p>
            <p>Definitions and Application</p>
            <p>
              The definitions of capitalized terms used in this Privacy Policy
              can be found below. These definitions are applicable whether the
              terms are used singularly or plurally.
            </p>
            <p>Definitions</p>
            <p>For the purposes of this Privacy Statement:</p>
            <p>
              Account: A unique account created by users in order to access our
              service. Site: The organization in charge of providing the
              service, also known as "we," "us," or "our." <br />
              Cookies are small files that a website places on computers, mobile
              devices, or other devices to store information such as browsing
              history.
              <br />
              Device: Any digital device that can connect to the service, such
              as a computer, cellphone, or digital tablet. <br />
              Personal Data: Any information pertaining to a specific,
              identified, or identifiable individual. <br />
              The website or platform provided by our site is referred to as a
              service. <br />
              Third-party Any website or social network that allows users to log
              in or create an account to access our service is considered a
              social media service. <br />
              Usage Data: Data collected automatically, such as information
              about user interactions with the service.
            </p>
            <p>Personal Data Collection and Use</p>
            <p>Data Structures</p>
            <p>
              While using our service, we may collect personally identifiable
              information from users, which may be used to contact or identify
              them. This information could include, but is not limited to:
            </p>
            <p>Email address Information Use</p>
            <p>
              Certain information is automatically collected when users access
              our service. This information includes the device's IP address,
              browser type, browser version, pages visited, visit duration,
              unique device identifiers, and other diagnostic information.
            </p>
            <p>
              When using a mobile device to access the service, additional
              information such as the type of mobile device, its unique ID,
              device IP address, mobile operating system, type of mobile
              internet browser, unique device identifiers, and other diagnostic
              data may be collected.
            </p>
            <p>
              Moreover, when users visit our service via a browser or a mobile
              device, information may be collected.
            </p>
            <p>Tracking Technologies and Cookies</p>
            <p>
              To track activity on our service and store certain information, we
              use cookies and similar tracking technologies such as beacons,
              tags, and scripts. These technologies assist us in improving and
              analyzing our service.
            </p>
            <p>
              The Site collects and uses Personal Data from users for the
              following purposes:
            </p>
            <p>
              Providing and maintaining the service, as well as tracking usage.
              <br />
              Managing user accounts, registrations, and service functionality
              access. <br />
              Making and carrying out purchase contracts for goods or services
              obtained through the service.
              <br />
              Contacting users via email or electronic communication to provide
              updates or to notify them of new functionalities, products,
              services, or security updates. Managing and responding to user
              requests.
            </p>
            <p>
              Personal information may be disclosed in the following situations:
            </p>
            <p>
              Sharing Personal Data with service providers for the purpose of
              monitoring and analyzing service usage and contacting users.
            </p>
            <p>Personal Data Retention</p>
            <p>
              We only keep users' Personal Data for as long as is necessary to
              fulfill legal obligations, resolve disputes, and enforce legal
              agreements and policies, as outlined in this Privacy Policy. Usage
              Data is typically kept for a shorter period of time unless it is
              required for security, improving service functionality, or is
              required by law.
            </p>
            <p>
              We prioritize personal information security, but recognize that no
              method of Internet transmission or electronic storage is
              completely secure. While we take commercially reasonable
              precautions to safeguard personal information, we cannot guarantee
              its complete security.
            </p>
            <p>
              Please keep in mind that requesting the removal of online content
              or information does not guarantee its complete removal. In some
              cases, the law may not allow or require its removal.
            </p>
            <p>
              We reserve the right to change our privacy policies at any time,
              and any changes will be communicated by posting the updated policy
              on this page. Users will be notified by email and/or prominent
              notices on our website.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default PrivacyModal;
