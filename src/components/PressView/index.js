import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'remax/wechat'

function PressView({ children, onClick, ...restAttr }) {
  return (
    <Button
      // onClick={debounce(onClick, 300)}
      plain
      onClick={e => {
        e.stopPropagation()
        onClick()
      }}
      {...restAttr}
    >
      {children}
    </Button>
  )
}

PressView.propTypes = {
  onClick: PropTypes.func,
}

PressView.defaultProps = {
  onClick: () => {},
}

export default PressView
