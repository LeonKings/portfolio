import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I can help you build your dream website",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/globe.gif",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Stack",
    description: "Technology I'm familiar with",
    className: "lg:col-span-5 row-span-6",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 5,
    title: "ReactJS",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/re.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "JavaScript",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/js.svg",
    spareImg: "",
  },
  {
    id: 7,
    title: "NextJS",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/next.svg",
    spareImg: "",
  },
  {
    id: 8,
    title: "Typescript",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/ts.svg",
    spareImg: "",
  },
  {
    id: 9,
    title: "TailwindCSS",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/tail.svg",
    spareImg: "",
  },
  {
    id: 10,
    title: "Laravel",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/laravel.svg",
    spareImg: "",
  },
  {
    id: 11,
    title: "PHP",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/php.svg",
    spareImg: "",
  },
  {
    id: 12,
    title: "MySQL",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/mysql.svg",
    spareImg: "",
  },
  {
    id: 13,
    title: "Bootstrap",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/bsst.svg",
    spareImg: "",
  },
  {
    id: 14,
    title: "HTML",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/html.svg",
    spareImg: "",
  },
  {
    id: 15,
    title: "CSS",
    description: "",
    className: "col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/css.svg",
  },
  {
    id: 16,
    title: "Aceternity UI",
    description: "",
    className: "col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/acui.png ",
  },
  {
    id: 17,
    title: "Material UI",
    description: "",
    className: "lg:col-span-1 row-span-1",
    imgClassName: "md:h-full md:w-full h-[80%] w-[80%] opacity-50 mx-auto",
    titleClassName: "justify-start",
    img: "/mui.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Cafe Landing Page",
    des: "Web landing page for a cafe using ReactJS.",
    img: "/portfolio1.png",
    iconLists: ["/re.svg"],
    link: "https://orangered-rook-493442.hostingersite.com/",
  },
  {
    id: 2,
    title: "Fitness App",
    des: "Fitness app using ReactJS, Material UI, and Rapid API.",
    img: "/portfolio2.png",
    iconLists: ["/re.svg", "/mui.svg"],
    link: "https://slateblue-whale-592849.hostingersite.com/",
  },
  {
    id: 3,
    title: "Swipelancer",
    des: "Freelancing platform using Laravel, php, and MySQL.",
    img: "/portfolio3.png",
    iconLists: ["/laravel.svg", "/php.svg", "/mysql.svg"],
    link: "https://github.com/LeonKings/Swipelancer.git",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/LeonKings",
  },
  {
    id: 2,
    img: "/email.svg",
    link: "mailto:lemuelasaf10@gmail.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/lemuel-asaf-4128831b6/",
  },
];
