import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, ButtonBase } from "@mui/material";

import { FaGithubSquare } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";

import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { IoLogoAngular } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";

function Project(project) {
  const {
    name,
    created_at,
    description,
    homepage,
    html_url,
    language,
    topics,
    visibility,
    full_name,
  } = project;

  const imageURL = `https://raw.githubusercontent.com/${full_name}/main/public/utils/screenshot-1.png`;

  const checkSymbol = (topic) => {
    const symbols = [];
    switch (topic) {
      case "css":
        symbols.push(<IoLogoCss3 color="#264DE4" />);
        break;
      case "html":
        symbols.push(<IoLogoHtml5 color="#DD4B25" />);
        break;
      case "javascript":
        symbols.push(<IoLogoJavascript color="#F7E018" />);
        break;
      case "react":
        symbols.push(<SiReact color="#61DBFB" />);
        break;
      case "redux":
        symbols.push(<SiRedux color="#7649BB" />);
        break;
      case "nodejs":
        symbols.push(<FaNodeJs color="#90C53F" />);
        break;
      case "mongodb":
        symbols.push(<DiMongodb color="#12924F" />);
        break;
      case "sql":
        symbols.push(<GrMysql color="#FEB300" />);
        break;
      case "firebase":
        symbols.push(<SiFirebase color="#F5820B" />);
        break;
      case "mui":
        symbols.push(<SiMaterialui color="#007FFF" />);
        break;
      case "angular":
        symbols.push(<IoLogoAngular color="#DD0031" />);
        break;
      case "python":
        symbols.push(<IoLogoPython color="#3671A3" />);
        break;
      case "java":
        symbols.push(<FaJava color="#5283A2" />);
        break;
      case "vue_js":
        symbols.push(<FaVuejs color="#3FB984" />);
        break;
      case "google_analytics":
        symbols.push(<TbBrandGoogleAnalytics color="#FFC517" />);
        break;
      case "bootstrap":
        symbols.push(<SiBootstrap color="#7511F1" />);
        break;
      case "styled-components":
        symbols.push(<SiStyledcomponents color="#D874B1" />);
        break;
      default:
        symbols.push("");
    }
    return symbols;
  };

  return (
    <Card className="card-size">
      <CardActionArea href={homepage} className="card-action-area">
        <CardMedia
          className="card-media"
          component="img"
          image={imageURL}
          alt={name}
        ></CardMedia>
        <CardContent className="align-start">
          <div className="symbols-container">
            {topics.map((topic) => {
              return <div className="symbols">{checkSymbol(topic)}</div>;
            })}
          </div>
          <div variant="h5" className="font-color-black card-title">
            {name.includes("react") ? name.substring(6) : name}
            {/* {homepage.includes("oziv.")
              ? "my portfolio "
              : homepage.substr(13, homepage.indexOf(".") - 13)} */}
          </div>
          <div variant="body1" className="font-color-black card-info">
            {description}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-btns">
        <a href={html_url} target="_blank" className="card-btn">
          <FaGithubSquare className="card-icon-btn" />
        </a>
        <a href={homepage} target="_blank" className="card-btn">
          <VscLinkExternal className="card-icon-btn" />
        </a>
      </CardActions>
    </Card>
  );
}

export default Project;
