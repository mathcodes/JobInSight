import React, { Component } from "react";
import FullRowComponent from "../FullRowComponent";
import Wrapper from "../Wrapper";
import Title from "../Title";
import friends from "../../friends.json"

class FullRowHeader extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.friends.map(friend => (
          <FullRowComponent
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            url={friend.location}
            location={friend.location}
            youTubeSrc={friend.youTubeSrc}
            tester={friend.tester}
          />
        ))}
      </Wrapper>
    );
  }
}

export default FullRowHeader;
