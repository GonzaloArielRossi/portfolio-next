import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

import { formVerification } from '../../helpers/formVerification';

function ContactForm() {
  const router = useRouter();
  const form = useRef();
  const [modal, setModal] = useState({
    state: false,
    title: '✅Message Sent Successfully!',
    line1: '🙏Thank you for your interest',
    line2: '📩I will respond shortly'
  });
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      !formVerification(
        e.target.name.value,
        e.target.email.value,
        e.target.message.value
      )
    ) {
      setModal({
        state: true,
        title: '⛔Oops! something went wrong',
        line1: '🙏Email service is currently down',
        line2: '📩Please write to me at gonzaloarielrossi@gmail.com'
      });
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          result.status === 200 && setModal({ ...modal, state: true });
        },
        () => {
          setLoading(false);
          setModal({
            state: true,
            title: '⛔Oops! something went wrong',
            line1: '🙏Email service is currently down',
            line2: '📩Please write to me at gonzaloarielrossi@gmail.com'
          });
        }
      );
  };
  const handleCloseModal = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div>
      <h1 className="title is-size-2 has-text-centered mt-6 mb-6 px-6">
        Thanks for reaching out!
      </h1>
      <form ref={form} className="mt-6 mb-6 --width" onSubmit={sendEmail}>
        <div className="is-flex is-flex-direction-column">
          <div className="mt-6">
            <div className="is-flex is-justify-content-space-evenly --flex-gap-2 --change-flex-dir">
              <div className="field is-flex-grow-1">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    maxLength={50}
                    name="name"
                    placeholder="Name"
                    required="required"
                    type="text"
                  />
                </div>
              </div>
              <div className="field is-flex-grow-1">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    maxLength={50}
                    name="email"
                    placeholder="Email"
                    required="required"
                    type="email"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field pt-6 pb-4">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                maxLength={500}
                name="message"
                placeholder="Message"
                required="required"
                rows="8"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="control ml-auto is-flex is-justify-content-flex-end">
          <button
            className={
              loading
                ? 'button is-primary is-rounded has-text-weight-bold is-size-5 is-loading'
                : 'button is-primary is-rounded has-text-weight-bold is-size-5'
            }
          >
            Send
          </button>
        </div>
      </form>
      {modal.state && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card ">
            <header className="modal-card-head has-text-centered ">
              <p className="modal-card-title is-size-3">{modal.title}</p>
            </header>
            <section className="modal-card-body has-text-centered is-size-5">
              <p>{modal.line1}</p>
              <p>{modal.line2}</p>
            </section>
            <footer className="modal-card-foot is-justify-content-space-around">
              <button
                aria-label="back to home"
                className="button is-primary is-rounded has-text-weight-bold is-size-6"
                onClick={handleCloseModal}
              >
                Back To Home
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
