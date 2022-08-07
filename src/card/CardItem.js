import React, { useState } from "react";
import uuid from "react-uuid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiReact } from "react-icons/si";
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

function CardItem({ data }) {
  const [projectsList, setProjectsList] = useState(data);

  const checkSymbol = (technologies) => {
    const symbols = [];
    Object.entries(technologies).forEach(([key, value]) => {
      if (key) {
        Object.entries(value).forEach(([key, value]) => {
          if (value) {
            switch (key) {
              case "css":
                symbols.push(<IoLogoCss3 />);
                break;
              case "html":
                symbols.push(<IoLogoHtml5 />);
                break;
              case "javascript":
                symbols.push(<IoLogoJavascript />);
                break;
              case "reactjs":
                symbols.push(<SiReact />);
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
              case "material_ui":
                symbols.push(<SiMaterialui />);
                break;
              default:
                symbols.push("");
            }
          }
        });
      }
    });
    return symbols;
  };

  const CreateCard = () => {
    return (
      <div className="card-container" key={uuid()}>
        {projectsList.map((project, projectIndex) => {
          const {
            id,
            name,
            is_public,
            rating,
            url_site,
            url_git,
            info,
            technologies,
            screenshots,
          } = project;
          return (
            <div key={uuid()}>
              <Card className="card-size">
                <CardActionArea href={url_site}>
                  <CardMedia
                    className="card-media"
                    component="img"
                    image={screenshots.img_1}
                    alt={name}
                  ></CardMedia>
                  <CardContent className="align-start">
                    <div className="symbols">{checkSymbol(technologies)}</div>
                    <div variant="h5" className="font-color-black card-title">
                      {name}
                    </div>
                    <div variant="body1" className="font-color-black card-info">
                      {info}
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions className="card-btns">
                  <a href={url_site} target="_blank" className="card-btn">
                    <TbWorld className="card-icon-btn" />
                  </a>
                  <a href={url_git} target="_blank" className="card-btn">
                    <BsGithub className="card-icon-btn" />
                  </a>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="cards-container">
      <CreateCard />
    </section>
  );
}

export default CardItem;
