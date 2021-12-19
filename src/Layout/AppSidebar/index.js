import React, { Component, Fragment } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import Nav from "../AppNav/VerticalNavWrapper";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PerfectScrollbar from "react-perfect-scrollbar";
import HeaderLogo from "../AppLogo";

import { setEnableMobileMenu } from "../../redux/themeOptionsSlice";

const AppSidebar = () => {
  let {
    backgroundColor,
    enableBackgroundImage,
    enableSidebarShadow,
    backgroundImage,
    backgroundImageOpacity,
    enableMobileMenu,
  } = useSelector((state) => state.ThemeOptions);
  const dispatch = useDispatch();

  const toggleMobileSidebar = () => {
    dispatch(setEnableMobileMenu(!enableMobileMenu));
  };

  return (
    <Fragment>
      <div className="sidebar-mobile-overlay" onClick={toggleMobileSidebar} />
      <CSSTransitionGroup
        component="div"
        className={cx("app-sidebar", backgroundColor, {
          "sidebar-shadow": enableSidebarShadow,
        })}
        transitionName="SidebarAnimation"
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <HeaderLogo />
        <PerfectScrollbar>
          <div className="app-sidebar__inner">
            <Nav />
          </div>
        </PerfectScrollbar>
        <div
          className={cx("app-sidebar-bg", backgroundImageOpacity)}
          style={{
            backgroundImage: enableBackgroundImage
              ? "url(" + backgroundImage + ")"
              : null,
          }}
        ></div>
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default AppSidebar;
