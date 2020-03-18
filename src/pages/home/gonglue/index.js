import React, { useState, useEffect, useCallback } from "react";
import { View } from "remax/wechat";
import classNames from "classnames";
import TaskTab from "./components/TaskTab";

import styles from "./style.module.scss";

function GongLue() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabSwitch = i => {
    setTabIndex(i);
  };

  const renderTabItem = (index, title) => {
    const isActive = index === tabIndex;
    return (
      <View
        onClick={() => handleTabSwitch(index)}
        className={classNames(styles.footerItem, isActive && styles.tabActive)}
      >
        {title}
        <View className={classNames(isActive && styles.activeUnderline)}></View>
      </View>
    );
  };

  // tab
  const renderTabs = () => {
    return (
      <View className={styles.tabsContainer}>
        {renderTabItem(0, "新手秘籍")}
        {renderTabItem(1, "今日热榜")}
        {renderTabItem(2, "常见问答")}
      </View>
    );
  };

  return (
    <View>
      {renderTabs()}
      <TaskTab tabIndex={tabIndex} handleJump={() => {}} />
    </View>
  );
}

export default GongLue;
