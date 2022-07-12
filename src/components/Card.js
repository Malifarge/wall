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
            <h3>infos</h3>
            <p>mail: {this.props.mail}</p>
            <p>phone: {this.props.tel}</p>
            <p>{this.props.address}</p>
        </div>

        <div>
            <h3>About</h3>
            <p>{this.props.about}</p>
        </div>

        <p style={{
          textAlign: "right",
          position: "relative",
          bottom: "-40px",   
          color: "rgba(128, 128, 128, 0.3)"  
        }}>{this.props.register}</p>

      </article>
    )
  }
}

export default Card 