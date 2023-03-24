import React, { useEffect, useRef, useState } from "react";
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
  const [data, setData] = useState({});

  const generateCV = () => {
    setData({
      userFullName: userdetails.name,
      userImage: userdetails.img,
      userEmail: userdetails.email,
      userGeneralRole: "Software Engineer",
      userPersonalSummary:
        "Experienced software engineer with a proven track record at top tech companies Amazon and Netflix. Skilled in designing and implementing scalable solutions using industry-standard tools and practices. Strong problem-solving skills and ability to work effectively in cross-functional teams. Highly adaptable and able to learn quickly in fast-paced environments.",
      jobs: [
        {
          jobRole: "AWS Software Engineer",
          companyName: "Amazon",
          dateStart: "03/07/2022",
          dateEnd: "Current",
          jobDescription:
            "As an AWS Engineer at Amazon, I designed, deployed, and managed scalable AWS solutions using CloudFormation and Ansible. I monitored system health and performance and proactively troubleshot issues, ensuring high availability. Collaborating with cross-functional teams, I recommended and implemented new solutions to optimize the cloud infrastructure. I stayed up-to-date with new AWS services and features to suggest improvements, and actively participated in on-call rotations. Overall, I ensured the reliability, scalability, and security of Amazon's cloud infrastructure.",
        },
        {
          jobRole: "Entry Level Software Engineer",
          companyName: "Netflix",
          dateStart: "21/01/2022",
          dateEnd: "30/06/2022",
          jobDescription:
            "As an entry-level Software Engineer at Netflix, I contributed to the development and maintenance of software applications that supported the company's streaming platform. I collaborated with experienced engineers to write, test, and deploy high-quality code using industry-standard tools and practices. Through my work, I gained experience with programming languages and technologies such as Java, JavaScript, and React. I also learned how to work in a fast-paced, agile environment, and how to communicate effectively with cross-functional teams. Overall, I was an active participant in creating and maintaining the software infrastructure that enabled Netflix to provide a seamless streaming experience for its users.",
        },
      ],
      education: {
        educationDegree: "Computer Science",
        educationStart: "2017",
        educationEnd: "2020",
        educationSchoolName: "Manchester Metropolitan University",
        educationGrade: "1st",
        educationDescription:
          "As a recent graduate of Manchester Metropolitan University with a First-Class degree in Computer Science, I have a strong foundation in core computer science concepts and technologies. Through my coursework and projects, I gained experience with programming languages such as Java, C++, and Python, as well as with web development technologies such as HTML, CSS, and JavaScript. I also developed skills in problem-solving, algorithm design, and data analysis.",
      },
      hobbies: [
        "Powerlifting",
        "Mountain Biking",
        "Ethical Hacking",
        "Professional Procrastinating",
        "Baking",
      ],
      socials: [
        {
          userName: "tgollick",
          socialImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png",
        },
        {
          userName: "Thomas Gollick",
          socialImg:
            "https://pbs.twimg.com/profile_images/1508518003184349187/1KQYoqPY_400x400.png",
        },
        {
          userName: "t.gollick",
          socialImg: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        },
      ],
      skills: [
        "Working well under pressure",
        "Time keeping",
        "Attending university",
        "Problem solving",
        "Microsoft Word",
        "Speed typing",
      ],
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

  const refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7];

  const showSection = () => {
    const tempSection = sectionvisible;

    if (sectionvisible === 6) {
      generateCV();
    }

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
      component: <SocialMedias innerRef={ref6} showSection={showSection} />,
      index: 6,
    },
    {
      component: <CV innerRef={ref7} userDetails={userdetails} cvData={data} />,
      index: 7,
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header userDetails={userdetails} />

      <div>
        {sectionvisible === 7 ? (
          <div>{components[7].component}</div>
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
