import React from "react";
import { Settings } from "./Settings";
import * as SC from "./styles";
import Toggle from "react-toggled";

class Item extends React.Component {
  state = {
    initialTouch: 0,
    finalTouch: 0,
    isOpen: false
  };

  handleTapStart = x => {
    this.setState({
      initialTouch: x
    });
  };

  handleTapEnd = x => {
    this.setState(
      {
        finalTouch: x
      },
      () => {
        const { initialTouch, finalTouch } = this.state;

        if (Math.abs(finalTouch - initialTouch) > 10) {
          this.setState({
            isOpen: initialTouch > finalTouch
          });
        }
      }
    );
  };

  onTouchStart = event => {
    const { pageX } = event.touches[0];

    this.handleTapStart(pageX);
  };

  onTouchEnd = event => {
    const { pageX } = event.changedTouches[0];

    this.handleTapEnd(pageX);
  };

  onMouseDown = event => {
    const { pageX } = event;

    this.handleTapStart(pageX);
  };

  onMouseUp = event => {
    const { pageX } = event;

    this.handleTapEnd(pageX);
  };

  render() {
    const { item } = this.props;
    return (
      <Toggle onToggle={this.handleTapEnd}>
        {({ on, getTogglerProps }) => (
          <SC.Item
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
          >
            <SC.ItemTitle isOpen={on}>{item.title}</SC.ItemTitle>
            <Settings className="item__settings" />
          </SC.Item>
        )}
      </Toggle>
    );
  }
}

export { Item };
