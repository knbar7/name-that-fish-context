import { createContext, useContext, useState } from "react";
import { Images } from "./assets/images";

const FishContext = createContext({})

export const FishProvider = ({ children }) => {
    const initialFishes = [
      {
        name: "trout",
        url: Images.trout,
      },
      {
        name: "salmon",
        url: Images.salmon,
      },
      {
        name: "tuna",
        url: Images.tuna,
      },
      {
        name: "shark",
        url: Images.shark,
      },
    ];
  
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [fishIndex, setFishIndex] = useState(0);
    const totalCount = initialFishes.length;
    const showFinalScore = fishIndex === initialFishes.length;
  
    const answersLeft = initialFishes
      .filter((_, index) => index >= fishIndex)
      .map((fish) => fish.name);
  
    const handleAnswer = (fishName) => {
      if (fishName === initialFishes[fishIndex].name) {
        setCorrectCount(correctCount + 1);
      } else {
        setIncorrectCount(incorrectCount + 1);
      }
      setFishIndex(fishIndex + 1);
    };
  
    return (
      <FishContext.Provider
        value={{
          initialFishes,
          fishIndex,
          showFinalScore,
          setFishIndex,
          correctCount,
          setCorrectCount,
          incorrectCount,
          setIncorrectCount,
          totalCount,
          answersLeft,
          handleAnswer,
        }}
      >
        {children}
      </FishContext.Provider>
    );
  };
  

export const useFish = () => {
    const context = useContext(FishContext);
    return context;
}