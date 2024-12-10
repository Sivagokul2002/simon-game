import React, { useState, useEffect, useSound } from "react";

const Simon = () => {
  const [level, setLevel] = useState(0);
  const [start, setStart] = useState(false);
  const colorPattern = ["blue", "red", "green", "yellow"];
  let generatedPattern = [];
  let userPattern = [];

  useEffect(() => {
    onkeydown = (event) => {
      console.log(event);
      initializeGame();
    };
  }, []);

  const randomNumber = () => {
    return Math.floor(Math.random() * 4);
  };

  const initializeGame = () => {
    for (let i = 0; i <= level; i++) {
      const generatedRandomColor = colorPattern[randomNumber()];
      console.log(generatedRandomColor);
      // sound(generatedRandomColor);
      generatedPattern = [...generatedPattern, generatedRandomColor];
    }
  };

  const userGeneratePattern = (color) => {
    console.log(color, "color");
    // sound(color);
    userPattern = [...userPattern, color];
    console.log(generatedPattern,"generatedPattern");
    console.log(userPattern,"userPattern");
    if (generatedPattern?.length === userPattern?.length) {
      patternCheck();
    }
  };

  const patternCheck = () => {
    console.log("called");
    let check = "true";
    for (let i = 0; i <= generatedPattern?.length; i++) {
      if (check === "true") {
        if (generatedPattern[i] === userPattern[i]) {
          check = "true";
        } else {
          check = "false";
          setStart(false);
          setLevel(0);
        }
      }
    }
    if (check === "true") {
      setLevel(level + 1);
      initializeGame();
      userPattern = [];
      console.log(generatedPattern,"generatedPattern");
      console.log(userPattern,"userPattern");
    }
  };

  const sound = (data) => {
    switch (data) {
      case "green":
        var color1 = new Audio("./sounds/green.mp3");
        color1.play();
        break;
      case "red":
        var color2 = new Audio("./sounds/red.mp3");
        color2.play();
        break;
      case "blue":
        var color3 = new Audio("./sounds/blue.mp3");
        color3.play();
        break;
      case "yellow":
        var color4 = new Audio("./sounds/yellow.mp3");
        color4.play();
        break;
      default:
        var color5 = new Audio("sounds/wrong.mp3");
        color5.play();
        break;
    }
  };

  return (
    <div className="text-center bg-[#011f3f] h-screen">
      <h1 className="text-3xl font-bold underline text-white">
        Press any key to start!
      </h1>
      <p className="my-[30px] text-xl text-white">Level - {level}</p>
      <div className="">
        <div className="d-flex">
          <button
            className="align-middle w-[180px] h-[180px]  mx-[30px] my-[20px]  border-[10px] border-black rounded-lg bg-[blue]"
            onClick={() => {
              userGeneratePattern("blue");
            }}
          >
            Blue
          </button>
          <button
            className="align-middle w-[180px] h-[180px]  mx-[30px] my-[20px]  border-[10px] border-black rounded-lg bg-[red]"
            onClick={() => {
              userGeneratePattern("red");
            }}
          >
            Red
          </button>
        </div>
        <div className="d-flex">
          <button
            className="align-middle w-[180px] h-[180px]  mx-[30px] my-[20px]  border-[10px] border-black rounded-lg bg-[green]"
            onClick={() => {
              userGeneratePattern("green");
            }}
          >
            Green
          </button>
          <button
            className="align-middle w-[180px] h-[180px]  mx-[30px] my-[20px]  border-[10px] border-black rounded-lg bg-[yellow]"
            onClick={() => {
              userGeneratePattern("yellow");
            }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Simon;
