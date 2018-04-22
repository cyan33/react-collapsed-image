import React, { Component } from 'react'
import { css } from 'glamor'

export default class CallapsedImage extends Component {
  static defaultProps = {
    offset: '5px',
    pattern: 'horizontal', // 'vertical', 'aggregated'
    limit: 3,
  }

  render() {
    const { offset, children } = this.props
    return (
      <div
        {...css({
          position: 'relative',
        })}
      >
        {React.Children.map(children, (child, i) => (
          <img
            key={i}
            {...child.props}
            {...css({
              display: 'inline-block',
              position: 'absolute',
              left: `${offset * i}px`,
              top: ``,
              zIndex: 100 - i,
            })}
          />
        ))}
      </div>
    )
  }
}
