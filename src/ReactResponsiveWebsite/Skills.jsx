import React from 'react'
import { LSkills } from './Data/Skills/SkillsList';
import { SkillsList } from './Data/Skills/SkillsList';
import { skillsImage } from './Data/Skills/Skill-image';
import Marquee from "react-fast-marquee";

const Skills = () => {
  document.title = "Skills";
  return (
    <>
      <section id="header" className="d-flex align-items-center my-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <h2><strong className="text-uppercase brand-name">{"Skills"}</strong></h2>
              <div className="row">
                <div className="col-md-8 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <span className='my-1 skilltext'><strong>Languages: </strong>
                    {
                      LSkills.languages.map((val, index) => {
                        return val + ", ";
                      })
                    }
                  </span>
                  <span className='my-1 skilltext'><strong>Frameworks and Libraries: </strong>
                    {
                      LSkills.frameworksandLibraries.map((val, index) => {
                        return val + ", ";
                      })
                    }
                  </span>
                  <span className='my-1 skilltext'><strong className="">Databases: </strong>{LSkills.databases}</span>
                  <span className='my-1 skilltext'><strong className="">Frontend: </strong>
                    {
                      LSkills.frontend.map((val, index) => {
                        return val + ", ";
                      })
                    }
                  </span>
                  <span className='my-1 skilltext'><strong className="">DataAccess: </strong>
                    {
                      LSkills.dataAccess.map((val, index) => {
                        return val + ", ";
                      })
                    }
                  </span>
                  <span className='my-1 skilltext'><strong className="">Version Controls: </strong>
                    {
                      LSkills.versionControl.map((val, index) => {
                        return val + ", ";
                      })
                    }
                  </span>

                  <span className='my-1 skilltext'><strong className="">Cloud Services: </strong>{LSkills.cloudServices}</span>
                  <span className='my-1 skilltext'><strong className="">Additional: </strong>{LSkills.additional}</span>
                  <span className='my-1 skilltext'><strong className="">Soft Skills: </strong>
                    {
                      LSkills.softSkills
                    }
                  </span>
                  <div className="mt-3"></div>
                </div>

                <div className="col-lg-4 order-1 order-lg-2 header-img">
                  <Marquee
                        gradient={false}
                        speed={60}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                      >
                    {
                      SkillsList.map((skill, id) => {
                        return (
                            <div className="my-5" key={id}>
                              <div className="container-fluid mb-5">
                                <div className="row">
                                  <div className="col-10 mx-auto">
                                    <div className="row gy-4">
                                      <img className="" width={170} height={150} src={skillsImage(skill)} alt={skill} />
                                      <p className='text-uppercase text-center brand-name'>{skill}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        )
                      })
                    }
                      </Marquee>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Skills
