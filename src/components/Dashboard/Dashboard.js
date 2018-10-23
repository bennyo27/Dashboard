import React from "react";
import { escapeComponent } from "uri-js";

class Dashboard extends escapeComponent.React {
  render() {
    return (
      <div className="">
        <Notes />
      </div>
    );
  }
}

export default Dashboard;
