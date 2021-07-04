import React, { useEffect, useState } from "react";
import axios from "axios";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    href:"/transfer",
    url: "https://marvel-b1-cdn.bc0a.com/f00000000165247/radiusbank.com/wp-content/uploads/2020/07/GettyImages-576605112.jpg",
    title: "Transaction",
    width: "30%",
    borderRadius: "5px",
  },
  {
    href:"/adduser",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpWWQrAJpIR6Xy7FhzhCT00vzSmT7xw9S2Q&usqp=CAU",
    title: "Add user",
    width: "30%",
    borderRadius: "5px",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
    },
    new: {
      backgroundImage:
        "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgNDQ0NBw0HBwgNBw0HBwcHBw8IDQcNFREWFhURExUYHSggGBolJxUTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDisZFRkrNy03LSsrKzcrKy0tKystLSsrKystKysrKysrLTctKysrLSsrKystKysrLSsrKysrK//AABEIALwBDAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAACAQMABwYF/8QAFxABAQEBAAAAAAAAAAAAAAAAAQARAv/EABkBAQEBAQEBAAAAAAAAAAAAAAIAAQMGBf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/By7JZdl9t8TQy7JZdlN0Mpk8plN0Mpk8plN0Mok0olN0Epk8olpazyiTSiUWs0ok0olFKzSiTSiUUrNpNItFoJFLRIpaUrNIpaJFKKUIs0jRwGKTYpaUoJFmkWjgMUmxaKAxm0yjj7PKZPLsubzuhlMnlMpuhlMtMplN1nlMtMjlrdDKZPKZRaCRbRIpTdBKJNKJRSs6JNItpSgkUtEilFKDFJpFKOUGLNo2lKzSLaMUopWaRbRi0coMWbFKKAwbRilpxm0ZpFo4DGbGilfbZTJ5TLm85o5TJ5TKboZTJ5TKboZRJpTKbrPKJaZFKLQokkplpSgkUtEilFKCRSaUaKVmlEmkW0pQYs0ilFKCRSaRaOUIs0o0cZpFtEilpSs0izYtHAYs2LaUBizYtHAYpNjRx9xl2TymXN5rQymTymUtDKZaZFKLQSiTyiU2VmlEtMilFKCRSbRKKVm0SaRtKUEi2iRSjlBIpNilFKDFmxbTgJFJsUooDFmxaOAxZsW0oDFmxaOM2LNo0cZsWbFtOAxmxo4+7y7J5TLk8voZRJ5TLW6CRS0yiUWs8ok8olFrPKJNKJRSs0ok0ilFKCRSbRoozYtokW05WaUZpFooDFmxaOAxZsW0ozYtowaOAxZsWjgMWbFtOM2LNi0cBizYtpQGM2NHH32UyeXZcnltZ5TLTKJTdZpTJpRKLWaUSeUbSlZpFLRItFKCRSbRo5WaRbRg0UoMUtEg0cBizYtpwGLNi0UBizYtpwGDaMWjjNizYtHAYs2LacZsWbFo4DFmxaKAwmxtOPQsok8plyeU0Mpk8olFoJFJpRKbKzSKWiRSjlBIpNilpSgkWbFKOAxZsWilBizYtHGbFtGDacBi2jBo4DFmxaOAxZsG04DFmwaOCxZMW0oDFmxadIzYs2LRQGM2Npx6LlEnlEuLyWs8pk0olFKzSKWiRS0pQSLNi0UoJFmxaOAxZsW04zYtowaOAxZsWjgMG0YNHAYs2LacBiyYtHAYs2LacBgzYtHAYsmLRwWDNi2nAYsmLRwGM2LaUekZRJpRLi8hrNKJNilFKCRSbFo5QSLNi2nASDaMGigMWbFo4DBmxbXSAxZsWjjNizYtHAYsmLacBizYtHAYM2LacBiyYtHAYs2DRwWDNi2nAYM2LRwGM2NHHpaUSaRS4vHSgkWbFtKAxZsWjjNizYtpwGDNi0cBg2jBo4DFmwbXSAxZsWjgMWTFo4DGTFtOAxZsGjgsGbFtOAwZsWjgMWTFo4LBmwbTgsGbBp0gsWTGij09izYtxeNjNizYtHAYsmLacBizYNHAYs2DacBizYNOkBizYNpwGLNg0cFgzYNOkFgzYtpQGLJi06QGLJi2nBYM2DRwWDNg0cFiyYtpwGLJi0cCLJi0ceosWTFuLxkBgz6g0cFgzYNrpBYM2DRwWDNg2nBYM2DRwWDNg2ukFgzYNHBYM2DRwWLJg2nBYsmLTpBYMmLRwWDNg2nBYM2DRwWLJi2nAYsmLRwYMmLRx//2Q==)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "300px",
      verticalAlign: "center",
      backgroundSize: "cover",
    },
    image: {
      position: "relative",
      height: 180,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15,
        },
        "& $imageMarked": {
          opacity: 0,
        },
        "& $imageTitle": {
          border: "4px solid currentColor",
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity"),
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
        theme.spacing(1) + 6
      }px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity"),
    },
  })
);
const Data = () => {
  
  const [user, setUser] = useState({
    sendersName: "",
    recieversName: "",
    Amount: "",
  });
  const getdata = () => {
    axios.get("http://localhost:15000/users").then((res) => {
      console.log("result:", res.data);
      setUser(res.data);
      console.log("user here:", user);
    });
  };
  useEffect(() => {
    getdata();
  }, []);
  const classes = useStyles();

  return (
    <div className="table-responsive-md">
      <table className="table table-striped table-borderless table-hover">
        <thead className="thead-dark bg-dark text-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Account #</th>
            <th scope="col">Account Type</th>
            <th scope="col">Age</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Created_AT</th>
            <th scope="col">Updated_AT</th>
          </tr>
        </thead>
        <tbody className="mx-auto">
          {user.length > 0 ? (
            user.map((usr, _index) => {
              console.log("data now :", user[0].name, "ab :", usr);
              return (
                <tr>
                  <th scope="row" key={_index}>
                    {_index + 1}
                  </th>
                  <td>{usr.name}</td>
                  <td>{usr.email}</td>
                  <td>{usr._id}</td>
                  <td>{usr.accountType}</td>
                  <td>{usr.age}</td>
                  <td>{usr.amount}</td>
                  <td>{usr.created_at}</td>
                  <td>{usr.updated_at}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="">
        <div className="container m-10 ">
          <div className={classes.root}>
            {images.map((image) => (
              <ButtonBase
                focusRipple
                key={image.title}
                href={image.href}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                  margin: "auto",
                  padding: "10px",
                  marginLeft: "100px",
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row foot">
          <div className="col footer-one">
            SSM Corporation © 2021 | All rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
