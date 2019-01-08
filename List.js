import React from 'react'

const style = {textAlign: 'left'};

export default class List extends React.Component {
  render() {
    const { ordered, items } = this.props
    const children = items.map(i => <li>{i}</li>)
    if (ordered)
      return <ol style={style}>{children}</ol>
    return <ul style={style}>{children}</ul>
  }
}
