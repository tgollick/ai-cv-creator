import React, { useRef, useState } from "react";
import CV from "./components/CV.jsx";
import EducationInput from "./components/EducationInput.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HobbiesInput from "./components/HobbiesInput.jsx";
import JobInput from "./components/JobInput.jsx";
import SkillsInput from "./components/SkillsInput.jsx";
import SocialMedias from "./components/SocialMedias.jsx";

const App = () => {
  const [sectionvisible, setSectionVisible] = useState(0);

  const [userdetails, setUserDetails] = useState("");

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

  const refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7];

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

  const components = [
    {
      component: (
        <Hero showSection={showSection} handleUserDetails={handleUserDetails} />
      ),
      index: 0,
    },
    {
      component: (
        <JobInput
          showSection={showSection}
          stepNumber={"1"}
          innerRef={ref1}
          sectionTitle={"First, enter your current/most recent role."}
        />
      ),
      index: 1,
    },
    {
      component: (
        <JobInput
          showSection={showSection}
          stepNumber={"2"}
          innerRef={ref2}
          sectionTitle={"Now enter your previous job role."}
        />
      ),
      index: 2,
    },
    {
      component: <SkillsInput showSection={showSection} innerRef={ref3} />,
      index: 3,
    },
    {
      component: <EducationInput showSection={showSection} innerRef={ref4} />,
      index: 4,
    },
    {
      component: <HobbiesInput showSection={showSection} innerRef={ref5} />,
      index: 5,
    },
    {
      component: <SocialMedias showSection={showSection} innerRef={ref6} />,
      index: 6,
    },
    {
      component: <CV innerRef={ref7} userDetails={userdetails} />,
      index: 7,
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header userDetails={userdetails} />

      <div>
        {components.map((item, index) => {
          return item.index <= sectionvisible ? (
            <div key={index}>{item.component}</div>
          ) : null;
        })}
      </div>

      {/* Footer */}
    </div>
  );
};

export default App;
