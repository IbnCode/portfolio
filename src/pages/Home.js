import {useLocation} from 'react-router-dom';
import { useRef, useState} from 'react';
import OneTwo from './OneTwo';
import React  from 'react';


const Home = () => {
    const pkgs = [
        {title: 'About me', body: 'I am a computer science student with great work ethic and always striving to learn new skills to put towards my work. I have excellent communication skills. I know and understand a wide variety of computer languages and am able to teach others about them. I am always prepared to learn and take constructive criticism by my peers and co-workers. I have experience in research projects and teaching, where I implemented various computer science skills, including but not limited to algorithm optimization, data structures, testing, documentation writing and image processing.',
            id: 0,  pic: 'https://drive.google.com/file/d/17kw7aXyUU1TuoZpZBwbgmij6EfegTtUn/view?usp=sharing'
        },
        {title: 'Awards and Extracurriculars', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            id: 1,  pic: 'https://drive.google.com/file/d/1nAcV4lFcvfBNa59pKhxXTJqNd7VFJdB_/view?usp=sharing'
        },
        {title: 'Education', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            id: 2,  pic: 'https://drive.google.com/file/d/1uZwil6yweqnUR1MRFvM0dLtLzGWxPb21/view?usp=sharing'
        },
        {title: 'Experience', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            id: 3, pic: 'https://drive.google.com/file/d/1MHiTVM8NWyuk0X-gsqraz6r_kqTLj10B/view?usp=sharing'
        },
    ]


    return (
        <OneTwo pkgs = {pkgs} />
);
}

export default Home;
