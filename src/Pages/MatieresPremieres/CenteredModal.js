import React, { Fragment, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Card, Col, Row } from "reactstrap";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import TextField from "@material-ui/core/TextField";
import { Button, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editMatiere, editMatiereAsyncr } from "../../redux/matieresSlice";

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

  const onChangeStock = (e) => {
    setStock(e.target.value);
    setRestant(parseFloat(e.target.value) - parseFloat(consommation));
    setmpac(parseFloat(e.target.value) * parseFloat(coutAchat));
  };
  const onChangeConsommation = (e) => {
    setConsommation(e.target.value);
    setRestant(parseFloat(stock) - parseFloat(e.target.value));
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
    dispatch(
      editMatiereAsyncr({
        currentMatiere: props.currentRow,
        replaceMatiere: { ...data },
      })
    );
  };

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>D??tails de la mati??re premi??re</Modal.Title>
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
                            label="Designation"
                            placeholder="Designation"
                            defaultValue={props.currentRow.designation}
                            {...register("designation", {})}
                          />
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Stock"
                            placeholder="Stock"
                            value={stock}
                            {...register("stock", { value: stock })}
                            onChange={onChangeStock}
                          />
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Consommation"
                            placeholder="Consommation"
                            value={consommation}
                            {...register("consommation", {
                              value: consommation,
                            })}
                            onChange={onChangeConsommation}
                          />
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Restant"
                            placeholder="Restant"
                            inputProps={{ readOnly: true }}
                            value={restant}
                            {...register("restant", { value: restant })}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Besoin"
                            placeholder="Besoin"
                            defaultValue={props.currentRow.besoin}
                            {...register("besoin", {})}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Bc"
                            placeholder="Bc"
                            defaultValue={props.currentRow.bc}
                            {...register("bc", {})}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Commander"
                            placeholder="Commander"
                            value={commander}
                            {...register("commander", { value: commander })}
                            onChange={onChangeCommander}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Identifiant"
                            placeholder="Identifiant"
                            defaultValue={props.currentRow.identifiant}
                            {...register("identifiant", {})}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Cu"
                            placeholder="Cu"
                            value={estimatif}
                            {...register("cu", { value: estimatif })}
                            onChange={onChangeEstimatifn}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Cout"
                            placeholder="Cout"
                            value={coutAchat}
                            {...register("cout", { value: coutAchat })}
                          />{" "}
                          <TextField
                            style={{ width: "45%", margin: "2%" }}
                            label="Mpac"
                            placeholder="Mpac"
                            value={mpac}
                            {...register("mpac", { value: mpac })}
                          />
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
