import React from 'react'

export default class Footnote extends React.Component {
  render() {
    const { author, title, year, extra } = this.props
      return <div style={{fontSize: '0.7em'}}>
      <hr width={'25%'} style={{textAlign: 'left'}} />
        <span>{author}. </span> 
        <span>{year}. </span> 
        <emph style={{fontStyle: 'italic'}}>{title}. </emph> 
        <span>{extra}</span>
      </div>
  }
}
