import React, { Fragment, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { Slider } from "react-burgers";

import cx from "classnames";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "reactstrap";

import {
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../redux/themeOptionsSlice";

const AppMobileMenu = () => {
  const dispatch = useDispatch();
  let { enableMobileMenu, enableMobileMenuSmall } = useSelector(
    (state) => state.ThemeOptions
  );

  const [state, setState] = useState({
    active: false,
    mobile: false,
    activeSecondaryMenuMobile: false,
  });

  const toggleMobileSidebar = () => {
    dispatch(setEnableMobileMenu(!enableMobileMenu));
  };

  const toggleMobileSmall = () => {
    dispatch(setEnableMobileMenuSmall(!enableMobileMenuSmall));
  };

  /*   state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 280,
    noTouchOpen: false,
    noTouchClose: false,
  }; */

  return (
    <Fragment>
      <div className="app-header__mobile-menu">
        <div onClick={toggleMobileSidebar}>
          <Slider
            width={26}
            lineHeight={2}
            lineSpacing={5}
            color="#6c757d"
            active={state.active}
            onClick={() => setState({ active: !state.active })}
          />
        </div>
      </div>
      <div className="app-header__menu">
        <span onClick={toggleMobileSmall}>
          <Button
            size="sm"
            className={cx("btn-icon btn-icon-only", {
              active: state.activeSecondaryMenuMobile,
            })}
            color="primary"
            onClick={() =>
              setState({
                activeSecondaryMenuMobile: !state.activeSecondaryMenuMobile,
              })
            }
          >
            <div className="btn-icon-wrapper">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </Button>
        </span>
      </div>
    </Fragment>
  );
};

export default AppMobileMenu;
