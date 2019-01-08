import React from 'react'

export default class Quote extends React.Component {
  render() {
    const { children } = this.props
    const style = {
      color: '#6a737d',
      fontStyle: 'italic',
      borderLeft: '0.25em solid #dfe2e5',
      padding: '0 1em'
    }
      return <blockquote style={style}><p>
      {children}
      </p></blockquote>
  }
}
