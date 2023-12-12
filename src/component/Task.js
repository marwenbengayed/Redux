import React from "react";
import "../App.css";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import EditModel from "../actions/editModel";
import Badge from "react-bootstrap/Badge";

const Task = ({ todo }) => {
  return (
    <div className="oneTask">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <p>{todo.description}</p>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={1}
          divider={
            <Divider
              style={{ backgroundColor: "rgb(162, 167, 162)" }}
              orientation="vertical"
              flexItem
            />
          }
        >
          {todo.isdone ? (
            <h6>
              <Badge bg="success">Done</Badge>
            </h6>
          ) : (
            <h6>
              <Badge bg="warning" text="dark">
                Not done
              </Badge>
            </h6>
          )}
          <EditModel todoValue={todo} />
        </Stack>
      </Stack>
    </div>
  );
};

export default Task;