import React, { useEffect } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Card, CardBody, Col, Row, Button } from "reactstrap";
import AppFooter from "../../Layout/AppFooter";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import PageTitle from "./PageTitle";
import ReactTable from "react-table";

import { useDispatch, useSelector } from "react-redux";

const Referents = () => {
  const referentsColumns = [
    {
      Header: "Code",
      accessor: "code",
    },
    {
      Header: "Designation",
      accessor: "Designation",
    },
    {
      Header: "Stock restant apres production",
      accessor: "stock restant",
    },
    {
      Header: "Simulation Achat",
      accessor: "simulation achat",
    },
    {
      Header: "Commande en cours BC",
      accessor: "bc",
    },
    {
      Header: "Stock",
      accessor: "stock",
    },
    {
      Header: "Stock avec commande en cours",
      accessor: "quantité",
    },
    {
      Header: "Simulation Stock",
      accessor: "quantité",
    },
    {
      Header: "PF001/KG",
      accessor: "quantité",
    },
    {
      Header: "Qté PF/stock",
      accessor: "quantité",
    },
    {
      Header: "stock restant",
      accessor: "quantité",
    },
    {
      Header: "PF002/KG",
      accessor: "quantité",
    },
    {
      Header: "stock restant",
      accessor: "quantité",
    },
  ];
  return (
    <>
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <CSSTransitionGroup
              component="div"
              transitionName="TabsAnimation"
              transitionAppear={true}
              transitionAppearTimeout={0}
              transitionEnter={false}
              transitionLeave={false}
            >
              <div>
                <PageTitle
                  heading="Produits "
                  subheading="Gérer les produits"
                  icon="pe-7s-culture icon-gradient bg-tempting-azure"
                />
              </div>
              {/* <h1>fournissuer</h1> */}
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <ReactTable
                        nextText={"Suivant"}
                        previousText={"Précedent"}
                        rowsText={"Lignes"}
                        columns={referentsColumns}
                        defaultPageSize={20}
                        filterable
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CSSTransitionGroup>

            {/* <AppFooter /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Referents;
