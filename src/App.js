import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setSectionVisible(0);
  }, []);

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

  const components = [
    {
      component: (
        <Hero
          setSectionVisible={setSectionVisible}
          setUserDetails={setUserDetails}
          userdetails={userdetails}
        />
      ),
    },
    {
      component: (
        <CurrentJobInput
          setJobRole1={setJobRole1}
          setSectionVisible={setSectionVisible}
          jobRole1={jobRole1}
        />
      ),
    },
    {
      component: <PrevJobInput setJobRole2={setJobRole2} />,
    },
    {
      component: <SkillsInput setCVSkills={setSkills} />,
    },
    {
      component: <EducationInput setEducation={setEducation} />,
    },
    {
      component: <HobbiesInput setCVHobbies={setHobbies} />,
    },
    {
      component: <SocialMedias setCVSocials={setSocials} />,
    },
    {
      component: <GenerateCV cvData={data} generateCV={generateCV} />,
    },
    {
      component: <CV userDetails={userdetails} cvData={data} />,
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header userDetails={userdetails} />

      <div>
        {components.map((component, index) =>
          index <= sectionvisible ? component.component : null
        )}
      </div>

      {/* Footer */}
    </div>
  );
};

export default App;
