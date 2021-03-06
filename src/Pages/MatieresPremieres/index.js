import React, { useEffect, useState } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Card, CardBody, Col, Row, Button, Modal } from "reactstrap";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import PageTitle from "./PageTitle";
import ReactTable from "react-table";
import { useDispatch, useSelector } from "react-redux";
import CenteredModal from "./CenteredModal";
import { addMatiere, getMatieres } from "../../redux/matieresSlice";
import { reactLocalStorage } from "reactjs-localstorage";

const MatieresPremieres = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({});
  const dispatch = useDispatch();
  const { matiereStatus, matieres } = useSelector((state) => state.matiere);
  const newMatiere = reactLocalStorage.getObject("new-matiere");
  useEffect(() => {
    getMatieresAsync().then(() => {
      /** test if the object contains values */
      if (Object.keys(newMatiere).length > 0) {
        addMatieresAsync().then(reactLocalStorage.remove("new-matiere"));
      }
    });
  }, []);

  const addMatieresAsync = async () => {
    dispatch(addMatiere(reactLocalStorage.getObject("new-matiere"))).unwrap();
  };
  const getMatieresAsync = async () => {
    try {
      await dispatch(getMatieres("")).unwrap();
    } catch (res) {
      console.error("Failed to save the post: ", res);
    } finally {
    }
  };
  const referentsColumns = [
    {
      Header: "Code",
      accessor: "code",
      className: "d-flex justify-content-center text-center font-weight-bolder",
    },
    {
      Header: "Designation",
      accessor: "designation",
      className: "d-flex justify-content-center text-center font-weight-bolder",
    },
    {
      Header: "Stock au 07-05-2021",
      accessor: "stock",
      className: "d-flex justify-content-center text-center font-weight-bolder",
    },
    {
      Header: "Consommation",
      accessor: "consommation",
      className: "d-flex justify-content-center text-center font-weight-bolder",
    },
    {
      Header: "Stock Restant",
      accessor: "restant",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "Besoin",
      accessor: "besoin",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "Bc en cours",
      accessor: "bc",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "A commander",
      accessor: "commander",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "Cu estimatif",
      accessor: "cu",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "Cout Achat",
      accessor: "cout",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "Valeur MPAC",
      accessor: "mpac",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "Actions",
      filterable: false,
      width: 160,
      Cell: (row) => {
        return (
          <>
            <div className="d-block w-100 text-center">
              <button
                type="button"
                className="btn btn-wide btn-outline-primary"
                onClick={() => {
                  setModalShow(true);
                  setCurrentRow(row.original);
                }}
              >
                D??tails
              </button>
            </div>
          </>
        );
      },
    },
  ];
  return (
    <>
      <AppHeader />
      <div className="app-main bg-light">
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
                  heading="Achat Besoin"
                  icon="pe-7s-eyedropper icon-gradient bg-dark font-weight-bolder"
                  dataSize={matieres
                    .map((matieres) => matieres.cout)
                    .reduce((accum, element) => {
                      return parseFloat(accum) + parseFloat(element);
                    }, 0)}
                  addNewMatiere={{}}
                  secTitle="TND:Total Cout"
                  dataSize2={matieres
                    .map((matieres) => matieres.mpac)
                    .reduce((accum, element) => {
                      return parseFloat(accum) + parseFloat(element);
                    }, 0)}
                  secTitle2="TND :Valorisation du stock"
                  secTitle3="45000TND :Valorisation du stock PF"
                  dataSize4={matieres
                    .map((matieres) => matieres.cout)
                    .reduce((accum, element) => {
                      return parseFloat(accum) + parseFloat(element) + 45000;
                    }, 0)}
                  secTitle4="TND: Valeur theorique"
                />
              </div>
              {/* <h1>fournissuer</h1> */}
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <ReactTable
                        nextText={"Suivant"}
                        previousText={"Pr??cedent"}
                        rowsText={"Lignes"}
                        columns={referentsColumns}
                        defaultPageSize={10}
                        filterable
                        data={matieres}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CSSTransitionGroup>
            <CenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              currentRow={currentRow}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default MatieresPremieres;
