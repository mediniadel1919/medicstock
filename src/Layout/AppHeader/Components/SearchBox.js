import React, { Fragment } from "react";

import cx from "classnames";
//integrate search
class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSearch: window.innerWidth < 380 ? false: true,
    };
  }

  render() {
    return (
      <Fragment>
        <div className={cx("search-wrapper", {
            active: this.state.activeSearch,
          })}>
          <div className="input-holder">
            <input type="text" className="search-input" placeholder="Veuillez saisir un mot"/>
            <button onClick={() =>

                this.setState({ activeSearch: !this.state.activeSearch && true })
              }
              className="search-icon">
              <span />
            </button>
          </div>
          <button onClick={() =>
              this.setState({ activeSearch: !this.state.activeSearch })
            }
            className="close"/>
        </div>
      </Fragment>
    );
  }
}

export default SearchBox;
