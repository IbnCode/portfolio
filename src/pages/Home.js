import {useLocation} from 'react-router-dom';
const Home = () => {
    let loc = useLocation();
    return ( 
        <div className={loc.state.mody}>

        <div className="home">


        <div className="one">
            <img src="Ahmed.jpeg" />
        <h3>
            About Me
        </h3>
        <p>
        An ambitious computer science student committed to academic excellence and professionalism. Prepared to implement diverse skill sets, technical proficiencies and new perspectives to leadership personnel. Excellent computer skills to help the team achieve their goals and proficiency with different types of programming languages. Experience in Research and Teaching.  In other words, I am a flexible hard worker who is ready to learn and contribute to team success.
        </p>
        </div>
        <div className="two">
            <img src = "project.png"/>
        <h3>
            Projects
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        <div className="one">
            <img src = "McMaster.jpeg"/>
        <h3>
            Education
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        <div className="two">
            <img src = "research.png"/>
        <h3>
            Experience
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>

    </div> 


        </div>
);
}
 
export default Home;