import React from 'react'

class Card extends React.Component {
  render() {
    console.log(this);
    return (
      <article className='box col-sm-3 col-6'>
        <div className='profil'>
            <div className='PP'>
              <img source={this.props.picture} alt="128 x 128"/>
            </div>
            <h2>{this.props.name}</h2>
        </div>

        <div>
            <p>{this.props.about}</p>
        </div>
      </article>
    )
  }
}

export default Card 