import * as React from "react";
import { View } from "remax/wechat";
import TestCom from "@/components/TestCom";

import styles from "./index.module.css";

export default () => {
  return (
    <View>
      Page2
      <TestCom className={styles.bg}>Page2's is green</TestCom>
    </View>
  );
};
