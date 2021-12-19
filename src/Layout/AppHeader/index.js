import cx from "classnames";
import React, { Fragment } from "react";
import { connect, useSelector } from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import HeaderLogo from "../AppLogo";
import UserBox from "./Components/UserBox";
import SearchBox from "./Components/SearchBox";
import HeaderDots from "./Components/HeaderDots";

const Header = () => {
  let { headerBackgroundColor, enableMobileMenuSmall, enableHeaderShadow } =
    useSelector((state) => state.ThemeOptions);
  return (
    <Fragment>
      <CSSTransitionGroup
        component="div"
        className={cx("app-header", headerBackgroundColor, {
          "header-shadow": enableHeaderShadow,
        })}
        transitionName="HeaderAnimation"
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <HeaderLogo />
        <div
          className={cx("app-header__content", {
            "header-mobile-open": enableMobileMenuSmall,
          })}
        >
          <div className="app-header-left">
            <SearchBox />
            {/* <MegaMenu />  */}
          </div>
          <div className="app-header-right">
            <HeaderDots />
            <UserBox />
            {/* <HeaderRightDrawer /> */}
          </div>
        </div>
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default Header;
