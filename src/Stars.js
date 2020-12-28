import React from "react";
import "./Stars.css";

const Stars = (props) => {
  //별점-총점
  var stars = [];
  for (var i = 0; i < Math.floor(props.total); i++) {
    stars[i] = 10;
  }
  var starint = Math.floor(props.total);
  var starurl = props.total - starint;
  stars[Math.floor(props.total)] = starurl.toFixed(1) * 10; //소수점 별
  for (var j = Math.floor(props.total) + 1; j < 5; j++) {
    stars[j] = 0;
  }

  //유저 별점
  const setStar0 = (rate) => {
    if (rate >= 1) {
      return 10;
    } else {
      return 0;
    }
  };

  const setStar1 = (rate) => {
    if (rate >= 2) {
      return 10;
    } else if (rate > 1) {
      var tmp = Math.round(((rate - 2) * 10) / 2);
      return Number(tmp);
    } else {
      return 0;
    }
  };

  const setStar2 = (rate) => {
    if (rate >= 3) {
      return 10;
    } else if (rate > 2) {
      var tmp = Math.round(((rate - 4) * 10) / 2);
      return Number(tmp);
    } else {
      return 0;
    }
  };

  const setStar3 = (rate) => {
    if (rate >= 4) {
      return 10;
    } else if (rate > 3) {
      var tmp = Math.round(((rate - 6) * 10) / 2);
      return Number(tmp);
    } else {
      return 0;
    }
  };

  const setStar4 = (rate) => {
    if (rate >= 5) {
      return 10;
    } else if (rate > 4) {
      var tmp = Math.round(((rate - 8) * 10) / 2);
      return Number(tmp);
    } else {
      return 0;
    }
  };

  return (
    <div className="stars_wrapper">
      <div className="wrap-star">
        <img
          src={require(`./imgs/star${stars[0]}.svg`).default}
          alt="stars"
          className="star"
        ></img>
        <img
          src={require(`./imgs/star${stars[1]}.svg`).default}
          alt="stars"
          className="star"
        ></img>
        <img
          src={require(`./imgs/star${stars[2]}.svg`).default}
          alt="stars"
          className="star"
        ></img>
        <img
          src={require(`./imgs/star${stars[3]}.svg`).default}
          alt="stars"
          className="star"
        ></img>
        <img
          src={require(`./imgs/star${stars[4]}.svg`).default}
          alt="stars"
          className="laststar"
        ></img>
        <span className="total_rate">{props.total} / 5</span>
      </div>
      <div className="list_star_wrapper">
        <img
          src={require(`./imgs/star${setStar0(props.rating)}.svg`).default}
          alt="list_stars"
          className="personalStars"
        ></img>
        <img
          src={require(`./imgs/star${setStar1(props.rating)}.svg`).default}
          alt="list_stars"
          className="personalStars"
        ></img>
        <img
          src={require(`./imgs/star${setStar2(props.rating)}.svg`).default}
          alt="list_stars"
          className="personalStars"
        ></img>
        <img
          src={require(`./imgs/star${setStar3(props.rating)}.svg`).default}
          alt="list_stars"
          className="personalStars"
        ></img>
        <img
          src={require(`./imgs/star${setStar4(props.rating)}.svg`).default}
          alt="list_stars"
          className="personalStars"
        ></img>
        <span className="list_rate">{props.rating} / 5</span>
      </div>
    </div>
  );
};

export default Stars;
