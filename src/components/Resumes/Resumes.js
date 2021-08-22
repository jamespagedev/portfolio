import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths } from '../../globals/CssMixins.js';

// components
import Resume from './Resume.js';

// variables
const Data = [
  {
    resumeTitle: "Full Stack Dev",
    resumeLink: "https://drive.google.com/file/d/1NhYE7X4DKb6aKQ6w-aKVWce82s1InQJ8/view?usp=sharing",
  },
  {
    resumeTitle: "Software Dev",
    resumeLink: "https://drive.google.com/file/d/1yz0-yxCSYEUX5lCv_dl8-KBFF0Dx5rPJ/view?usp=sharing",
  },
  {
    resumeTitle: "Front-End Dev",
    resumeLink: "https://drive.google.com/file/d/1Znx9ML-O22EtjXDRdpbjGNVtpALgjoRA/view?usp=sharing",
  },
  {
    resumeTitle: "Backend-End Dev",
    resumeLink: "https://drive.google.com/file/d/1QxNGg07V9NTNhtydRz0JWlrsuhcTLqA_/view?usp=sharing",
  },
  {
    resumeTitle: "Test Engineer",
    resumeLink: "https://drive.google.com/file/d/1-mTmG1OuabB674u3vU-Xt-tunXYN-CVT/view?usp=sharing",
  },
  {
    resumeTitle: "IT Admin",
    resumeLink: "https://drive.google.com/file/d/1BbfN8caw8aEiVvEOD-h4quuOkJW08wTA/view?usp=sharing",
  }
]

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 87%;
  margin-bottom: 5rem;

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
  }
`;

//=========================================== component ===========================================
const Resumes = () => {
  return (
    <DivWrapper>
      {Data.map((resume, resumeNumber) => {
        return <Resume resume={resume} key={resumeNumber} />
      })}
    </DivWrapper>
  );
};

export default Resumes;