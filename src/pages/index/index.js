import * as React from "react";
import { View, Text, Image } from "remax/wechat";
import Button from "../../components/Button";

import styles from "./index.module.css";

export default () => {
  return (
    <View>
      <Button className={styles.bg}>Button</Button>
    </View>
  );
};
