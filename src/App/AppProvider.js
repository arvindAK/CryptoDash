import React, { Component } from "react";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }

  savedSettings() {
    let crytoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!crytoDashData) {
      return { page: "settings", firstVisit: true };
    }
    return {};
  }

  setPage = page => this.setState({ page });

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard"
    });

    localStorage.setItem(
      "crytoDash",
      JSON.stringify({
        test: "hello"
      })
    );
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}