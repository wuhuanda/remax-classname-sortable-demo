import React from "react";
import { View } from "remax/wechat";
import classNames from "classnames";

import styles from "./style.module.css";
export default function({ className, children }) {
  return (
    <View className={classNames(styles.comBg, className)}>{children}</View>
  );
}
