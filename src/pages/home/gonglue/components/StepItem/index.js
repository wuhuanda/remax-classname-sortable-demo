import React from "react";
import { View, Text } from "remax/wechat";
import Button from "@/components/Button";
import styles from "./style.module.scss";
import Divider from "@/components/Divider";

function StepItem({
  index,
  title,
  content,
  button,
  event = () => {},
  isLyg = false,
  isLast = false
}) {
  const firstStepTailStyle = {
    top: 31
  };

  const renderButton = () => {
    return (
      button &&
      (isLyg ? (
        <Button openType="share" className={styles.gongLueButton}>
          {button}
        </Button>
      ) : (
        <Button onClick={event} className={styles.gongLueButton}>
          {button}
        </Button>
      ))
    );
  };

  return (
    <View className={styles.stepItem}>
      <View
        style={index === 0 && firstStepTailStyle}
        className={styles.stepItemTail}
      ></View>
      <View className={styles.stepIcon}></View>
      <View className={styles.stepItemContent}>
        <View style={{ display: "flex" }}>
          <View className={styles.gongLueTitle}>{title}</View>
          {renderButton()}
        </View>
        <Divider height={button ? 19 : 30} />
        <View
          style={{ width: button ? 480 : 635 }}
          className={styles.gongLueContentContainer}
        >
          {content.map((v, i) => (
            <View key={i}>{v}</View>
          ))}
        </View>
        {!isLast && (
          <>
            <Divider height={30} />
            <Divider height={10} color={"#f5f5f5"} />
            <Divider height={30} />
          </>
        )}
      </View>
    </View>
  );
}

export default StepItem;
