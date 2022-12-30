import React from "react";
import SkillData from "./skillsdata.json";

function SkillRow(props) {
  return (
    <div class={props.direction}>
      <div class="skill-image">
        <img class={props.styleClass} src={props.image} alt="" />
      </div>
      <div class="skill-content">
        <h3>{props.skillTitle}</h3>
        <p>{props.skillDiscription}</p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div class="skills">
      <h2>I can do..</h2>

      {SkillData.map((e) => {
        return (
          <SkillRow
            direction={e.direction}
            styleClass={e.styleClass}
            image={e.image}
            skillTitle={e.skillTitle}
            skillDiscription={e.skillDiscription}
          />
        );
      })}
    </div>
  );
}


export default Skills;
