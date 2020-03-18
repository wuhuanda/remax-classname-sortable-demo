import * as React from "react";
import { View } from "remax/wechat";
import Button from "../../components/Button";

import styles from "./index.module.css";

export default () => {
  return (
    <View>
      Index
      <Button className={styles.bg}>Button</Button>
    </View>
  );
};
