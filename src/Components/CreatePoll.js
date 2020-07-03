import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

export const CreatePoll = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 30 }}>
      <form className={classes.root}>
        <table style={{ width: "100%", backgroundColor: "white" }}>
          <tr>
            <Input
              defaultValue="Write Question Here"
              inputProps={{ "aria-label": "description" }}
              id="question"
              style={{ width: "50%", marginBottom: 20 }}
            />
          </tr>
          <tr style={{ marginTop: 10 }}>
            <Input
              defaultValue="Option 1"
              inputProps={{ "aria-label": "description" }}
              id="option1"
              style={{ width: "30%" }}
            />
          </tr>
          <tr>
            <Input
              defaultValue="Option 2"
              inputProps={{ "aria-label": "description" }}
              id="option2"
              style={{ width: "30%" }}
            />
          </tr>
          <tr>
            <Input
              defaultValue="Option 3"
              inputProps={{ "aria-label": "description" }}
              id="option3"
              style={{ width: "30%" }}
            />
          </tr>
          <tr style={{ align: "center" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ marginTop: 10 }}
            >
              Add
            </Button>
          </tr>{" "}
        </table>
      </form>
    </div>
  );
};
