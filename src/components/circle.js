import React from "react";

export default class Bubble extends React.Component {
  state = {
    visable: true,
    colour: "#FBCFD0"
  };
  changeVisability = () => {
    this.setState({ visable: false });
  };
  changeColour = () => {
    this.setState({ colour: "#f90206" }, () => {
      setTimeout(() => {
        this.setState({ colour: "#FBCFD0" });
      }, 1000);
    });
  };
  render() {
    if (this.state.visable === false) return null;
    return (
      <div className="circle_container">
        <svg width="6.5em" height="6.5em">
          <circle
            cx="50"
            cy="50"
            r="3em"
            opacity={this.props.opacity}
            fill={this.state.colour}
            ref={this.props.text}
            onClick={() => this.props.onClick(this.props.text)}
          />
          <text x="50%" y="50%" textAnchor="middle">
            {this.props.text}
          </text>
        </svg>
      </div>
    );
  }
}

Bubble.defaultProps = {
  height: "6.5em",
  width: "6.5em",
  radius: "3em",
  opacity: 0.3,
  text: "flo"
};
