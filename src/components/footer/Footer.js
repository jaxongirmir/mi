import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineRight,
  AiOutlineGlobal,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="links">
            <p>SUPPORT</p>
            <Link to={"/global"}>Contact us</Link>
            <Link to={"/global"}>User Guide</Link>
            <Link to={"/global"}>Warranty</Link>
            <Link to={"/global"}>International Warranty</Link>
            <Link to={"/global"}>EU Declaration of Conformity</Link>
            <Link to={"/global"}>Scooter Safety Notice</Link>
            <Link to={"/global"}>Android Enterprise Recommended</Link>
            <Link to={"/global"}>Digital Services Act</Link>
          </div>
          <div className="links">
            <p>ABOUT US</p>
            <Link to={"/phone"}>Xiaomi</Link>
            <Link to={"/phone"}>Leadership Team</Link>
            <Link to={"/phone"}>Privacy Policy</Link>
            <Link to={"/phone"}>Integrity & Compliance</Link>
            <Link to={"/phone"}>Investor Relations</Link>
            <Link to={"/phone"}>Sustainability</Link>
            <Link to={"/phone"}>Trust Center</Link>
            <Link to={"/phone"}>Xiaomi Accessibility</Link>
            <Link to={"/phone"}>MIUI</Link>
          </div>
          <div className="links">
            <p>XIAOMI PROJECTS</p>
            <Link to={"/phone"}>Xiaomi Creators</Link>
            <Link to={"/phone"}>Xiaomi Studios</Link>
            <Link to={"/phone"}>Xiaomi Imagery</Link>
            <Link to={"/phone"}>Xiaomi Master Class</Link>
            <Link to={"/phone"}>Xiaomi Renovation</Link>
          </div>
          <div className="links">
            <p>Follow Xiaomi</p>
            <div className="icons">
              <Link
                to={"https://www.facebook.com/profile.php?id=100093566213638"}
              >
                <BiLogoFacebook />
              </Link>
              <Link to={"https://youtube.com"}>
                <AiFillYoutube />
              </Link>
              <Link to={"https://twitter.com/JoxaMuxas"}>
                <RiTwitterXFill />
              </Link>
              <Link to={"https://www.instagram.com/joxa_muxa/"}>
                <AiFillInstagram />
              </Link>

              <Link to={"https://youtube.com"}>
                <AiFillYoutube />
              </Link>
            </div>
            <p>Let's stay in touch</p>
            <div className="input">
              <input type="email" placeholder="Enter email address" />
              <Link to={"/global"}>
                <AiOutlineRight />
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left__bottom">
            <p>Copyright © 2010 - 2023 Xiaomi. All Rights Reserved</p>
            <p>Cookie Policy</p>
            <p>Sitemap</p>
          </div>
          <div className="right_bottom">
            <p>Global / Global</p>
            <AiOutlineGlobal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
