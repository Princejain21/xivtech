import React from "react";
import FootCol from "./FootCol";
import logo from '../../Assets/logo.png'

export default function Footer() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div className="row p-5">
        <div className="col-lg-3 col-md-6 col-sm-10">
          <div className="d-flex">
            <img src={logo} width={"65px"} height="65px" alt="..."/>
            <img
              src={"https://www.xivtech.io./Text1.svg"}
              width={"130px"}
              height="65px"
              alt="..."
            />
          </div>
          <div>
            <p>
              By leveraging our full spectrum strategy, design, and technology
              capabilities, we deliver game-changing outcomes for our clients
              around the world.
            </p>
          </div>
        </div>
        <FootCol
          titleType={true}
          title="Locations"
          withoutLinks={["Toronto", "New Delhi"]}
          links={[]}
        />
        <FootCol
          titleType={false}
          title="Services"
          links={[
            "Complete AI + RPA Automation",
            "Cloud Services",
            "Delivery Pipeline Automation",
            "Simplify Cloud Ops",
            "Build Better Apps",
          ]}
          withoutLinks={[]}
        />
        <FootCol
          titleType={true}
          title="XivTech"
          links={["About", "Careers", "Contact"]}
          withoutLinks={[]}
        />
      </div>
      <p className="text-white text-center mt-2">
        © 2021 XivTech, Inc. All Rights Reserved
      </p>
    </div>
  );
}
