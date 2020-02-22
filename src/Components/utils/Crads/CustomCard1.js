import React from "react";
import ProgressBar from "../Progress Bars/ProgressBarBootstrap";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SecurityIcon from "@material-ui/icons/Security";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

const card_icons = [
  {
    title: "Engagement",
    icon: <BusinessCenterIcon></BusinessCenterIcon>
  },
  {
    title: "Well Being",
    icon: <SecurityIcon></SecurityIcon>
  },
  {
    title: "Turn Over",
    icon: <AttachMoneyIcon></AttachMoneyIcon>
  },
  {
    title: "Stress",
    icon: <NotificationImportantIcon />
  }
];

function MyCard(props) {
  return (
    <div
      style={{ boxShadow: "rgba(0,0,0,.1) 0px 4px 8px 0px" }}
      className="card my-2 mx-2 px-1 py-2 w-25 rounded border border-muted"
    >
      <div
        className="container container-fluid"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end"
        }}
      >
        {card_icons.map((field, index) => (
          <ListItemIcon>
            {field.title === props.name ? field.icon : ""}
          </ListItemIcon>
        ))}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <ProgressBar color={props.color} progress={props.progress} />
      </div>
    </div>
  );
}

export default MyCard;
