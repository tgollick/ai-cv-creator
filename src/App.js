import React, { useRef, useState } from "react";
import Header from "./components/Header.jsx";
import CurrentRole from "./components/CurrentRole.jsx";
import PreviousRole from "./components/PreviousRole.jsx";

const App = () => {
  const [previousrole, setPreviousRole] = useState(false);

  const scrollPreviousRole = useRef();

  const showPreviousRole = (input) => {
    setPreviousRole(true);
    setTimeout(() => {
      scrollPreviousRole.current.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Job Role */}
      <section id="current-role">
        <CurrentRole handleNext={showPreviousRole} />
      </section>

      {/* Previous Role */}
      <section id="previous-role">
        <PreviousRole show={previousrole} divRef={scrollPreviousRole} />
      </section>

      {/* Skills */}

      {/* Education */}

      {/* Hobbies */}

      {/* Footer */}
    </div>
  );
};

export default App;
