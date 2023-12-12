import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Badge from "react-bootstrap/Badge";
import { editTask } from "./todoActionCreator";

const EditModel = ({ todoValue }) => {
  const dispatch = useDispatch();

  //
  const [show, setShow] = useState(false);
  /*  */
  const [description, setDescription] = useState("");
  const [isdone, setIsdone] = useState(true);
  const taskid = todoValue.taskid;

  //
  const [iconColore, setIconColore] = useState("action");

  /* 2 function for open/close the add movie modal */
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setDescription(todoValue.description);
    setIsdone(todoValue.isdone);
    setShow(true);
  };
  /*    */
  const handlesave = () => {
    dispatch(editTask({ taskid, description, isdone }));
    handleClose();
  };

  return (
    <>
      <IconButton
        title="Edit task"
        onClick={handleShow}
        aria-label="edit"
        onMouseOver={() => setIconColore("primary")}
        onMouseOut={() => setIconColore("action")}
      >
        <EditIcon color={iconColore} />
      </IconButton>
      {/*  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextDescription"
            >
              <Col sm="12">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Task description"
                  name="description"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formdone">
              <Form.Label column sm="8">
                Select Task state
              </Form.Label>
              <Col sm="4">
                <Select
                  variant="standard"
                  value={isdone}
                  onChange={(e) => setIsdone(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={true}>
                    <Badge bg="success">Done</Badge>
                  </MenuItem>
                  <MenuItem value={false}>
                    <Badge bg="warning" text="dark">
                      Not done
                    </Badge>
                  </MenuItem>
                </Select>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="contained"
            color="success"
            startIcon={<SaveIcon />}
            onClick={handlesave}
          >
            Save change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModel;