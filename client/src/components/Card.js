import React, { Component } from 'react';
import TimeAgo from 'react-timeago'


class Card  extends Component{
  render () {
  	const {deets} = this.props
  	const imgStyle = {
  		backgroundImage: 'url(' + deets.content + ')'
  	}
    console.log(typeof deets.date )
      
    //const timeStamp = deets.date.toString()
    return (
      <div className="card-wrap">
      		<div className="card-label">
                    <TimeAgo date="2016-12-05T18:40:53.794Z"/> ago from {deets.user_name} in {deets.channel_name}</div>
      		<div className="stem"></div>
      		<div className="image-block" style={imgStyle}></div>
      		<p className="attribute">Submitted by: <span></span></p>
      	{/* <div className="reaction">
      			<div className="count">
      				2 <span>Reactions</span>
      			</div>
      			<div className="emojis">

      			</div>
      		</div> */}
      		
      </div>
    )
  }
}
export default Card