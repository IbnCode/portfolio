import React  from 'react';
import OneTwo from '../OneTwo';

const Education = () => {
    const pkgs = [
        {title: 'Computer Science', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        , 
            id: 0,  pic: 'McMaster.jpeg', location: "McMaster University – Hamilton, ON", period: "09/2020-Now"
        },
        {title: 'Computer Engineering', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
            id: 1,  pic: 'AUS.jpg' , location: "American University of Sharjah – Sharjah, UAE", period: "09/2019-12/2019"
        },
    ]


    return ( 
        <OneTwo pkgs = {pkgs} />
);
}
 
export default Education;