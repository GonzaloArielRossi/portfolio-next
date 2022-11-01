import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';

function Cta() {
  const router = useRouter();
  const handleContactMe = (e) => {
    e.preventDefault();
    router.push('/contact');
  };

  return (
    <section
      className={isMobile ? '--cta-space mobile--gap' : '--cta-space'}
      id="--section-separation"
    >
      <div
        className={
          isMobile
            ? 'box columns --cta-color has-text-light --border m-0'
            : 'box columns --cta-color has-text-light --border m-0 --pad-0'
          // : 'box columns --cta-color has-text-light --border ml-0 mr-0 mt-0 mb-0 --pad-0'
        }
      >
        <div
          className={
            isMobile
              ? 'column has-text-weight-bold has-text-centered is-size-3 --cta-pading my-0'
              : 'column has-text-weight-bold has-text-centered is-size-3 --cta-pading my-6'
          }
        >
          Contact Me
        </div>
        <div
          className={
            isMobile
              ? 'column has-text-centered is-size-4 --cta-pading is-align-self-center my-0'
              : '"column has-text-centered is-size-4 --cta-pading is-align-self-center my-6"'
          }
        >
          <p>{"Like what you see? Let's talk!"}</p>
        </div>
        <div
          className={
            isMobile
              ? 'column has-text-centered --cta-pading my-0'
              : 'column has-text-centered --cta-pading my-6'
          }
        >
          <button
            className="button is-outlined is-info has-text-weight-bold is-size-5 --border"
            onClick={handleContactMe}
          >
            👉 Send me a message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
