import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  postgresql,
  scss,
  githubIcon,
} from '../assets';

export const uiuxImage = 'https://imgurl.ir/uploads/k32140_figma-projects.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'SCSS',
    icon: scss,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'PostgresSQL',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'github',
    icon: githubIcon,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Node.js (express.js) Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'From 2018',
    points: [
      'Developing and maintaining backend with express.js',
      'Using MongoDB, PostgresSQL',
      'Sending Emails, uploading images/ videos to cloud centers like cloudinary',
    ],
  },
  {
    title: 'React.js - Next.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'From 2020',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Working with Next.js 14 serverless applications',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'From 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'From 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'UI/UX Designer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'From 2022',
    points: [
      'Designing responsive web, phone apps with Figma',
      'Using Components in figma',
      'Responsive designs suitable for webpages, tablets and phones',
      'Animations in Figma',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Facebook clone',
    description: `Fully advanced facebook clone, Cloudinary to store your images, authentication system where you can register, login ,reset password, advanced form validation using Formik and Yup, Live data validation from the database to make sure your data (like username) is unique, fully responsive application in all different devices, You can update your cover with old covers you had or a new image using a crooper to crop and zoom and select the part of image you want, You can create a post using text, emojis ,background, images in a well organized manner just the same as facebook, You can add and edit your details like othername, bio, job, workplace, relationship etc... and they will be visible on your profile and others can see it, We will have a friendship system just like facebook, you can add friend,/cancel request, follow/unfollow, accept request/delete request, unfriend, You will have a friends page where you can see the friend requests you have, the friend requests you sent, and your list of friends also.`,
    field: 'react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/q988696_react-f.png',
    source_code_link_back: 'https://github.com/linub7/facebook-clone-backend',
    source_code_link_front: 'https://github.com/linub7/facebook-clone-frontend',
    url: 'https://symphonious-kheer-d6e146.netlify.app',
  },
  {
    name: 'House marketplace',
    description: 'Web application that enables users to search states',
    field: 'react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/q988696_react-f.png',
    source_code_link_front: 'https://github.com/linub7/House-MarketPlace',
    url: 'https://house-market-place-ge0kjh4z6-linub7.vercel.app/',
  },
  {
    name: 'Whatsapp clone',
    description:
      'Build a Realtime whatsapp clone messaging app using the mern stack, socket io.',
    field: 'react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/q988696_react-f.png',
    source_code_link_back:
      'https://github.com/linub7/Mern_Socket_Whatsapp_Backend',
    source_code_link_front:
      'https://github.com/linub7/Mern_Socket_Whatsapp_Frontend',
    url: 'https://dazzling-beignet-d526ca.netlify.app/',
  },
  {
    name: 'Movie rating app',
    description: `Building complete backend API with Node.js, Express, MongoDB, Cloudinary. Role Based Authentication (Admin & Normal User). User Authentication With Email Verification. Protected Routes According to Role.(OTP) Password Reset Route. Cloud Storage for Images and Videos Advanced MongoDB Aggregation Concepts. Building our Admin Panel With React & Tailwind. Advance Form with complex validation and live search fields. Custom auto scroll slider to display featured movies. Building Complex UI with just React & Context API. Handling Complex Form Without any library.
`,
    field: 'react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/q988696_react-f.png',
    source_code_link_back: 'https://github.com/linub7/MOVIE_APP_BACKEND',
    source_code_link_front: 'https://github.com/linub7/MOVIE_APP_FRONTEND',
    url: 'https://idyllic-paprenjak-e2b015.netlify.app/',
  },
  {
    name: 'Twitter clone',
    description:
      'MERN project, twitter clone users can like unlike, retweet and reply / follow and unfollow / realtime chat',
    field: 'react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/q988696_react-f.png',
    source_code_link_back: 'https://github.com/linub7/Twitter_Mern_backend',
    source_code_link_front: 'https://github.com/linub7/Twitter_Mern_frontend',
    url: 'https://lucent-parfait-d361a8.netlify.app/',
  },
  {
    name: 'Discord clone',
    description:
      'Discord app with socket.io and WebRTC, Video Chat application with group video call functionality. MERN project users can create groups, realtime chat, video chat and share screens in groups',
    field: 'react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'material ui',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/q988696_react-f.png',
    source_code_link_back: 'https://github.com/linub7/discord_mern_backend',
    source_code_link_front: 'https://github.com/linub7/discord_mern_frontend',
    url: 'https://wonderful-speculoos-7da87a.netlify.app/',
  },
  {
    name: 'Doctor appointment app',
    description: `Doctor appointment booking app from scratch using react, redux toolkit, AntD, Node, MongoDB Separate User Interfaces for Users , Admins , Doctors Manage Users, Doctors, and Appointments from the Admin panel Notifications Functionality for Users, Admin, and Doctors
`,
    field: 'react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'antd',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/q988696_react-f.png',
    source_code_link_back: 'https://github.com/linub7/Doctor_backend',
    source_code_link_front: 'https://github.com/linub7/Doctor_frontend',
    url: '',
  },
  {
    name: 'Music player',
    description: `Build a fullstack dynamic music/audio player app using React, redux, node, mongoose, multer & cloudinary. Building everything from scratch by avoiding external libraries Working with admin panel where the admin can control the entire application. Working with Tailwind CSS We will also work on playlists concept , Creating playlist , add songs to playlist , removing songs from playlist etc. Adding song , uploading files , edit song etc. Building our custom audio player which will have all the controls like play , pause , next song , previous song , shuffle songs , forward song , volume controls`,
    field: 'react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/q988696_react-f.png',
    source_code_link_back: 'https://github.com/linub7/Mern_Music_backend',
    source_code_link_front: 'https://github.com/linub7/Mern_Music_front',
    url: '',
  },
  {
    name: 'E-commerce app',
    description: `Build an Ecommerce app including backend api With node js, integrate firebase for handling Authentication (fake email can’t submitted) Ant design, complete authentication with social Login, redux for global state management, Advance CRUD, pagination, star rating system, discount Coupon code, Cash on delivery(no online payment required), admin dashboard, mongoose, layout with bootstrap material css, password forgot / reset, configuration email on signup, role based  access control for users and admin, multiple image uploads with client side resize, advance searching  and filtering (9 different ways), credit cart payment with stripe, order management for admin, add to wishlist.
`,
    field: 'react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/q988696_react-f.png',
    source_code_link_back:
      'https://github.com/linub7/-ecommerce-redux-react-back',
    source_code_link_front:
      'https://github.com/linub7/ecommerce-redux-react-front',
    url: '',
  },
  {
    name: 'CMS',
    description:
      'Next js with express backend, content management system. Build real world CMS like wordpress using React Next.js Node MERN Stack with SEO',
    field: 'next',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'antd',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/s39138_next-f.png',
    source_code_link_back: 'https://github.com/linub7/React_CMS_back',
    source_code_link_front: 'https://github.com/linub7/React_CMS_front',
    url: 'https://react-cms-front.vercel.app/',
  },
  {
    name: 'Real state',
    description:
      'Working with Prisma ORM to perform all database operations. Working with combination of both client and server components. Implement Clerk Authentication (Google Login). Using Tailwind CSS in-order to override Ant Design default styling and building custom components',
    field: 'next',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'prisma',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/s39138_next-f.png',
    source_code_link_front: 'https://github.com/linub7/next-realstate-full',
    url: 'https://next-realstate-full.vercel.app/',
  },
  {
    name: 'Shopping App',
    description:
      'Build a shopping app with next.js 14, using drizzle, ts, UploadThings, framer-motion and so much',
    field: 'next',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'drizzle',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'orange-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/s39138_next-f.png',
    source_code_link_front: 'https://github.com/linub7/next-14-shopping',
    url: 'https://next-14-shopping.vercel.app/',
  },
  {
    name: 'Whatsapp clone app',
    description:
      'Expo Whatsapp clone, realtime chat socket.io MERN stack, create groups, make star messages, reply messages and so much',
    field: 'react native',
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/w075424_react_native.png',
    source_code_link_back:
      'https://github.com/linub7/React_Native_whatsapp_server',
    source_code_link_front:
      'https://github.com/linub7/React_Native_whatsup_app',
    url: '',
  },
  {
    name: 'Audio Sharing App',
    description:
      'Bare react native, Full audio app with favorite history related audios, advance animated. state management with Redux Toolkit. Real world API building with Node JS, Typescript, Express, Mongodb.',
    field: 'react native',
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/w075424_react_native.png',
    source_code_link_back:
      'https://github.com/linub7/React_Native_Audio_Sharing_backend',
    source_code_link_front:
      'https://github.com/linub7/React_Native_Audio_Sharing_Frontend',
    url: '',
  },
  {
    name: 'Online shop',
    description: 'Expo, Shop app with express mongo backend with admin panel',
    field: 'react native',
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/w075424_react_native.png',
    source_code_link_back: 'https://github.com/linub7/Native_eCommerce_Backend',
    source_code_link_front:
      'https://github.com/linub7/Native_eCommerce_Frontend',
    url: '',
  },
  {
    name: 'LinksDaily',
    description: 'Expo, Write links and blogs like dislike',
    field: 'react native',
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://imgurl.ir/uploads/w075424_react_native.png',
    source_code_link_back:
      'https://github.com/linub7/React_Native_Links_daily_server',
    source_code_link_front:
      'https://github.com/linub7/React_Native_Links_daily',
    url: '',
  },
  {
    name: 'Food delivery',
    description: 'Food delivery app with animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/NAhIlyNVoSv4BU3i3INvpH/Food-delivery-app?m=auto&t=vuc6vk8fsLjViaKo-6',
  },
  {
    name: 'Smart Home',
    description: 'Smart Home app with animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/vZjqJn4Xrim09Da8PKYii0/Smart-Home-App?m=auto&t=vuc6vk8fsLjViaKo-6',
  },
  {
    name: 'Healthy Meal',
    description: 'Healthy meal website with animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=486-242&t=N7TyGkQO9Pi7ikjU-1',
  },
  {
    name: 'Home renovation',
    description: 'Home renovation website',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/FaIUIPEmaDGikKOHgfRWfE/Home-Renovation?m=auto&t=vuc6vk8fsLjViaKo-6',
  },
  {
    name: 'Online Shop',
    description: 'E-commerce app',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/RuOT6o4gZGoQhi07Pi61BY/Online-Shop-mobile?m=auto&t=vuc6vk8fsLjViaKo-6',
  },
  {
    name: 'Finance',
    description: 'Finance app',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/mcEEyBDvmNEXFSMfoPnsgl/Finance-App?m=auto&t=vuc6vk8fsLjViaKo-6',
  },
  {
    name: 'Crypto Project',
    description: 'Crypto responsive mobile tablet and website',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/E1c3AmQeBdm0UDoT5WufIY/Crypto-Project?m=auto&t=vuc6vk8fsLjViaKo-6',
  },
  {
    name: 'Parallax 1',
    description: 'Parallax',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/lLLGYiemPRhVNoXLw8XLi0/Parallax-%2B-Progress-Exploration-WIP?m=auto&t=vuc6vk8fsLjViaKo-6',
  },
  {
    name: 'Parallax 2',
    description: 'Parallax',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=80-2&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Navigation',
    description: 'Navigation transition',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=80-2&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Dragging',
    description: 'Dragging',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=80-2&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Drag & Drop',
    description: 'Drag & Drop',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=171-788&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'File Uploader',
    description: 'File Uploader',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=229-1996&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Like Button',
    description: 'Like button',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=273-2&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Success modal',
    description: 'Success modal',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=278-85&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Checklist',
    description: 'Checklist',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=278-344&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Shopping Card Button',
    description: 'Shopping Card Button',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=278-419&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Position animations',
    description: 'Position animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=327-63&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Scroll animations',
    description: 'Scroll animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=371-3&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Mask animations',
    description: 'Mask animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=371-4&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Rotation animations',
    description: 'Rotation animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=371-2&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Opacity animations',
    description: 'Opacity animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=371-5&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Size animations',
    description: 'Size animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=371-6&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Border radius animations',
    description: 'Border radius animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=371-7&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Size & Color animations',
    description: 'Size & Color animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=441-116&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Shadow & Blur animations',
    description: 'Shadow & Blur animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=441-117&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Advance',
    description: 'Shadow & Blur animations',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/3yGmlxUy6K51OHpemvTeZv/animation-projects?node-id=453-234&t=PdJ4Wj9PVPBYyHB8-1',
  },
  {
    name: 'Figma Skills',
    description: 'lots of lots of figma skills and examples',
    field: 'UI/UX',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'animation',
        color: 'orange-text-gradient',
      },
    ],
    image: uiuxImage,
    source_code_link_back: '',
    source_code_link_front: '',
    url: 'https://www.figma.com/design/aAKprc2MLWwARlvrfZ5FRb/Skills?m=auto&t=vuc6vk8fsLjViaKo-6',
  },
];

export { services, technologies, experiences, testimonials, projects };
