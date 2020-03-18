import React from "react";
import { View } from "remax/wechat";
import Step from "../Step";
import StepItem from "../StepItem";
import Divider from "../../../../../components/Divider";

function TaskTab({ tabIndex, handleJump }) {
  const guideList = [
    {
      title: "task1",
      content: ["content"],
      button: "click me"
    }
  ];

  const renderStep = () => {
    return (
      <Step>
        {guideList.map(({ title, content, button, isLyg }, index) => {
          const isLast = index === guideList.length - 1;
          return (
            <StepItem
              key={index}
              index={index}
              title={title}
              button={button}
              content={content}
              isLyg={isLyg}
              isLast={isLast}
            />
          );
        })}
      </Step>
    );
  };

  const isActive = tabIndex === 0;
  return (
    <View
      style={{
        height: "100vh",
        backgroundColor: "#fff",
        display: isActive ? "block" : "none"
      }}
    >
      <Divider height={80} />
      {renderStep()}
    </View>
  );
}

export default TaskTab;
