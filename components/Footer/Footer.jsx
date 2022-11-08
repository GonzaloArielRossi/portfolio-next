import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <div>
      <footer className="--footer has-background-primary">
        <div
          className="content --footer-text is-flex is-flex-direction-column
         is-justify-content-center is-size-5 is-align-items-center --flex-gap-1"
        >
          <div className="columns is-gapless --flex-gap-2 ">
            <span className="has-text-weight-bold column --flex-basis  ">
              🌎 Buenos Aires, Argentina
            </span>
            <Link
              className="has-text-weight-bold column --flex-basis"
              href="mailto:gonzaloarielrossi@gmail.com?subject=Contact%20via%20gonzalorossi.dev"
              rel="noreferrer"
              target="_blank"
            >
              <span className="--hover-color-alt --footer-text">
                📩 gonzaloarielrossi@gmail.com
              </span>
            </Link>
            <Link
              className="has-text-weight-bold column --flex-basis"
              href="https://wa.me/5491130334862"
              rel="noreferrer"
              target="_blank"
            >
              <span className="--hover-color-alt --footer-text">
                📞 (+54) 9 11-3033-4862
              </span>
            </Link>
          </div>

          <div className="is-flex mb-4 is-align-items-center ">
            <Link
              className="is-flex is-align-items-center "
              href="https://www.linkedin.com/in/gonzaloarossi/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin className="--icon mr-4 --hover-color-alt --footer-text" />
            </Link>
            <Link
              className="is-flex is-align-items-center"
              href="https://github.com/GonzaloArielRossi"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub className="--icon --hover-color-alt --footer-text" />
            </Link>
          </div>
          <span className="has-text-weight-bold">
            ©️ Copyright 2022 by Gonzalo Ariel Rossi
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
