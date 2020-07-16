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
          "APPLETON ESTATE JAMAICA RUM An iconic Jamaica product and internationally acclaimed rum brand, is poured at all Sandals Resorts throughout the Caribbean.",
      },
      {
        icon: <FaHiking />,
        title: "Beautiful Trails",
        info:
          "Whether you seek adrenaline-pumping activities or more low-key pursuits, every conceivable activity is included in your stay. Play tennis, day or night, on lighted courts or dig your toes in the sand with a competitive game of beach volleyball. Take in a playful game of croquet or bocce ball or enjoy some drinks over billards and darts. It’s all here with top-of-the-line equipment and expert instruction. And best of all, you can do it all...or do absolutely nothing at all.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Quick Ride to the Airport",
        info:
          "SuperShuttle, or Blue Van, leads the nation in shared ride airport shuttle service such as SuperShuttle Tampa International (TPA) airport.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Strong ale is a type of ale, usually above 5% abv and often higher, between 7% to 11% abv, which spans a number of beer styles, including old ale, barley wine and Burton ale. Strong ales are brewed throughout Europe and beyond, including in England, Belgium and the United States.",
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
