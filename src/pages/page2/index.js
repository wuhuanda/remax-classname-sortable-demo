import * as React from "react";
import { View } from "remax/wechat";
import Button from "@/components/Button";

import styles from "./index.module.css";

export default () => {
  return (
    <View>
      Page2
      <Button className={styles.bg}>Button222</Button>
    </View>
  );
};
