import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import Jump from 'react-reveal/Jump';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export default class Skills extends React.Component{
    render(){
        return(
            <div className="skills-background">
                <div className="skills-divider">
                        <Jump>
                        <ScrollableAnchor id={'skillsSection'}>
                            <img src={require('../imgs/Huh.png')} className="rabbit-img" alt="Rabbit headshot"/>
                        </ScrollableAnchor>
                        </Jump>
                    <h2> 
                        Oh right, I'm also a... <br></br> <Tada><h2 className="skills-title">Back-end Developer!</h2></Tada>
                    </h2>
                </div>
                <div className="skills-container">
                    <div className="professional-background">
                        <div className="professional-background-item">
                            <h2>Professional Background</h2>
                            <div>
                                <p>
                                    I started my undergraduate studies in game development at UOIT in 2012. 
                                    From there, I learned how to make custom game engines using C++ and OpenGL for graphics.
                                    Only nearing the end of my studies did I actually get the chance to dive into using Unity
                                    for development. During my time as a game developer, I was mainly a graphics programmer that
                                    specialized in doing rendering effects such as: Shadow Mapping, Cel Shading, Bloom and other 
                                    lighting effects. Essentially, a lot of work with matrices, cameras and algorithms. I also 
                                    learned how to do other cool things unrelated to programming. 3D model texturing and animation 
                                    in Maya and using Adobe Photoshop are a couple of examples.
                                </p>
                            </div>
                        </div>
                        <div className="professional-background-item">
                            <img src={require('../imgs/unity.PNG')} className="skills-img" alt="Unity3D Game Development"/>    
                        </div>
                    </div>
                    <div className="professional-background">
                        <div className="professional-background-item">
                            <img src={require('../imgs/project.PNG')} className="skills-img" alt=".NET Core 2.0 Development"/>    
                        </div>
                        <div className="professional-background-item">
                            <h2>Start of the real journey</h2>
                            <div>
                                <p>
                                    After I graduated, I found myself a job at the Toronto District School Board. Initially,
                                    I was doing work with Microsoft Access databases and programming using Visual Basic. I 
                                    found this work very unengaging. I would finish work very quickly and find myself with 
                                    too much spare time. 2 months in I was tranferred to another location where I 
                                    was given web development work to do by the Application Development department. This was
                                    the start of my passion for developing web applications. After working there for the remainder
                                    of the internship, I was given a contract extension as a "Jr. Programmer Analyst" for the 
                                    rest of the year. After my contract expired, I started looking for a job again and found
                                    myself creating additional web applications using .NET Core. I then decided to go to school 
                                    for web development as I wanted professional education on best practices. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="present-background">
                        <div className="present-background-item">
                            <h2>Who I am today</h2>
                            <Fade>
                                <div className="avatar-container">
                                        <img src={require('../imgs/Headshot.png')} className="avatar" alt="Headshot"/>    
                                </div>
                            </Fade>
                            <div>
                                <p>
                                    I'm currently at the end of my studies at Humber College's web development program. 
                                    During my time studying, I've learned how to use HTML, CSS, JavaScript, PHP and C# 
                                    proficiently. I've learned how to integrate APIs and work with JSON responses as well 
                                    as make database driven applications using MySQL and MSSQL. Some other neat things 
                                    I know how to use are Git, jQuery, Ajax and various front-end frameworks. In my free time 
                                    I like to learn new things. Recently, I have learned how to use MERN (MongoDb, Express, React and Node.js). 
                                    My favorite development framework is ASP.NET and I plan to become an expert in developing applications with it. 
                                    Below you can see the list of web development related skills I've picked up along the way.
                                </p>
                            </div>
                        </div>
                        <div className="present-background-skills">
                            <ul>
                                <Roll left cascade>
                                    <li><img src={require('../imgs/skills/net.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/php.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/oracle.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/xml.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/mysql.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/microsoft-sql-server.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/jquery.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/javascript.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/html-5.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/css-3.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/git.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/bootstrap-4.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/mongodb.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/react.svg')} className="skill-avatars" alt=""/></li>
                                    <li><img src={require('../imgs/skills/node.svg')} className="skill-avatars" alt=""/></li>
                                </Roll>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}