import React from "react";
import footerbank from "../bank-footer.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Home.css";

const useStyles = () => ({
  sizes: {
    width: 10,
    height: 90,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="mid">
        <img
          src="https://mdbootstrap.com/img/Photos/Others/img(40).jpg"
          className="landing-wrapper size"
        />
        <div className="">
          <div className="bottom-left wwidth">
            <span className="span"> Welcome to Sns Bank !! </span><br/><br/>
            We give our customers a secure channel to transfer funds between
            different customers
            <div class="ppan">
            <nav className="one">
              <ul className="two">
                <li className="three">
                  <a href="/records" className="four">
                    Learn More
                  </a>
                  <span className="five"></span>
                </li>
              </ul>
            </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <footer className="footer">
        <div
          className="container"
          style={{ borderBlockColor: "1px solid black" }}
        >
          <div className="row">
            <div className="col-6">
              <img src={footerbank} className="footer-image" alt="banking" />
              <p className="footer-para">Keep Banking with us ! </p>
            </div>
            <div className="col-6 ">
              <div className="container">
                <div className="row ">
                  <div className="col icon">
                    <FacebookIcon className="text-primary" />
                    <p className="text-light">facebook</p>
                  </div>
                  <div className="col icon">
                    <GitHubIcon />
                    <p className="text-light">GitHub</p>
                    
                  </div>
                  <div className="col icon">
                    <GitHubIcon />
                    <p className="text-light">GitHub</p>

                  </div>
                  <div className="col icon">
                    <TwitterIcon className="text-primary " />
                    <p className="text-light">Twitter</p>
                  </div>
                  <div className="col icon">
                    <InstagramIcon className="text-light" />
                    <p className="text-light">Instagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <div className="container-fluid">
        <div className="row foot">
          <div className="col footer-one">
            SNS Corporation © 2021 | All rights Reserved | Made By <span style={{fontWeight:'bolder'}}> Rehan Mumtaz 💖 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
