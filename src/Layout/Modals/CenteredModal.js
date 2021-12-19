import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import { Card, CardFooter, CardHeader, Col, Row } from "reactstrap";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import TextField from "@material-ui/core/TextField";

import { Button, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import { useForm } from "react-hook-form";
function CenteredModal(props) {
  const { register, handleSubmit } = useForm();
  const editMatiere = () => {
    // dispatch(editMatiere({currentMatiere: props.currentRow,replaceMatiere:}))
  };

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Détails de la matière premiére</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Fragment>
          {/* <form
            noValidate
            onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
          >
            <TextField
              variant="outlined"
              margin="normal"
              // inputRef={register}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              // inputRef={register}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </form> */}
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
                        <TextField
                          style={{ width: "45%", margin: "2%" }}
                          label="Nom de la matière"
                          placeholder="Nom de la matière"
                          defaultValue={props.currentRow.nom}
                          name="aaa"
                          id="aas"
                        />
                        <TextField
                          style={{ width: "45%", margin: "2%" }}
                          label="Identifiant"
                          placeholder="Identifiant"
                          defaultValue={props.currentRow.identifiant}
                        />

                        <TextField
                          style={{ width: "45%", margin: "2%" }}
                          label="Fournisseur"
                          placeholder="Fournisseur"
                          defaultValue={props.currentRow.fournisseur}
                        />
                        <TextField
                          style={{ width: "45%", margin: "2%" }}
                          label="Expiration"
                          placeholder="Expiration"
                          type={"date"}
                          // defaultValue={dateNow}
                          defaultValue={props.currentRow.expiration}
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
                          defaultValue={props.currentRow.quantité}
                          type={"number"}
                        />
                      </Box>
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
          style={{ marginLeft: "4%", marginRight: "6%" }}
          className="btn btn-lg  bg-dark btn-block text-white p-3 mt-3 mb-3 "
          onClick={props.onHide}
        >
          Confirmer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CenteredModal;
