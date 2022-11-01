import { isMobile } from 'react-device-detect';

import Code from './Code';

export const Hero = () => {
  return (
    <>
      <section
        className={
          isMobile
            ? ' mobile--gap --section-gap --padding'
            : '--section-gap --padding'
        }
      >
        <Code />
      </section>
    </>
  );
};

export default Code;
