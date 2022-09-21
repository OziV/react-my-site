import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, ButtonBase } from "@mui/material";

import { FaGithubSquare } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";

import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
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
      case "javascript":
        symbols.push(<IoLogoJavascript />);
        break;
      case "react":
        symbols.push(<SiReact />);
        break;
      case "redux":
        symbols.push(<SiRedux />);
        break;
      case "nodejs":
        symbols.push(<FaNodeJs />);
        break;
      case "mongodb":
        symbols.push(<DiMongodb />);
        break;
      case "sql":
        symbols.push(<GrMysql />);
        break;
      case "firebase":
        symbols.push(<SiFirebase />);
        break;
      case "angular":
        symbols.push(<IoLogoAngular />);
        break;
      case "python":
        symbols.push(<IoLogoPython />);
        break;
      case "java":
        symbols.push(<FaJava />);
        break;
      case "vue_js":
        symbols.push(<FaVuejs />);
        break;
      case "google_analytics":
        symbols.push(<TbBrandGoogleAnalytics />);
        break;
      case "bootstrap":
        symbols.push(<SiBootstrap />);
        break;
      case "mui":
        symbols.push(<SiMaterialui />);
        break;
      default:
        symbols.push("");
    }
    return symbols;
  };

  return (
    <Card className="card-size">
      <CardActionArea>
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
            {homepage.includes("oziv.")
              ? "my portfolio "
              : homepage.substr(13, homepage.indexOf(".") - 13)}
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
