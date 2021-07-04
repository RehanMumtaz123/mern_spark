import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import EventIcon from "@material-ui/icons/Event";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CallIcon from "@material-ui/icons/Call";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Menuitem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import "./Transfer.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    width: {
      width: "420px",
      marginTop: "15px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius: "5px",
      backdropFilter: "blur(12px)",
      backgroundColor: "rgba(255, 255, 255, .5)",
    },
    doi: {
      width: "290px",
      padding: "13px",
    },
  })
);
export default function BasicTextFields() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    age: "",
    accountType: "",
  });
  let name, value;

  const validateInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phone, amount, age, accountType } = user;
      const res = await fetch("http://localhost:15000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, amount, age, accountType }),
      });
      const data = await res.json();
      if (data) {
        console.log("data chalaga :", data);
        window.alert("succes");
        history.push("/");
      } else {
        console.log("eeror");
        window.alert("fail");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const classes = useStyles();

  return (
    <>
      <div className="bg">
        <div className="bg-image">
          <div
            className="container"
            style={{
              transform: "tranlate(-50%,-50%),",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              margin: "auto",

              marginTop: "15px",
            }}
          >
            <div
              className={classes.width}
              style={{ border: "3px solid black" }}
            >
              <div className="p-2">
                <h1 className="p-3 text-center b">Registeration.. 🚀</h1>
                <form
                  method="POST"
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-textarea"
                    label="Name"
                    name="name"
                    value={user.name}
                    onChange={validateInput}
                    required
                    placeholder="Your Name"
                    multiline
                    className={classes.doi}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <br />

                  <TextField
                    id="standard-textarea"
                    label="Email"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={validateInput}
                    placeholder="Your Email"
                    multiline
                    className={classes.doi}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <br />
                  <TextField
                    id="standard-number"
                    placeholder="Your Phone #"
                    label="Phone Number"
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={validateInput}
                    className={classes.doi}
                    prefix="+"
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CallIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    id="standard-number"
                    label="Amount"
                    type="number"
                    placeholder="Current Balance"
                    name="amount"
                    value={user.amount}
                    onChange={validateInput}
                    className={classes.doi}
                    prefix="$"
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AttachMoneyIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <br />
                  <TextField
                    id="standard-textarea"
                    label="Age"
                    required
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={validateInput}
                    placeholder="Your age"
                    multiline
                    className={classes.doi}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EventIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <br />
                  <TextField
                    label="Normal"
                    id="margin-normal"
                    defaultValue="Basic"
                    className={classes.doi}
                    margin="normal"
                    name="accountType"
                    value={user.accountType}
                    onChange={validateInput}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountBalanceIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={PostData}
                    style={{
                      textAlign: "center",
                      marginLeft: "10px",
                      padding: "10px",
                    }}
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid ">
        <div className="row foot">
          <div className="col footer-one">
            SSM Corporation © 2021 | All rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}
