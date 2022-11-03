import { isMobile } from 'react-device-detect';

import Code from './Code';

export const Hero = () => {
  return (
    <>
      <section
        className={isMobile ? ' mobile--gap --section-gap' : '--section-gap'}
      >
        <Code />
      </section>
    </>
  );
};

export default Code;
