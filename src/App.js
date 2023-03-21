import React, { useRef, useState } from "react";
import EducationInput from "./components/EducationInput.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import JobInput from "./components/JobInput.jsx";
import SkillsInput from "./components/SkillsInput.jsx";

const App = () => {
  const [sectionvisible, setSectionVisible] = useState(0);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const refs = [ref1, ref2, ref3, ref4];

  const showSection = () => {
    const tempSection = sectionvisible;
    setSectionVisible(tempSection + 1);

    setTimeout(() => {
      refs[tempSection].current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 500);
  };

  const components = [
    {
      component: <Hero showSection={showSection} />,
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
  ];

  return (
    <div>
      {/* Header */}
      <Header />

      <div>
        {components.map((item, index) => {
          return item.index <= sectionvisible ? (
            <div key={index}>{item.component}</div>
          ) : null;
        })}
      </div>

      {/* Hobbies */}
      <section id="hobbies"></section>

      {/* Footer */}
    </div>
  );
};

export default App;
