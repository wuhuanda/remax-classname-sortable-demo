import React from 'react'
import { View } from 'remax/wechat'
import styles from './style.module.scss'

function Step({ children }) {
  return (
    <View className={styles.stepContainer}>
      <View className={styles.steps}>
        {children}
      </View>
    </View>
  )
}

export default Step
