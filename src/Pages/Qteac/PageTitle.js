import React, { Component, useState } from "react";
import { connect, useSelector } from "react-redux";
import cx from "classnames";
import { Button } from "reactstrap";
/* import { closeModalNouveauConcessionnaire } from "../../../reducers/concessionnaires/gestionConcessionnaires"; */
const PageTitle = (props) => {
  let { heading, icon, subheading } = props;
  let { enablePageTitleIcon, enablePageTitleSubheading } = useSelector(
    (state) => state.ThemeOptions
  );
  let [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div
              className={cx("page-title-icon", {
                "d-none": !enablePageTitleIcon,
              })}
            >
              <i className={icon} />
            </div>
            <div>
              {heading}
              <div
                className={cx("page-title-subheading", {
                  "d-none": !enablePageTitleSubheading,
                })}
              >
                {subheading}
              </div>
            </div>
          </div>
          <div className="page-title-actions"></div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
