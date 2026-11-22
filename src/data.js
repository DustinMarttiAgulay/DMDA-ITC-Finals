import dustin from "./assets/images/dustin1.png";
import aboutme1 from "./assets/images/aboutme1.png";
import aboutme2 from "./assets/images/aboutme2.png";
import aboutme3 from "./assets/images/aboutme3.png";
import aboutme4 from "./assets/images/aboutme4.png";
import aboutme5 from "./assets/images/aboutme5.png";
import aboutme6 from "./assets/images/aboutme6.png";

export const profile = {
  name: "Dustin Martti D. Agulay",
  tagline: "I am a student who's currently learning programming and web development.",
  intro: "Hello I am Dustin. I am a student at Adamson University. I am currently learning programming and web development.",
  context: "I want to learn programming and web development so that I can make websites and applications. I heard that there are many job opportunities in this field, so I want to learn it to have a career in the future. It is a hard field to learn, but I am willing to put in the effort to learn it. I am currently learning programming and web development through online resources and tutorials. I am also taking a course in web development at my school. I hope to become a skilled programmer and web developer in the future.",
  photo: dustin, 
};

export const education = [
  {
    school: "Adamson University",
    program: "BSIT",
    years: "1st Year",
    details: "Currently studying for a degree in Information Technology. I am still learning programming and web development.",
  },
  {
    school: "STI College Las Pinas",
    program: "ITMAWD",
    years: "2024 – 2026",
    details: "Did some basic programming and web development",
  },
  {
    school: "Saint Alphonsus Liguori Integrated School",
    program: "Grade School",
    years: "2020 – 2024",
    details: "High School",
  },
];

export const about = {
  paragraphs: [
    { statement: "I am a student learning programming and web development. (This will probably be my posture in a few years)", image: aboutme1 , figcaption: "Figure 1: This is a cat" },
    { statement: "My hobbies include drawing, watching shows, exercising, and using social media.", image: aboutme2 , figcaption: "Figure 2: This is my drawing from ms paint" },
    { statement: "I am currently learning programming and web development through online resources and tutorials. I am also taking a course in web development at my school.", image: aboutme3 , figcaption: "Figure 3: Ishowspeed" },
    { statement: "I hope to become a skilled programmer and web developer in the future.", image: aboutme4 , figcaption: "Figure 4: A guy with blue eyes" },
    { statement: "I like to play video games. Roblox and Minecraft", image: aboutme5 , figcaption: "Figure 5: A movie poster about a movie that I've never seen before" },
    { statement: "I like writing my opinions about different topics from social media.", image: aboutme6 , figcaption: "Figure 6: Jaden Smith" },
  ],
  facts: [
    { label: "Lives in", value: "Bacoor, Cavite" },
    { label: "Currently", value: "Currently a Freshman in Adamson University" },
    { label: "Interests", value: "Drawing and making websites" },
  ],
};

export const skills = [
  { group: "Technical Skills", items: ["Websites", "Console Applications"], description: "I have experience in creating websites and console applications using various programming languages. I do want to learn more overtime." },
  { group: "Creativity", items: ["Drawing"], description: "I do like to draw on the side. I usually draw alongside my notes because it's fun. I also use to to draw my ideas as quickly as possible whenever I needed to explain something not in word form." },
  { group: "Programming Languages", items: ["C#", "HTML, CSS, JavaScript"], description: "I have some experience with HTML, CSS, and JavaScript for making websites. C# is a bit complicated and is similar to Java, and is used for a wide variety of applications." },
];

export const contact = {
  message: "This is my student email and GitHub account:",
  email: "dustin.martti.agulay@adamson.edu.ph",
  links: [
    { label: "Github account", url: "https://github.com/DustinMarttiAgulay" }
  ],
};
