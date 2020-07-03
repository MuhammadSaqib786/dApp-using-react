import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import formContext from "./formContext";

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
  //now for input control
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [image, setImage] = useState("");
  //to show or hide form
  const value = useContext(formContext);
  return (
    <div style={{ marginTop: 30 }}>
      {value[0] && (
        <form className={classes.root} method="get">
          <table style={{ width: "100%", backgroundColor: "white" }}>
            <tr>
              <Input
                defaultValue="Write Question Here"
                inputProps={{ "aria-label": "description" }}
                id="question"
                name="question"
                style={{ width: "50%", marginBottom: 20 }}
                onChange={(event) => setQuestion(event.target.value)}
              />
            </tr>
            <tr>
              <Input
                defaultValue="Url to image"
                inputProps={{ "aria-label": "description" }}
                id="imageUrl"
                name="imageUrl"
                style={{ width: "30%" }}
                onChange={(event) => setImage(event.target.value)}
              />
            </tr>
            <tr>
              <Input
                defaultValue="Option 1"
                inputProps={{ "aria-label": "description" }}
                id="option1"
                name="option1"
                style={{ width: "30%" }}
                onChange={(event) => setOption1(event.target.value)}
              />
            </tr>
            <tr>
              <Input
                defaultValue="Option 2"
                inputProps={{ "aria-label": "description" }}
                id="option2"
                name="option2"
                style={{ width: "30%" }}
                onChange={(event) => setOption2(event.target.value)}
              />
            </tr>
            <tr>
              <Input
                defaultValue="Option 3"
                inputProps={{ "aria-label": "description" }}
                id="option3"
                name="option3"
                style={{ width: "30%" }}
                onChange={(event) => setOption3(event.target.value)}
              />
            </tr>
            <tr style={{ align: "center" }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ marginTop: 10 }}
                type="submit"
              >
                Submit Poll
              </Button>
            </tr>{" "}
          </table>
        </form>
      )}
    </div>
  );
};
