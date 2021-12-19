import React, { Fragment, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Card, Col, Row } from "reactstrap";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import TextField from "@material-ui/core/TextField";
import { Button, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editPrevision, editPrevisionAsyncr } from "../../redux/matieresSlice2";

function CenteredModal(props) {
  const [stock, setStock] = useState(props.currentRow.stock);
  const [consommation, setConsommation] = useState(
    props.currentRow.consommation
  );
  const [restant, setRestant] = useState(props.currentRow.restant);
  const [estimatif, setestimatif] = useState(props.currentRow.cu);
  const [coutAchat, setcoutAchat] = useState(props.currentRow.cout);
  const [commander, setcommander] = useState(props.currentRow.commander);
  const [mpac, setmpac] = useState(props.currentRow.mpac);

  const [previsiongratuiter, setPrevisiongratuiter] = useState(
    props.currentRow.previsiongratuiter
  );
  const [produitfinis, setProduitfinis] = useState(
    props.currentRow.produitfinis
  );
  const [produitsemifini, setProduitsemifini] = useState(
    props.currentRow.produitsemifini
  );

  const [qteafabriquer, setQteafabriquer] = useState(
    props.currentRow.qteafabriquer
  );
  const [CA, setCA] = useState(props.currentRow.CA);
  const [ratio, setRatio] = useState(props.currentRow.ratio);
  const [PGHT, setPGHT] = useState(props.currentRow.PGHT);

  const onChangegratuiter = (e) => {
    setPrevisiongratuiter(e.target.value);
    setQteafabriquer(
      parseFloat(e.target.value) -
        parseFloat(produitfinis) -
        parseFloat(produitsemifini)
    );
    setCA(parseFloat(PGHT) / (parseFloat(ratio) * parseFloat(e.target.value)));
  };
  const onChangePGHT = (e) => {
    setPGHT(e.target.value);
    setCA(
      parseFloat(e.target.value) /
        (parseFloat(ratio) * parseFloat(previsiongratuiter))
    );
  };

  const onChangeRatio = (e) => {
    setRatio(e.target.value);
    setCA(
      parseFloat(PGHT) /
        (parseFloat(e.target.value) * parseFloat(previsiongratuiter))
    );
  };

  const onChangeproduitfini = (e) => {
    setProduitfinis(e.target.value);
    setQteafabriquer(
      parseFloat(previsiongratuiter) -
        parseFloat(e.target.value) -
        parseFloat(produitsemifini)
    );
  };
  const onChangeproduitsemifini = (e) => {
    setProduitsemifini(e.target.value);
    setQteafabriquer(
      parseFloat(previsiongratuiter) -
        parseFloat(produitfinis) -
        parseFloat(e.target.value)
    );
  };

  const onChangeCommander = (e) => {
    setcommander(e.target.value);
    setcoutAchat(parseFloat(e.target.value) * parseFloat(estimatif));
  };
  const onChangeEstimatifn = (e) => {
    setestimatif(e.target.value);
    setcoutAchat(parseFloat(commander) * parseFloat(e.target.value));
    setmpac(parseFloat(e.target.value) * parseFloat(stock));
  };
  useEffect(() => {
    if (props.currentRow) {
      setStock(props.currentRow.stock);
      setConsommation(props.currentRow.consommation);
      setRestant(props.currentRow.restant);
      setestimatif(props.currentRow.cu);
      setcoutAchat(props.currentRow.cout);
      setcommander(props.currentRow.commander);
      setmpac(props.currentRow.mpac);
      setPrevisiongratuiter(props.currentRow.previsiongratuiter);
      setProduitfinis(props.currentRow.produitfinis);
      setQteafabriquer(props.currentRow.qteafabriquer);
      setProduitsemifini(props.currentRow.produitsemifini);
      setCA(props.currentRow.CA);
      setRatio(props.currentRow.ratio);
      setPGHT(props.currentRow.PGHT);
    }
  }, [props.currentRow]);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.onHide();
    console.log("Alk", data);
    dispatch(
      editPrevisionAsyncr({
        currentMatiere: props.currentRow,
        replaceMatiere: { ...data },
      })
    );
  };

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Détails de la matière premiére</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Fragment>
          <div className="app-main__inner">
            <CSSTransitionGroup
              component="div"
              transitionName="TabsAnimation"
              transitionAppear={true}
              transitionAppearTimeout={0}
              transitionEnter={false}
              transitionLeave={false}
            >
              <Col md="12" lg="12">
                <div id="accordion" className="accordion-wrapper ">
                  <Card>
                    <CardContent>
                      <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className=" p-4"
                      >
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Code"
                            placeholder="Code"
                            defaultValue={props.currentRow.code}
                            {...register("code", {
                              required: true,
                            })}
                          />
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Prévision y compris gratuité"
                            placeholder="Prévision y compris gratuité"
                            value={previsiongratuiter}
                            // defaultValue={props.currentRow.previsiongratuiter}
                            {...register("previsiongratuiter", {
                              value: previsiongratuiter,
                            })}
                            onChange={onChangegratuiter}
                          />
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Produit finis"
                            placeholder="Produit finis"
                            value={produitfinis}
                            //defaultValue={props.currentRow.produitfinis}
                            {...register("produitfinis", {
                              value: produitfinis,
                            })}
                            onChange={onChangeproduitfini}
                            // onChange={onChangeStock}
                          />
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Produit semi finis"
                            placeholder="Produit semi finis"
                            value={produitsemifini}
                            //defaultValue={props.currentRow.produitsemifini}
                            {...register("produitsemifini", {
                              value: produitsemifini,
                            })}
                            onChange={onChangeproduitsemifini}
                            // onChange={onChangeConsommation}
                          />
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Quantité à fabriquer"
                            placeholder="Quantité à fabrique"
                            inputProps={{ readOnly: true }}
                            value={qteafabriquer}
                            //defaultValue={props.currentRow.qteafabriquer}
                            {...register("qteafabriquer", {
                              value: qteafabriquer,
                            })}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="PGHT"
                            placeholder="PGHT"
                            // defaultValue={props.currentRow.PGHT}
                            value={PGHT}
                            {...register("PGHT", {
                              value: PGHT,
                            })}
                            onChange={onChangePGHT}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Ratio Gratuité"
                            placeholder="Ratio Gratuité"
                            value={ratio}
                            //defaultValue={props.currentRow.ratio}
                            {...register("ratio", {
                              value: ratio,
                            })}
                            onChange={onChangeRatio}
                            // onChange={onChangeCommander}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="CA prévision"
                            placeholder="CA prévision"
                            inputProps={{ readOnly: true }}
                            value={CA}
                            {...register("CA", {
                              value: CA,
                            })}
                          />{" "}
                        </form>
                      </Box>
                      {Object.keys(errors).length > 0 && (
                        <div
                          className="alert alert-info text-center ml-4 mr-4 fw-bold"
                          role="alert"
                        >
                          Veuillez remplir tout les champs SVP !
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </Col>
            </CSSTransitionGroup>
          </div>
        </Fragment>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          style={{ marginLeft: "4%", marginRight: "6%" }}
          className="btn btn-lg  bg-dark btn-block text-white p-3 mt-3 mb-3 "
          onClick={handleSubmit(onSubmit)}
        >
          Confirmer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CenteredModal;
