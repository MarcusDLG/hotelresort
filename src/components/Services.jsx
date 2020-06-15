import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit explicabo harum labore, ab aliquam delectus id doloremque assumenda veniam illo et quibusdam fugiat. Tempore, animi! Voluptates ea non totam.",
      },
      {
        icon: <FaHiking />,
        title: "Beautiful Trails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit explicabo harum labore, ab aliquam delectus id doloremque assumenda veniam illo et quibusdam fugiat. Tempore, animi! Voluptates ea non totam.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Quick Ride to the Airport",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit explicabo harum labore, ab aliquam delectus id doloremque assumenda veniam illo et quibusdam fugiat. Tempore, animi! Voluptates ea non totam.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit explicabo harum labore, ab aliquam delectus id doloremque assumenda veniam illo et quibusdam fugiat. Tempore, animi! Voluptates ea non totam.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
