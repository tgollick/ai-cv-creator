import React, { useRef, useState } from "react";
import CV from "./sections/CVsection.jsx";
import EducationInput from "./sections/EducationInput.jsx";
import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import HobbiesInput from "./sections/HobbiesInput.jsx";
import CurrentJobInput from "./sections/currentJobInput.jsx";
import PrevJobInput from "./sections/prevJobInput.jsx";
import SkillsInput from "./sections/SkillsInput.jsx";
import SocialMedias from "./sections/SocialMedias.jsx";
import { personalCompletion } from "./api/personalCompletion.js";
import GenerateCV from "./sections/GenerateCV.jsx";

const App = () => {
  const [sectionvisible, setSectionVisible] = useState(0);
  const [userdetails, setUserDetails] = useState("");
  const [data, setData] = useState({});

  const [jobRole1, setJobRole1] = useState();
  const [jobRole2, setJobRole2] = useState();

  const [education, setEducation] = useState();

  const [hobbies, setHobbies] = useState();

  const [skills, setSkills] = useState();

  const [socials, setSocials] = useState();

  const showSection = () => {
    const tempSection = sectionvisible;

    setSectionVisible(tempSection + 1);

    setTimeout(() => {
      refs[sectionvisible].current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 500);
  };

  const generateCV = async () => {
    const personalSummary = await personalCompletion(
      jobRole2,
      jobRole1,
      education
    );

    setData({
      userFullName: userdetails.name,
      userImage: userdetails.img,
      userEmail: userdetails.email,
      userGeneralRole: jobRole1.jobRole,
      userPersonalSummary: personalSummary,
      jobs: [
        {
          jobRole: jobRole1.jobRole,
          companyName: jobRole1.companyName,
          dateStart: "03/07/2022",
          dateEnd: "Current",
          jobDescription: jobRole1.jobDescription,
        },
        {
          jobRole: jobRole2.jobRole,
          companyName: jobRole2.companyName,
          dateStart: "21/01/2022",
          dateEnd: "30/06/2022",
          jobDescription: jobRole2.jobDescription,
        },
      ],
      education: {
        educationDegree: education.degree,
        educationStart: "2017",
        educationEnd: "2020",
        educationSchoolName: education.schoolName,
        educationGrade: education.grade,
        educationDescription: education.description,
      },
      hobbies: hobbies,
      socials: socials,
      skills: skills,
    });
  };

  const handleUserDetails = (name, img, email) => {
    setUserDetails({
      name: name,
      img: img,
      email: email,
    });
  };

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();

  const refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8];

  const components = [
    {
      component: (
        <Hero showSection={showSection} handleUserDetails={handleUserDetails} />
      ),
      index: 0,
    },
    {
      component: (
        <CurrentJobInput
          innerRef={ref1}
          showSection={showSection}
          setJobRole1={setJobRole1}
        />
      ),
      index: 1,
    },
    {
      component: (
        <PrevJobInput
          innerRef={ref2}
          showSection={showSection}
          setJobRole2={setJobRole2}
        />
      ),
      index: 2,
    },
    {
      component: (
        <SkillsInput
          setCVSkills={setSkills}
          showSection={showSection}
          innerRef={ref3}
        />
      ),
      index: 3,
    },
    {
      component: (
        <EducationInput
          setEducation={setEducation}
          showSection={showSection}
          innerRef={ref4}
        />
      ),
      index: 4,
    },
    {
      component: (
        <HobbiesInput
          setCVHobbies={setHobbies}
          showSection={showSection}
          innerRef={ref5}
        />
      ),
      index: 5,
    },
    {
      component: (
        <SocialMedias
          setCVSocials={setSocials}
          innerRef={ref6}
          showSection={showSection}
        />
      ),
      index: 6,
    },
    {
      component: (
        <GenerateCV
          innerRef={ref7}
          cvData={data}
          generateCV={generateCV}
          showSection={showSection}
        />
      ),
      index: 7,
    },
    {
      component: <CV innerRef={ref8} userDetails={userdetails} cvData={data} />,
      index: 8,
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header userDetails={userdetails} />

      <div>
        {sectionvisible === 8 ? (
          <div>{components[sectionvisible].component}</div>
        ) : (
          components.map((item, index) => {
            return item.index <= sectionvisible ? (
              <div key={index}>{item.component}</div>
            ) : null;
          })
        )}
      </div>

      {/* Footer */}
    </div>
  );
};

export default App;
