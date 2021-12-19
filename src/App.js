import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import ResizeDetector from "react-resize-detector";

import cx from "classnames";

import { useSelector } from "react-redux";
import MatieresPremieres from "./Pages/MatieresPremieres";
import ProduitsFinales from "./Pages/ProduitsFinales";
import Prevision from "./Pages/Prevision";
import Qtesemi from "./Pages/Qtesemi";
import Desision from "./Pages/Desision";
import Qtemp from "./Pages/Qtemp";
import Qteac from "./Pages/Qteac";
import Recap from "./Pages/Recap";
import Annulation from "./Pages/Annulation";
import Achat from "./Pages/Achat";


import NewMatiere from "./Pages/MatieresPremieres/NewMatiere";
function App() {
  let {
    colorScheme,
    enableFixedHeader,
    enableFixedSidebar,
    enableFixedFooter,
    enableClosedSidebar,
    closedSmallerSidebar,
    enableMobileMenu,
    enablePageTabsAlt,
  } = useSelector((state) => state.ThemeOptions);
  return (
    <ResizeDetector
      handleWidth
      render={({ width }) => (
        <>
          <div
            className={cx(
              "app-container app-theme-" + colorScheme,
              { "fixed-header": enableFixedHeader },
              { "fixed-sidebar": enableFixedSidebar || width < 1250 },
              { "fixed-footer": enableFixedFooter },
              { "closed-sidebar": enableClosedSidebar || width < 1250 },
              {
                "closed-sidebar-mobile": closedSmallerSidebar || width < 1250,
              },
              { "sidebar-mobile-open": enableMobileMenu },
              { "body-tabs-shadow-btn": enablePageTabsAlt }
            )}
          >
            <BrowserRouter>
              <Switch>
                <Route path="/" component={MatieresPremieres} exact />
                <Route path="/matieres" component={MatieresPremieres} exact />
                <Route path="/produits" component={ProduitsFinales} />
                <Route path="/prevision" component={Prevision} />
                <Route path="/qte-semi" component={Qtesemi} />
                <Route path="/desision" component={Desision} />
                <Route path="/qte-mp" component={Qtemp} />
                <Route path="/qte-ac" component={Qteac} />
                <Route path="/recap" component={Recap} />
                <Route path="/annulation-achat" component={Annulation} />
                <Route path="/achat" component={Achat} />


                <Route path="/new-matiere" component={NewMatiere} />
              </Switch>
            </BrowserRouter>
          </div>
        </>
      )}
    />
  );
}

export default App;
