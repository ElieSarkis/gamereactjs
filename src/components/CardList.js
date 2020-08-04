import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import cardcover from "../assets/cardcover.jpg";
import correct from "../assets/correct.png";
import wrongandsad from "../assets/wrongandsad.png";
import wrong from "../assets/wrong.png";
import ModalComponent from "./ModalComponent";
import "./responsiveness.css";

const CardList = () => {
  const handleClick = (item) => {
    if (item.hasBeenPressed) {
      return;
    }
    if (item.backSrc !== correct) {
      mistakes.push(item.backSrc);
    }
    if (item.backSrc === correct) {
      correctAnswers.push(item.backSrc);
    }

    const elementsIndex = arrayOfImages.findIndex(
      (element) => element.id == item.id
    );
    let newArray = [...arrayOfImages];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      isFlipped: !newArray[elementsIndex].isFlipped,
      hasBeenPressed: true,
    };
    setArrayOfImages(newArray);

    if (mistakes.length >= 3) {
      setTextTitle("Game Over");
      setTextContent("Thank you for playing");
      setIsOpen(true);
    } else if (correctAnswers.length >= 3) {
      setTextTitle("Congratulations");
      setTextContent("You won");
      setIsOpen(true);
    }
    return;
  };

  const [arrayOfImages, setArrayOfImages] = useState([
    {
      src: cardcover,
      backSrc: correct,
      id: 1,
      isFlipped: false,
      hasBeenPressed: false,
    },
    {
      src: cardcover,
      backSrc: correct,
      id: 2,
      isFlipped: false,
      hasBeenPressed: false,
    },
    {
      src: cardcover,
      backSrc: correct,
      id: 3,
      isFlipped: false,
      hasBeenPressed: false,
    },
    {
      src: cardcover,
      backSrc: wrongandsad,
      id: 4,
      isFlipped: false,
      hasBeenPressed: false,
    },
    {
      src: cardcover,
      backSrc: wrongandsad,
      id: 5,
      isFlipped: false,
      hasBeenPressed: false,
    },
    {
      src: cardcover,
      backSrc: wrongandsad,
      id: 6,
      isFlipped: false,
      hasBeenPressed: false,
    },
    {
      src: cardcover,
      backSrc: wrong,
      id: 7,
      isFlipped: false,
      hasBeenPressed: false,
    },
    {
      src: cardcover,
      backSrc: wrong,
      id: 8,
      isFlipped: false,
      hasBeenPressed: false,
    },
    {
      src: cardcover,
      backSrc: wrong,
      id: 9,
      isFlipped: false,
      hasBeenPressed: false,
    },
  ]);

  const [mistakes] = useState([]);
  const [correctAnswers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [textTitle, setTextTitle] = useState("");
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    let randomOrder = [];
    while (arrayOfImages.length !== 0) {
      let randomIndex = Math.floor(Math.random() * arrayOfImages.length);
      randomOrder.push(arrayOfImages[randomIndex]);
      arrayOfImages.splice(randomIndex, 1);
    }
    setArrayOfImages(randomOrder);
  }, []);

  return (
    <div
      style={{
        alignSelf: "center",
        textAlign: "center",
        width: "50%",
        float: "none",
        margin: "0 auto",
        marginLeft: "28%",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {arrayOfImages.map((item) => {
          return (
            <li style={{ cursor: "pointer" }} key={item.id}>
              <ReactCardFlip
                isFlipped={item.isFlipped}
                flipDirection="vertical"
              >
                <div>
                  <img
                    className="image-container"
                    width="150px"
                    height="200px"
                    src={item.src}
                    onClick={() => handleClick(item)}
                    style={{ borderRadius: 20, padding: 10 }}
                  />
                </div>

                <div>
                  <img
                    width="150px"
                    height="200px"
                    src={item.backSrc}
                    onClick={() => handleClick(item)}
                    style={{
                      borderRadius: 20,
                      padding: 10,
                    }}
                  />
                </div>
              </ReactCardFlip>
            </li>
          );
        })}
      </ul>
      <ModalComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        textTitle={textTitle}
        textContent={textContent}
      />
    </div>
  );
};

export default CardList;
