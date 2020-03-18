import * as React from "react";
import { View } from "remax/wechat";
import TestCom from "@/components/TestCom";

import styles from "./index.module.css";

export default () => {
  return (
    <View>
      Index
      <TestCom className={styles.bg}>Index's is tomato</TestCom>
    </View>
  );
};
