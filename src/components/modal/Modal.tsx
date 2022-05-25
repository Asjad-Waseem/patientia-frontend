import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { makeStyles } from "@mui/styles";

import { CardComponent } from "components/cards/Card";

interface ModalProps {
  card: any;
  open: boolean;
  onHandleOpen: () => void;
  onHandleClose: () => void;
}

const useStyles = makeStyles({
  contentStyle: {
    width: "calc(100% - 40px)",
    maxWidth: "100vw",
    maxHeight: "100%",
    position: "fixed",
    top: "50%",
    left: "0",
    transform: "translate(0, -50%)",
    overflowY: "auto",
    borderRadius: "10px"
  },
});

export const ModalComponent: React.FC<ModalProps> = ({
  card,
  open,
  onHandleOpen,
  onHandleClose,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Button onClick={onHandleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={onHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="card__content__wrapper"
          style={{ marginRight: "200px !important" }}
        >
          <CardComponent card={card} optionalClassCard={classes.contentStyle} />
        </div>
        {}
      </Modal>
    </div>
  );
};
