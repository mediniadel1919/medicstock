import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Label,
  FormGroup,
} from "reactstrap";
import { supprimerReferentAPI } from "./api";
import { store } from "../redux/store";
import { getAllReferents } from "../redux/referentsSlice";
export const referentsColumns = [
  {
    Header: "Nom",
    accessor: "nom",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Spécialité",
    accessor: "role",
  },
  {
    Header: "Date de création",
    accessor: "createdAt",
  },
  {
    Header: "Formation",
    accessor: "nom",
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
                /*  this.props.setSelectedDevis(row.original);
                this.props.resetSpinner();

                this.props.history.push(
                  "/commandes-fournisseurs/fiche-Devis"
                ); */
              }}
            >
              Détails
            </button>
          </div>
          <Button
            className="mr-1 btn-icon btn-icon-only"
            outline
            color="danger"
            onClick={async () => {
              console.log("deleting row :", row.original);
              await supprimerReferentAPI(row.original);
              store.dispatch(getAllReferents());
              /* console.log("raww", row.original);
              this.setState({
                dangerNotif: true,
                deleteSelect: row.original.id,
              }); */
            }}
          >
            <i className="lnr-trash icon-gradient bg-amy-crisp"> </i>
          </Button>
        </>
      );
    },
  },
];
