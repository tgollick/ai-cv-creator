import React, { useState } from "react";
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
    const prevSection = sectionvisible;

    setSectionVisible(prevSection + 1);
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

  const components = [
    {
      component: (
        <Hero showSection={showSection} handleUserDetails={handleUserDetails} />
      ),
    },
    {
      component: (
        <CurrentJobInput showSection={showSection} setJobRole1={setJobRole1} />
      ),
    },
    {
      component: (
        <PrevJobInput showSection={showSection} setJobRole2={setJobRole2} />
      ),
    },
    {
      component: (
        <SkillsInput setCVSkills={setSkills} showSection={showSection} />
      ),
    },
    {
      component: (
        <EducationInput setEducation={setEducation} showSection={showSection} />
      ),
    },
    {
      component: (
        <HobbiesInput setCVHobbies={setHobbies} showSection={showSection} />
      ),
    },
    {
      component: (
        <SocialMedias setCVSocials={setSocials} showSection={showSection} />
      ),
    },
    {
      component: (
        <GenerateCV
          cvData={data}
          generateCV={generateCV}
          showSection={showSection}
        />
      ),
    },
    {
      component: <CV userDetails={userdetails} cvData={data} />,
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header userDetails={userdetails} />

      <div>{components[sectionvisible].component}</div>

      {/* Footer */}
    </div>
  );
};

export default App;
