import React, { useEffect, useState } from "react";

type SkillsProps = {
  skills: string[];
};

const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoggedIn(true)
    },500)
  },[])
  return (
    <>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
      {
        isLoggedIn ? (
          <button>Start learning</button>
        ) : (
          <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        )
      }
    </>
  );
};

export default Skills
