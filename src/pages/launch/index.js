import React, { useEffect } from "react";
import { View, navigateTo } from "remax/wechat";

export default function() {
  useEffect(() => {
    setTimeout(() => {
      // navigateTo({ url: "/pages/home/gonglue/index" });
      navigateTo({url: "/pages/index/index"})
    }, 2 * 1000);
  });
  return <View>launch loading</View>;
}
