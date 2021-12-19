import React, { Fragment } from "react";
import MetisMenu from "react-metismenu";
import { useDispatch, useSelector } from "react-redux";
import { setEnableMobileMenu } from "../../redux/themeOptionsSlice";
import { MatieresPremieres, ProduitsFinals,Prevision } from "./NavItems";

const Nav = (props) => {
  const dispatch = useDispatch();
  let { enableMobileMenu } = useSelector((state) => state.ThemeOptions);

  const toggleMobileSidebar = () => {
    dispatch(setEnableMobileMenu(!enableMobileMenu));
  };

  return (
    <Fragment>
   
              <h5 className="app-sidebar__heading text-white">Gestion des matières premières</h5>

      <MetisMenu
        content={MatieresPremieres}
        onSelected={toggleMobileSidebar}
        activeLinkFromLocation
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
      />
                 <h5 className="app-sidebar__heading text-white">Gestion des produits finaux</h5>
      <MetisMenu
        content={ProduitsFinals}
        onSelected={toggleMobileSidebar}
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
        classNameContainer={"open"}
        classNameItemHasVisibleChild="open"
        activeLinkFromLocation
        


      />
        <MetisMenu
        content={Prevision}
        onSelected={ toggleMobileSidebar}
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
        classNameContainer={"open"}
        classNameItemHasVisibleChild="open"
        activeLinkFromLocation
        


      />
    </Fragment>
  );
};

export default Nav;
