import { React, Component } from "react";

function withToggler(Component) {
  return function (props) {
    return <Toggler CalledComp={Component} {...props} />;
  };
}

class Toggler extends Component {
  state = {
    togglestate: "false",
  };
  toggling = () => {
    this.setState({ togglestate: !this.state.togglestate });
  };

  render() {
    const TheCalledComp = this.props.CalledComp;

    return (
      <div>
        <TheCalledComp
          toggleValue={this.state.togglestate}
          Toggling={this.toggling}
        />
      </div>
    );
  }
}

export default withToggler;
