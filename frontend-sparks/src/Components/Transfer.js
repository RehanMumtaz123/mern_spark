import React, { useEffect, useState } from "react";
import axios from "axios";
import SendIcon from "@material-ui/icons/Send";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Menuitem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
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
      marginTop: "20px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius: "5px",
      backdropFilter: "blur(12px)",
      backgroundColor: "rgba(255, 255, 255, .5)",
    },
    doi: {
      width: "290px",
      padding: "13px",
      textAlign: "center",
    },
  })
);

export default function BasicTextFields() {
  const classes = useStyles();
  const [user, setUser] = useState({ amount: "", accountType: "" });
  const history = useHistory();
  const [send, setSend] = useState("");
  const [recv, setRecv] = useState({
    list: [],
    reciever: "",
  });
  const getdata = () => {
    axios.get("http://localhost:15000/users").then((res) => {
      console.log("result:", res.data);
      setRecv({ list: res.data.map((idn) => idn.name) });
    });
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleone = (e) => {
    setSend(e.target.value);
    // setRecv({ list: recv.list.filter((name) => name !== send) });
    // console.log("send batao ", send);
    // console.log("recieve batao ", recv.list);
  };
  const handletwo = (e) => {
    setRecv({ ...recv, reciever: e.target.value });
  };

  let name, value;
  const handleall = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { amount, accountType } = user;
    const sender = send;
    const recciever = recv.reciever;
    const url = `http://localhost:15000/transfer/${sender}&${recciever}`;
    try {
      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });
      const data = await res.json();
      if (data) {
        console.log("data chalaga :", data);
        window.alert("succes");
        history.push("/records");
      } else {
        console.log("eeror");
        window.alert("fail");
      }
    } catch (error) {
      console.log(error);
      console.log("whole : ", sender, recciever, amount, accountType);
    }
  };
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
              <div className="p-4">
                <h1 className="p-4 text-center b">
                  Money Transfer
                  <CheckCircleOutlineIcon
                    style={{ color: "green" }}
                    fontSize="large"
                  />{" "}
                </h1>
                <form
                  method="PATCH"
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-select-currency"
                    select
                    required
                    className={classes.doi}
                    value={send}
                    onChange={handleone}
                    label="Sender's Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {recv.list.map((option, index) => {
                      return (
                        <Menuitem key={index} value={option}>
                          {option}
                        </Menuitem>
                      );
                    })}
                  </TextField>

                  <br />

                  <TextField
                    id="standard-select-currency"
                    required
                    className={classes.doi}
                    select
                    value={recv.reciever}
                    onChange={handletwo}
                    label="Reciever's Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {recv.list
                      .filter((name) => name !== send)
                      .map((option, index) => {
                        return (
                          <Menuitem key={index} value={option}>
                            {option}
                          </Menuitem>
                        );
                      })}
                  </TextField>
                  <br />
                  <TextField
                    id="standard-number"
                    label="Amount"
                    type="number"
                    className={classes.doi}
                    name="amount"
                    value={user.amount}
                    onChange={handleall}
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
                    label="Account Type"
                    id="margin-normal"
                    name="accountType"
                    value={user.accountType}
                    onChange={handleall}
                    defaultValue="Basic"
                    className={classes.doi}
                    margin="normal"
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
                    onClick={postData}
                    className={classes.button}
                    style={{
                      textAlign: "center",
                      marginLeft: "10px",
                      padding: "10px",
                    }}
                    endIcon={<SendIcon />}
                  >
                    Transact
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row foot">
          <div className="col footer-one">
            SSM Corporation ?? 2021 | All rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}
