import OneTwo from '../OneTwo';
import React  from 'react';

const Experience = () => {
    
    
        const pkgs = [
            {title: 'Research Assistant', body: [<div>
                <p> I received the NSERC USRA award and am working under the supervision of Dr. Wolfram Kahl of McMaster University in the Department of Computing and Software. The research is primarily in graph term rewriting, focusing on associative-commutative matching algorithms.  </p><p> My primary duties are:   </p>
            <ul>
            <li>Acquire the necessary background knowledge in term rewriting and term graph rewriting. </li>
            <li>Acquire an in-depth understanding of the existing `graph-rewriting` Haskell packages.  </li>
            <li>Design and implement a way to implement an AC matching algorithm with the `graph-rewriting` Haskell packages.  </li>
            <li>Use the visualization features to implement ways to demonstrate “AC-matching in action”.  </li>
            </ul>
            
            <p> I gained an extensive experience in Algorithm optimization and working with several data structures and developed my documentation and research writing skills.I have also gained experience in Haskell and functional programming, and advanced my computational thinking skills. </p>
            </div>
            ]
            , 
                id: 0,  pic: 'project.png', location: "McMaster University – Hamilton, ON", period: "05/2022-Now"
            },
            {title: 'Research Assistant', body: [
                <div>            
                <p> I Worked with a PhD student on her PhD research in the Department of Materials Science and Engineering.</p><p> My primary duties were:   </p>
                <ul>
                <li>Acquiring sufficient knowledge in the algorithm design and research area </li>
                <li>Creating suitable test cases to test the algorithm using python, NumPy, SciPy and scikit-image.   </li>
                <li>Creating different image interpolation algorithms to maximize efficiency.  </li>
                <li>Using different methods of image processing to suit the given algorithm  </li>
                <li> Contributing to the algorithm design and provided insights on the overall design and efficiency.</li>
                </ul>
                <p>I gained a lot of experience in testing algorithms and image processing and have advanced my python skills. I have improved my communication skills and was able to answer the needs of my supervisors and reflect on their feedback.  </p>
                </div>
            ], 
                id: 1,  pic: 'project.png' , location: "McMaster University – Hamilton, ON", period: "02/2022-04/2022"
            },
            {title: 'Teaching Assistant', body:
            [    <div>            
            <p> I was a teaching assistant for a web design course (COMPSCI 1XD3) at McMaster Universty under the provision of Dr. Christopher Anand.</p><p> My primary duties were:   </p>
            <ul>
            <li>In charge of holding the weekly labs and teaching alongside another teaching assistant. </li>
            <li>Assisting in creating assignments for the students and grading them </li>
            <li>Helping the students in creating better web programs and teaching them best practices  </li>
            <li> providing one-on-one assistance and tutoring to students who required additional help</li>
            </ul>
            <p>The projects and assignments were using a functional programming language called Elm.</p>
            <p> I gained experience in teaching and develpoped my communication skills with different levels of students. I worked in a team which improved my teamworking skills and I acted as a bridge between the students and the professor.</p>
            </div>
],                    
            id: 2,  pic: 'class.jpg' , location: "McMaster University – Hamilton, ON", period: "01/2022-04/2022"
        },
        ]
    
    
        return ( 
            <OneTwo pkgs = {pkgs} />
    );
    }
      
export default Experience;
