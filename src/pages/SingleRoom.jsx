import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room exists</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms!
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms!
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <section className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img src={item} key={index} alt={name} />;
            })}
          </section>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Information:</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size}SqFt.</h6>
              <h6>
                Max Capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "Pets allowed" : "No Pets Allowed"}</h6>
              <h6>{breakfast && "Free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
