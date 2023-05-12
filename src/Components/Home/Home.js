import React from "react";
import Card from "./Card";
import img1 from "../../Assets/x1.jpg";
import img2 from "../../Assets/x2.jpg";
import img3 from "../../Assets/x3.jpg";
import img4 from "../../Assets/x4.jpg";
import Card2 from "./Card2";
import img5 from '../../Assets/rp2.jpg'
import img6 from '../../Assets/p1.png'
import img7 from '../../Assets/p2.jpg'
import img8 from '../../Assets/p3.jpg'

export default function Home() {
          return (
            <>
              <div className="row m-auto " style={{ height: "80vh" }}>
                <div className="col-sm-12 m-4 d-flex flex-column">
                  <p className="font-weight-bold">Bot, Process, Efficiency</p>
                  <h1 className="main-home-heading">
                    Robotic Process Automation that unifies people, process and
                    technology
                  </h1>
                  <br />
                  <br />
                  <h3 className="main-bottom-heading">
                    We help business leaders embrace AI-Powered Automation as they
                    endeavor to visualize the future.
                  </h3>
                </div>
              </div>
              <div className="row my-5" style={{ backgroundColor: "#202226" }}>
                <div className="col col-sm-8 mx-auto">
                  <img
                    className="img img-fluid text-center hair-girl-img"
                    src="https://www.xivtech.io./x1.jpg"
                    alt="..."
                  />
                </div>
                <div className="w-100"></div>
                <div className=" col col-lg-8 col-md-6 col-sm-8 mx-auto ">
                  <p className="mx-2" style={{ color: "#959595" }}>
                    Our Proven Process
                  </p>
                  <div className="row  mx-auto">
                    <div className="col-md-5 col-sm-10  ">
                      <h1
                        className="text-white mb-3  align-design-refine"
                        style={{
                          fontSize: "600%",
                          fontWeight: "bolder",
                          marginLeft: "1%",
                        }}
                      >
                        Align
                      </h1>
                      <h1
                        className="text-white  mb-3 align-design-refine"
                        style={{
                          fontSize: "600%",
                          fontWeight: "bolder",
                          marginLeft: "10%",
                        }}
                      >
                        Design
                      </h1>
                      <h1
                        className="text-white mb-3 align-design-refine"
                        style={{
                          fontSize: "600%",
                          fontWeight: "lighter",
                          fontStyle: "oblique",
                          marginLeft: "30%",
                        }}
                      >
                        Refine
                      </h1>
                    </div>
                    <div className="col-md-7 col-sm-12 d-flex justify-content-end  align-items-end text-white">
                      <p
                        className="btw-para animated fadeInUp w-75"
                        style={{
                          animationDelay: "2s",
                          lineHeight: "35px",
                          fontFamily: "freight-display-pro,serif",
                          fontSize: "1.5rem",
                        }}
                      >
                        We Productize services. With Ekisu - our flagship AI automation
                        product, we lead the RPA transformation process to strategize,
                        design, build, launch and support the automation. Following
                        deploy, we follow a feedback based refinement process.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col col-lg-8 col-md-6 col-sm-8 mx-auto mt-5 ml-2 ">
                  <p className="mx-2" style={{ color: "#959595" }}>
                    Our Expertise
                  </p>
                  <p
                    className="text-white font-weight-bold ml-2"
                    style={{
                      fontFamily: "freight-display-pro,serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Our core focus on AI + RPA, Design Thinking and Customer Experience
                    allows us to help drive customer focussed innovation. We automate
                    businesses for growth, continued success and leadership.
                  </p>
                </div>
                <div className="w-100"></div>
                <div className="col col-lg-8 col-md-6 col-sm-8 mx-auto mt-5">
                  <div className="row mb-5">
                    <div className="col col-lg-4 col-md-6 col-sm-10  d-flex justify-content-center align-items-center">
                      <Card
                        title="Strategy"
                        description={
                          <p
                            className="card-text text-white"
                            style={{ lineHeight: "35px" }}
                          >
                            Digital Transformation
                            <br />
                            AI + RPA Automation
                            <br />
                            Operational Model
                            <br />
                            Product Vision
                            <br />
                            Product Roadmap
                            <br />
                          </p>
                        }
                        source={img1}
                      />
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-10 d-flex justify-content-center align-items-center">
                      <Card
                        title="Design + Production"
                        description={
                          <p
                            className="card-text text-white"
                            style={{ lineHeight: "35px" }}
                          >
                            RPA automation <br />
                            Machine Learning / AI <br />
                            Document Data Capture <br />
                            Bot Deploy and Scale <br />
                            Web/Mobile App Development
                          </p>
                        }
                        source={img2}
                      />
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-10  d-flex justify-content-center align-items-center">
                      <Card
                        title="Growth"
                        description={
                          <p
                            className="card-text text-white"
                            style={{ lineHeight: "35px" }}
                          >
                            SaaS Platform
                            <br />
                            Bot Optimization
                            <br />
                            AI + RPA Lifecycle Management
                            <br />
                            A/B Testing
                            <br />
                            KPI Tracking
                          </p>
                        }
                        source={img3}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-100" style={{height:"25vh"}}></div>
              </div>
              <div className="row mx-auto mt-5">
                <div className="col col-lg-8 col-md-5 col-sm-8 mx-auto boy-img ">
                  <img src={img4} alt="..." className="img img-fluid" />
                </div>
              </div>
            
    <div className="row pb-5 mb-5">
                <Card2 
                title="AI + RPA Automation"
                show={false} 
                source={img5}
                heading="AI + RPA is what we do"
                description="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
                delay="1.5s"
                 />
                <div className="w-100"></div>
                <Card2
                title="Let's Collaborate"
                show={true} 
                source={img6}
                heading="Make Bolder Choices"
                description="Digital focused strategies to realize market-changing ideas"
                delay="2s"
                
                />
                <div className="w-100"></div>
                <Card2
                title="Build Better Apps"
                show={true} 
                source={img7}
                heading="Innovate with Speed"
                description="Create higher quality software, deliver on customer expectations and business goals"
                delay="2.5s"
                
                />
                <div className="w-100"></div>
                <Card2
                title="DevOps"
                show={true} 
                source={img8}
                heading="Embrace Cloud"
                description="With Cloud-First accelerate innovation and optimize performance"
                showbutton={true}
                delay="3s"
                />
                
                

               
      </div>
      <div className="breakline"></div>


    </>
  );
}
