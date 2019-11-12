import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';


class Experience extends Component {
  render() {
    return (
      <div className="wrapper container">
        <div id="experiences-section" className="experiences-section section">
            <h2 className="section-title">Work Experiences</h2>
            <div className="timeline">
                <div className="item">
                    <div className="work-place">
                        <h3 className="place">IVTL Infoview Technologies Pvt Ltd,</h3>
                        <div className="location"><svg className="svg-inline--fa fa-map-marker-alt fa-w-12 mr-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>Chennai, TN</div>
                    </div>
                    <div className="job-meta">
                        <div className="title">Junior Software Engineer</div>
                        <div className="time">2017 - Present</div>
                    </div>
                    <div className="job-desc">
                    <p>A subsidiary company of Works Applications (Japan) which develops ERP software products.</p> 
                        <p>In Infoview my responsibilities are :</p> 
                        <ul>
                            <li>Implementing UI/UX Designs for Web-based applications.</li>
                            <li>esponsible for implementing API and backend data logics.</li>
                            <li>Testing and bug fixing and preparing for production release.</li>
                        </ul>
                    </div>
                </div>
              </div>
          </div>
        
        
        
        
        <div id="skills-section" className="skills-section section text-center">
            <h2 className="section-title">Professional Skills</h2>
            <div className="top-skills">
                <h3 className="subtitle">Top Skills</h3>
                <div className="row">
                    <div className="item col-12 col-md-4">
                        <div className="item-inner">
                            <div className="chart-easy-pie text-center">
                                <div className="chart-theme-1 chart" data-percent="98"><span>98</span>%<canvas height="220" width="220" style={{height: "110px", width: "110px"}}></canvas></div>
                            </div>
                            <h4 className="skill-name">Java &amp; Spring</h4>
                            <div className="level">Expert, 2.5 years</div>
                            <div class="desc">
                            Able to build algorithms analyze it's series of causes and effects, that happens in large scale application evironment.<br/>
                            Skilled in the use of the technologies in the Java ecosystem: Struts, Spring, Maven, Gradle, Ant, JUnit, Spock, and Hibernate, among many others.                            </div>
                        </div>
                    </div>
                    <div className="item col-12 col-md-4">
                        <div className="item-inner">
                            <div className="chart-easy-pie text-center">
                                <div className="chart-theme-1 chart" data-percent="98"><span>98</span>%<canvas height="220" width="220" style={{height: "110px", width: "110px"}}></canvas></div>
                            </div>
                            <h4 className="skill-name">SQL &amp; Elastic Search</h4>
                            <div className="level">Expert, 2.5 years</div>
                            <div class="desc">
                            Expertise in understanding complex business needs, analyzing, designing and developing solutions.Demonstrated expertise in performance tuning including both query and server optimization.                            </div>
                        <br/>Devise algorithms to make effective elastic cluster search, pipeline aggregations, and more.</div>
                    </div>
                    <div className="item col-12 col-md-4">
                        <div className="item-inner">
                            <div className="chart-easy-pie text-center">
                                <div className="chart-theme-1 chart" data-percent="90"><span>90</span>%<canvas height="220" width="220" style={{height: "110px", width: "110px"}}></canvas></div>
                            </div>
                            <h4 className="skill-name">React JS</h4>
                            <div className="level">Expert, 2 years</div>
                            <div class="desc">
                            Extensive experience in developing web pages using HTML/HTML5, XML, DHTML CSS/CSS3, SASS, LESS, JavaScript, React JS, Redux, Flex, Angular JS (1.X) JQuery, JSON, Node.js,, Ajax, JQUERY Bootstrap.
                            Expertise in React JS framework to develop the SPA.Experience in using React JS components, Forms, Events, Router, plus Redux and Flux concept.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="other-skills">
                <h3 className="subtitle">Other Skills</h3>
                <div className="misc-skills">
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">SVN</span>
                    <span className="skill-tag">Maven</span>
                    <span className="skill-tag">Git</span>
                    <br/>
                    <span className="skill-tag">Redis</span>
                    <span className="skill-tag">ClosureJS</span>
                </div>
            </div>
        </div>
        <div id="testimonials-section" className="testimonials-section section">
            <h2 className="section-title">Testimonials</h2>
            
            <div id="testimonials-carousel" className="testimonials-carousel carousel slide" data-interval="8000">
                
                <ol className="carousel-indicators">
                    <li data-target="#testimonials-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#testimonials-carousel" data-slide-to="1"></li>
                </ol>
                
                <div className="carousel-inner">
                    <div className="item carousel-item active">
                        <blockquote className="quote">      
                            <p><span className="icon-holder"><svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg></span>                            
                            Venkatraman is passionate about solving problems and he is an absolute joy to work with, he is not afraid to share his opinion and encourage others to do the same. He grasps complex problems quickly and provides technically strong solutions.
                            <br>
                            </br>
                            Whenever I think about a true developer the first thing comes to my mind is "Venkat".
                            </p>
                        </blockquote>    
                        <div className="source">
                            <div className="name">Saravana Bharathi</div>
                            <div className="position">Software Engineer, Configit</div>
                        </div>  
                                                       
                    </div>
                    <div className="item carousel-item">
                        <blockquote className="quote">
                            <p><span className="icon-holder"><svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg></span> 
                            Talented junior who was interested on learning new technologies...
                            </p>
                        </blockquote>
                        <div className="source">
                            <div className="name">Saravanan Ramasamy</div>
                            <div className="position">Product Developer, Infoview</div>
                        </div>  
               
                    </div>
                </div>
            </div>
            
        </div>
        
        
        <div id="contact-section" className="contact-section section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="intro">
                <img className="profile-image" src="assets/images/profile-image.png" alt=""/>
                <div className="dialog">
                    <p>I'm currently taking on freelance work. I am looking for new opportunities at the moment, however, feel free to reach out to me for any kind of information.
</p>
                    <p><strong>I can help with the following:</strong></p>
                    <ul className="list-unstyled service-list">
                        <li><svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> App development with ReactJS</li>
                        <li><svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> Front-end development with ReactJS</li>
                        <li><svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> Back-end development with Spring/Java</li>
                        <li><svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> UI development</li>
                    </ul>
                    <p>Drop me a line at <a href="mailto:madurai.mvr@gmail.com">madurai.mvr@gmail.com</a> or call me at <a href="tel:+917708772970">+91 77087 2970</a></p>
                    <ul className="social list-inline">
                        <li className="list-inline-item"><a href="http://www.linkedin.com/in/venkatraman-muthukrishnan-4a167297"><svg className="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a></li>
                        <li className="list-inline-item"><a href="https://www.facebook.com/madurai.mvr"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-facebook-f fa-w-10"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/v_for_venkat/"><svg className="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a></li>
                        <li className="list-inline-item"><a href="https://gitlab.com/venkatmu"><svg className="svg-inline--fa fa-github-alt fa-w-15" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg=""><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg></a></li>
                        <li className="list-inline-item"><a href="#"><svg className="svg-inline--fa fa-skype fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="skype" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path></svg></a></li>
                    </ul>
                </div>
            </div>

        </div>
        <div className="row" id="copyright" style={{ margin: 0,textAlign :"center"}}>
              <div className="col-lg-12">
                <p className="small">Copyright © 2020 Venkatraman Muthukrishnan</p>
              </div>
            </div>
    </div>
      
    );
  }
}

export default Experience;