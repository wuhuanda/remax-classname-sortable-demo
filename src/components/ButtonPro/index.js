import React from "react";
import { View } from "remax/wechat";
import merge from "lodash/merge";
import PropTypes from "prop-types";
import PressView from "@/components/PressView";
import classNames from "classnames";

import styles from "./style.module.scss";

export const Solid = "Solid";
export const Outline = "Outline";

/**
 * @param {string} size - 按钮尺寸 small (height: 44, fontSize: 24), normal (height: 78, fontSize: 28)
 */
function Button({
  children,
  style,
  className,
  loading,
  disabled,
  type,
  full,
  size, // 'small' or 'normal'
  circle,
  onClick,
  onGetUserInfo,
  ...restAttr
}) {
  const isDisabled = disabled || loading;
  const buttonStyle = merge(
    isDisabled && { opacity: 0.3 },
    !circle && { borderRadius: 0 },
    full && { width: "auto" },
    style
  );

  return (
    <PressView
      disabled={isDisabled}
      onClick={onClick}
      onGetUserInfo={onGetUserInfo}
      {...restAttr}
    >
      <View
        style={buttonStyle}
        className={classNames(
          type === Solid && styles.buttonSolid,
          type === Outline && styles.buttonOutline,
          size === "normal" ? styles.buttonNormal : styles.buttonSmall,
          styles.button,
          className
        )}
      >
        {children}
      </View>
    </PressView>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([Solid, Outline]),
  full: PropTypes.bool,
  size: PropTypes.oneOf(["small", "normal"]),
  circle: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  loading: false,
  disabled: false,
  type: Solid,
  full: false,
  size: "normal",
  circle: true,
  onClick: () => {}
};

export default Button;
