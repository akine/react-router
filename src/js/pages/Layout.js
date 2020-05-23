import React from "react";
import { Link, withRouter } from "react-router-dom"

class Layout extends React.Component {
  navigate() {
    console.log(this.props.history);
    this.props.history.replace("/");
  }
  render() {
    return (
      <div>
        <h1>News.net</h1>
        {this.props.children}
        <Link to="archives" class="btn btn-danger">archives</Link>
        <Link to="settings" class="btn btn-success">settings</Link>
        <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}

export default withRouter(Layout);