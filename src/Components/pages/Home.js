import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyCard from "../utils/Crads/CustomCard1";
import Sidebar from "../utils/SideBar/Sidebar";
import ProgressBar from "../utils/Progress Bars/ProgressBarBootstrap";
import MyBarsBT from "../utils/Progress Bars/MyBarsBT";

const classes = makeStyles(theme => ({}));

const Home = () => {
  return (
    <Sidebar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="home-wrapper">
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MyCard
                name="Engagement"
                progress="73"
                color="red"
                
              ></MyCard>
              <MyCard
                name="Well Being"
                progress="22"
                color="dodgerblue"
                
              ></MyCard>
              <MyCard
                name="Turn Over"
                progress="47"
                color="seagreen"
                
              ></MyCard>
              <MyCard
                name="Stress"
                progress="60"
                color="orange"
                
              ></MyCard>
            </div>
            <div style={{ display: "flex", marginTop: "40px" }}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <h1>Celebrate</h1>

                <div
                  style={{
                    width: "300px",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                    borderRadius: "16px",
                    padding:"10px"
                  }}
                >
                  <ProgressBar color="red" progress="30" title="Feedback"/>
                  <ProgressBar color="green" progress="40" title="Emotional Wellbeing"/>
                  <ProgressBar color="blue" progress="50" title="Peer Support"/>
                  <ProgressBar color="orange" progress="60" title="Progress"/>
    
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h1>Focus On</h1>
                <div style={{
                    width: "300px",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                    borderRadius: "16px",
                    height: "350px"
                  }}>
                    <MyBarsBT  />
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </Sidebar>
  );
};

export default Home;
