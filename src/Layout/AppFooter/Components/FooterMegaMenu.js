import React, { Fragment } from "react";
import { Nav, NavItem } from "reactstrap";

class FooterMegaMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  state = {};

  render() {
    return (
      <Fragment>
        <Nav>
          <NavItem>
            <a href="/">
              {/* ©  */}
            </a>
          </NavItem>
        </Nav>
      </Fragment>
    );
  }
}

export default FooterMegaMenu;
