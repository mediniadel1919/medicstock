import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import {
  Button,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";
import avatar1 from "../../../assets/utils/images/avatars/2.jpg";
import city3 from "../../../assets/utils/images/dropdown-header/city3.jpg";

const UserBox = () => {
  const [state, setState] = useState({ active: false });
  const loggedName = "To replace"; //replace this with useSlector for the logged user

  return (
    <Fragment>
      <div className="header-btn-lg pr-0">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <UncontrolledButtonDropdown>
                <DropdownToggle color="link" className="p-0">
                  <img
                    width={42}
                    className="rounded-circle"
                    src={avatar1}
                    alt=""
                  />
                  <FontAwesomeIcon
                    className="ml-2 opacity-8"
                    icon={faAngleDown}
                  />
                </DropdownToggle>
                <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                  <div className="dropdown-menu-header">
                    <div className="dropdown-menu-header-inner bg-info">
                      <div
                        className="menu-header-image opacity-2"
                        style={{
                          backgroundImage: "url(" + city3 + ")",
                        }}
                      />
                      <div className="menu-header-content text-left">
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                              <img
                                width={42}
                                className="rounded-circle"
                                src={avatar1}
                                alt=""
                              />
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">{loggedName}</div>
                              <div className="widget-subheading opacity-8">
                                Gestion du Stock
                              </div>
                            </div>
                            <div className="widget-content-right mr-2">
                              <Link
                                color="focus"
                                size="lg"
                                className="btn-pill btn-shadow btn-shine"
                                component={Button}
                                to="/login"
                                onClick={() => {
                                  sessionStorage.clear();
                                }}
                              >
                                Se déconnecter
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
            <div className="widget-content-left  ml-3 header-user-info">
              <div className="widget-heading">{loggedName}</div>
              <div className="widget-subheading">Gestion du Stock</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserBox;
