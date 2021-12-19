import React, { useEffect, useState } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Card, CardBody, Col, Row, Button, Modal } from "reactstrap";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import PageTitle from "./PageTitle";
import ReactTable from "react-table";
import { useDispatch, useSelector } from "react-redux";
import CenteredModal from "./CenteredModal";
import { addMatiere, getMatieres } from "../../redux/matieresSlice2";
import { reactLocalStorage } from "reactjs-localstorage";

const MatieresPremieres = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({});
  const [totalCA, setTotalCA] = useState(0);
  const dispatch = useDispatch();
  const { matiereStatus, previsions } = useSelector((state) => state.prevision);
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
      Header: "Prévisions y compris gratuité",
      accessor: "previsiongratuiter",
      className: "d-flex justify-content-center text-center font-weight-bolder",
    },
    {
      Header: "Produit Finis",
      accessor: "produitfinis",
      className: "d-flex justify-content-center text-center font-weight-bolder",
    },
    {
      Header: "Produit semi fini",
      accessor: "produitsemifini",
      className: "d-flex justify-content-center text-center font-weight-bolder",
    },
    {
      Header: "Qté a fabriquer",
      accessor: "qteafabriquer",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "PGHT",
      accessor: "PGHT",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "Ratio Gratuité",
      accessor: "ratio",
      className:
        "d-flex justify-content-center text-center text-primary font-weight-bolder",
    },
    {
      Header: "CA prévision",
      accessor: "CA",
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
                  console.log(row.original);
                  setCurrentRow(row.original);
                  setModalShow(true);
                }}
              >
                Détails
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
                  heading="Matiéres Premiéres"
                  subheading="Gérer les Matiéres Premiéres"
                  icon="pe-7s-eyedropper icon-gradient bg-dark font-weight-bolder"
                  dataSize={previsions
                    .map((prevision) => prevision.CA)
                    .reduce((accum, element) => {
                      return parseFloat(accum) + parseFloat(element);
                    }, 0)}
                  addNewMatiere={{}}
                  secTitle='CA Prévisions'
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
                        defaultPageSize={10}
                        filterable
                        data={previsions}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CSSTransitionGroup>
            {modalShow && (
              <CenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                currentRow={currentRow}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default MatieresPremieres;
