import React from "react";
import UserList from "./jsx/UserList";
import BestFriendsList from "./jsx/BestFriendsList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <UserList />
        </div>
        <div className="best_friends">
          <BestFriendsList />
        </div>
      </div>
    );
  }
}
export default App;
