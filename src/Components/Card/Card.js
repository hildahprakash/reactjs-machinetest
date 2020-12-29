import React, { Fragment } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { connect } from "react-redux";
import "./Card.css";

const mapStateToProps = (state) => {
  return {
    stateValue: state,
  };
};

const Card = (state) => {
  const contentOne = state.stateValue.contentOne.page["content-items"].content;
  const contentTwo = state.stateValue.contentTwo.page["content-items"].content;
  const contentThree = state.stateValue.contentThree.page["content-items"].content;
  const contents = [...contentOne, ...contentTwo, ...contentThree];
  contents.map((x) => (x["image"] = x["poster-image"]));
  return (
    <Fragment>
      <div className="row-wrapper">
        {contents.map((item, i) => (
          <div key={i} className="each-item">
            <LazyLoadImage src={`/assets/images/${item.image}`}/>
            <p className="item">{item.name.length > 10
                    ? item.name.substr(0, 9) + "...."
                    : item.name}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default connect(mapStateToProps)(Card);