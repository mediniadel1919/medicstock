import React from "react";
import { useSelector } from "react-redux";
import cx from "classnames";
const PageTitle = (props) => {
  let { heading, icon, subheading, dataSize } = props;
  let { enablePageTitleIcon, enablePageTitleSubheading } = useSelector(
    (state) => state.ThemeOptions
  );
  return (
    <>
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div
              className={cx("page-title-icon pulse-animation", {
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
          {dataSize != -1 && (
            <div className="page-title-actions">
              <span
                style={{ backgroundColor: "#43425d" }}
                block
                className="mb-2 mr-2 p-3 badge badge-primary zoom"
                size="lg"
              >
                {dataSize} produits dans le stock
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
PageTitle.defaultProps = {
  dataSize: 0,
};
export default PageTitle;
