import React from 'react'
import experience from './Data/Exp'
import expimg from "./Images/experience.png";
import Accordian from "./Accordian";

const Experiences = () => {
  document.title = "Experiences";
  return (
    <>
      <section id="header" className="d-flex align-items-center my-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2><strong className="text-uppercase brand-name">{"Experience"}</strong></h2>
              <div className="row">
                <div className="col-lg-5 order-1 order-lg-2" >
                  <img src={expimg} className="img-fluid header-img" alt="Experience" />
                </div>
                <div className="col-md-7 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  {
                    experience.map((val, ind) => {
                      return <Accordian
                        key={ind}
                        date={val.date}
                        role={val.role}
                        company={val.company}
                        place={val.place}
                      />
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experiences
