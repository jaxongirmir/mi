import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { SiXiaomi } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser, AiOutlineBulb } from "react-icons/ai";
import { PiTelevisionSimple } from "react-icons/pi";
import { RiHome7Fill } from "react-icons/ri";
import { LuMicrowave, LuMonitor } from "react-icons/lu";
import { BsSmartwatch } from "react-icons/bs";
import { FiWatch } from "react-icons/fi";
import { TbDeviceComputerCamera } from "react-icons/tb";
import { RxMixerVertical } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
  const [move, setMove] = useState("7px");
  const [move2, setMove2] = useState("-100%");
  const [down, setDown] = useState("-200px");
  const [down2, setDown2] = useState("-200px");
  const [down3, setDown3] = useState("-200px");
  const [sign, setSign] = useState("none");
  const [search, setSearch] = useState("-100vh");
  const [result, setResult] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const showHome = () => {
    setMove("100%");
    setMove2("7px");
    setDown("-200px");
    setDown2("-200px");
    setDown3("-200px");
  };
  const showMi = () => {
    setMove("7px");
    setMove2("-100%");
    setDown("-200px");
    setDown2("-200px");
    setDown3("-200px");
  };
  const moveDown = () => {
    setDown("50px");
    setDown2("-200px");
    setDown3("-200px");
  };
  const moveDown2 = () => {
    setDown("-200px");
    setDown2("50px");
    setDown3("-200px");
  };
  const moveDow3 = () => {
    setDown("-200px");
    setDown2("-200px");
    setDown3("50px");
  };
  const moveUp = () => {
    setDown("-200px");
    setDown2("-200px");
    setDown3("-200px");
  };
  return (
    <div className="header">
      <div className="allSearch" style={{ top: search }}>
        <div className="search">
          <ul>
            <li
              className="mi__icon"
              onMouseEnter={showHome}
              onMouseLeave={showMi}
            >
              <Link to={"/global"}>
                <div className="mi" style={{ left: move }}>
                  <SiXiaomi />
                </div>
                <div className="home" style={{ left: move2 }}>
                  <RiHome7Fill />
                </div>
              </Link>
            </li>
          </ul>
          <button
            onClick={() => {
              setSearch("-100vh");
            }}
          >
            <GiCancel />
          </button>
          <input
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => {
              setResult(1);
            }}
            onBlur={() => {
              setResult(0);
            }}
          />
          <div
            className="search__value"
            style={{ transform: `scale(${result})` }}
          >
            <p>{("Product: ", searchValue)}</p>
            <p style={{ display: "block" }}>Redmi Hot i 30</p>
            <p style={{ display: "block" }}>Redmi Not s 5</p>
            <p style={{ display: "block" }}>Redmi Hi ultra</p>
          </div>
        </div>
      </div>
      <div className="phone" style={{ top: down }} onMouseLeave={moveUp}>
        <h1>Xiaomi</h1>
        <p>|</p>
        <h1>Redmi</h1>
      </div>
      <div className="smartHome" style={{ top: down2 }} onMouseLeave={moveUp}>
        <div className="cart">
          <PiTelevisionSimple />
          <p>TV & Media</p>
        </div>
        <div className="cart">
          <AiOutlineBulb />
          <p>Vacuum Clenear</p>
        </div>
        <div className="cart">
          <TbDeviceComputerCamera />
          <p>Environment Appliance</p>
        </div>
        <div className="cart">
          <LuMicrowave />
          <p>Kitchen Appliance</p>
        </div>
        <div className="cart">
          <AiOutlineBulb />
          <p>Illumination</p>
        </div>
        <div className="cart">
          <BsSmartwatch />
          <p>Smart Device</p>
        </div>
      </div>
      <div className="life__style" style={{ top: down3 }} onMouseLeave={moveUp}>
        <div className="cart">
          <FiWatch />
          <p>Wearable</p>
        </div>
        <div className="cart">
          <AiOutlineBulb />
          <p>Vehicle</p>
        </div>
        <div className="cart">
          <LuMonitor />
          <p>Office</p>
        </div>
        <div className="cart">
          <LuMicrowave />
          <p>Personal Care</p>
        </div>
        <div className="cart">
          <AiOutlineBulb />
          <p>Sport</p>
        </div>
        <div className="cart">
          <RxMixerVertical />
          <p>Accessories</p>
        </div>
      </div>

      <div
        className="navbar"
        onMouseMove={(e) => {
          if (e.screenX >= 433) {
            setDown("-200px");
            setDown2("-200px");
            setDown3("-200px");
          }
        }}
      >
        <ul>
          <li
            className="mi__icon"
            onMouseEnter={showHome}
            onMouseLeave={showMi}
          >
            <Link to={"/global"}>
              <div className="mi" style={{ left: move }}>
                <SiXiaomi />
              </div>
              <div className="home" style={{ left: move2 }}>
                <RiHome7Fill />
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/phone"} onMouseEnter={moveDown}>
              Phone
            </Link>
          </li>
          <li>
            <Link to={"/smartHome"} onMouseEnter={moveDown2}>
              Smart Home
            </Link>
          </li>
          <li>
            <Link to={"/lifeStyle"} onMouseEnter={moveDow3}>
              Life Style
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/discover"}>Discover</Link>
          </li>
          <li>
            <Link to={"/support"}>Support</Link>
          </li>

          <button
            className="icon"
            onClick={() => {
              setSearch(0);
            }}
          >
            <BiSearch />
          </button>
          <button
            className="icon2"
            onMouseEnter={() => {
              setSign("block");
            }}
            onMouseLeave={() => {
              setSign("none");
            }}
          >
            <AiOutlineUser />
            <div className="sign" style={{ display: sign }}>
              <p>sign in</p>
              <hr />
              <p>sign up</p>
            </div>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
