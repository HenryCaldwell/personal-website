import text from "../assets/icons/default.svg";
import info from "../assets/icons/info.svg";
import java from "../assets/icons/java.svg";
import python from "../assets/icons/python.svg";
import react from "../assets/icons/react.svg";
import blackjackCVEVEngine from "./BlackjackCVEVEngine.java?raw";
import exampleCode from "./Example.java?raw";
import personalWebsite from "./PersonalWebsite.java?raw";
import README from "./README.java?raw";
import simpleBlockchain from "./SimpleBlockchain.java?raw";

export const fileData = [
  {
    id: "root-folder",
    type: "folder",
    name: "HENRY CALDWELL",
    children: [
      {
        id: "read-me",
        type: "file",
        name: "README.md",
        icon: info,
        content: README,
      },
      {
        id: "project-folder",
        type: "folder",
        name: "projects",
        children: [
          {
            id: "blackjack-cv-ev-engine-file",
            type: "file",
            name: "blackjack-cv-ev-engine.py",
            icon: python,
            content: blackjackCVEVEngine,
          },
          {
            id: "simple-blockchain-file",
            type: "file",
            name: "simple-blockchain.java",
            icon: java,
            content: simpleBlockchain,
          },
          // {
          //   id: "schedulytics-file",
          //   type: "file",
          //   name: "schedulytics.tsx",
          //   icon: react,
          //   content: exampleCode,
          // },
          {
            id: "personal-website-file",
            type: "file",
            name: "personal-website.jsx",
            icon: react,
            content: personalWebsite,
          },
        ],
      },
      {
        id: "experience-folder",
        type: "folder",
        name: "experience",
        children: [
          {
            id: "kmw-technology-llc-file",
            type: "file",
            name: "kmw-technology.txt",
            icon: text,
            content: exampleCode,
          },
        ],
      },
      {
        id: "education-folder",
        type: "folder",
        name: "education",
        children: [
          {
            id: "undergraduate-file",
            type: "file",
            name: "undergraduate.txt",
            icon: text,
            content: exampleCode,
          },
          {
            id: "certifications-file",
            type: "file",
            name: "certifications.txt",
            icon: text,
            content: exampleCode,
          },
        ],
      },
      {
        id: "skills",
        type: "folder",
        name: "skills",
        children: [
          {
            id: "languages-file",
            type: "file",
            name: "languages.txt",
            icon: text,
            content: exampleCode,
          },
          {
            id: "software-file",
            type: "file",
            name: "software.txt",
            icon: text,
            content: exampleCode,
          },
          {
            id: "tools-file",
            type: "file",
            name: "tools.txt",
            icon: text,
            content: exampleCode,
          },
        ],
      },
    ],
  },
];
