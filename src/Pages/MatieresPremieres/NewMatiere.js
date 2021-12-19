import React, { Fragment, useEffect, useState } from "react";
import { Card, CardFooter, CardHeader, Col, Row } from "reactstrap";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CardContent } from "@mui/material";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const NewMatiere = () => {
  const history = useHistory();
  const matiereLength = reactLocalStorage.getObject("matieres").length;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reactLocalStorage.setObject('new-matiere',{id: matiereLength + 1,...data});
    history.push("/matieres", {
      shallow: false,
    });
  }

  const [dateNow, setDateNow] = useState(moment().format("YYYY-MM-DD"));
  useEffect(() => {
    setDateNow(moment().format("YYYY-MM-DD"));
  }, [dateNow]);

  return (
    <Fragment>
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
              <Row md="12" lg="12">
                <Col md="12" lg="12">
                  <div id="accordion" className="accordion-wrapper ">
                    <Card>
                      <CardHeader id="headingOne" className="bg-grey">
                        <span className="pe-7s-magic-wand icon-gradient bg-dark font-weight-bolder mr-2 sizes mb-3"></span>
                        <p className="sizes">
                          Ajouter une nouvelle matière premiére
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Box
                          component="form"
                          // sx={{
                          //   "& .MuiTextField-root": { m: 1, width: "48%" },
                          // }}
                          noValidate
                          autoComplete="off"
                          className=" p-4"
                          // style={{ backgroundColor: "red" }}
                        >
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                              style={{ width: "45%", margin: "2%" }}
                              label="Nom de la matière"
                              placeholder="Nom de la matière"
                              {...register("nom", {
                                required: true,
                              })}
                            />
                            <TextField
                              style={{ width: "45%", margin: "2%" }}
                              label="Identifiant"
                              placeholder="Identifiant"
                              // helperText="Incorrect entry."
                              {...register("identifiant", {
                                required: true,
                              })}
                            />

                            <TextField
                              style={{ width: "45%", margin: "2%" }}
                              label="Fournisseur"
                              placeholder="Fournisseur"
                              {...register("fournisseur", {
                                required: true,
                              })}
                            />
                            <TextField
                              style={{ width: "45%", margin: "2%" }}
                              label="Expiration"
                              placeholder="Expiration"
                              type={"date"}
                              defaultValue={dateNow}
                              {...register("expiration", {
                                required: true,
                              })}
                            />

                            <TextField
                              style={{ width: "94%", margin: "2%" }}
                              className="d-flex"
                              label="Quantité"
                              placeholder="Quantité"
                              inputProps={{
                                inputMode: "numeric",
                                pattern: "[0-9]*",
                              }}
                              defaultValue={0}
                              type={"number"}
                              {...register("quantité", {
                                required: true,
                              })}
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
                      <CardFooter className=" p-2 d-flex justify-content-center ">
                        <Button
                          style={{ marginLeft: "4%", marginRight: "6%" }}
                          className="btn btn-lg  bg-dark btn-block text-white p-3 mt-3 mb-3 "
                          onClick={handleSubmit(onSubmit)}
                        >
                          Confirmer
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </Col>
              </Row>
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewMatiere;
