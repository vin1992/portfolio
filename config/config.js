
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faLink, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Zhigang Xu",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://vin1992.github.io/",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Zhigang Xu",
  description: "A Web Developer skilled in building responsive websites and embedded web apps, with expertise in both front-end and back-end technologies.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1XUY_J0HP3d0SYyrihvP0-t4USy3cyrI4CKBK3OY2N_c/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am a Web Developer with 6 years of experience specializing in front-end and full-stack development. I have a strong background in creating responsive and user-friendly web applications using HTML, CSS, JavaScript, and various frameworks such as React and Vue.js. I also have experience with backend technologies like Node.js and Express.",
    "I graduated from Algonquin College with a diploma in Web Development and Internet Applications, building a solid foundation in creating responsive, user-focused websites and applications using full stack technologies like Python, C# and MariaDB.",
    "Previously, I worked at NetEase, contributing to large-scale projects in fast-paced environments. I value clean code, thoughtful design, and clear communication, and I am excited to bring my skills into new projects that make a real impact.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Web Development",
      description: "Building responsive and scalable web applications using React, Vue, Blazor, and .NET.",
      icons: null,
    },
    {
      title: "Performance Optimization",
      description: "Improving website speed, load time, and overall performance following industry best practices.",
      icons: null,
    },
    {
      title: "User Experience Enhancement",
      description: "Creating intuitive, accessible, and user-centered digital experiences across platforms.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Digital Collectibles Mobile Store",
      description: "A mobile web store designed for showcasing and selling digital collectibles, built with Vue, Vuex, and Vite. ",
      icons: [
        {
          icon: faSquareArrowUpRight,
          link: "https://dc.m.163.com/",
        },
      ]
    },
    {
      title: "Wooden Craft Store",
      description: "A simulated e-commerce website for selling handcrafted wooden products, built with C# Blazor and PostgreSQL. Features responsive design, user authentication, and order management workflows.",
      icons: [
        {
          icon: faSquareArrowUpRight,
          link: "https://github.com/vin1992/wooden-craft-store/tree/main/WoodenCraft",
        },
        {
          icon: faGithub,
          link: "https://github.com/vin1992/wooden-craft-store/tree/main/WoodenCraft",
        },
      ]
    },
    {
      title: "PostCSS Plugin: Effortless Theme Generation",
      description: "A PostCSS plugin that automatically generates multi-theme support (light, dark, night) for styles and images — making theme switching effortless and consistent across the app.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/vin1992/postcss-generate-theme",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please feel free to reach out directly by email at vincoder1992@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:vincoder1992@gmail.com",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Web Development Engineer | Vue | React | Flutter | iOS | Android | Mobile App Development | Web Development",
  description: "A Web Development Engineer with expertise in developing hybrid HTML5 pages and desktop websites.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@zhigang xu",
  description: "Web Development Engineer | Vue | React | Flutter | iOS | Android | Mobile App Development | Web Development",
  cards: [
    {
      title: "My portfolio",
      link: "/portfolio",
    },
    {
      title: "My GitHub",
      link: "https://github.com/vin1992/",
    },
    {
      title: "My Blog",
      link: "https://vin1992.github.io/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/zhigang-xu-6695122b7/",
    },
  ]
}