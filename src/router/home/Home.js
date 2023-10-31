import React from "react";
import "./Home.css";
import img1 from "../../assets/home1.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import banner2_img1 from "../../assets/banner2_img1.jpg";
import banner2_img2 from "../../assets/banner2_img2.svg";
import banner2_cart_img1 from "../../assets/banner2_cart_img1.png";
import banner2_cart_img2 from "../../assets/banner2_cart_img2.png";
import banner2_cart_img3 from "../../assets/banner2_cart_img3.png";
import banner2_cart_img4 from "../../assets/banner2_cart_img4.png";
import banner2_bg3 from "../../assets/banner2_bg3.png";
import banner2_bg1 from "../../assets/banner2_bg1.png";
import banner2_bg2 from "../../assets/banner2_bg2.png";
import banner2_bg4 from "../../assets/banner2_bg4.png";
function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img src={img1} alt="home-img_1" />
        <AiOutlineLeft className="left__icon" />
        <AiOutlineRight className="right__icon" />
      </div>
      <div className="banner2">
        <h1>Featured Products</h1>
        <div className="links">
          <a href="#" id="active">
            Make Halloween Smarter
          </a>
          <a href="#">Show Your Style</a>
          <a href="#">Immersive Entertainment</a>
          <a href="#">Smart Living</a>
          <a href="#">Care & Style</a>
        </div>
        <div className="container2">
          <div className="title">
            <div className="contain">
              <div className="left__title">
                <img src={banner2_img1} alt="phone img" />
              </div>
              <div className="right__title">
                <img src={banner2_img2} alt="text img" />
                <span>Capture every moment of the night</span>
                <button className="btn1">Learn More</button>
              </div>
            </div>

            <div className="carts">
              <div className="cart">
                <img src={banner2_bg1} />
                <img src={banner2_cart_img1} />
                <p>Xiaomi Outdoor Camera AW300</p>
                <span>Show you Who's come knocking</span>
                <button className="btn2">Learn More</button>
              </div>
              <div className="cart">
                <img src={banner2_bg2} />
                <img src={banner2_cart_img2} />
                <p>Mi Smart Projector 2 Pro</p>
                <span>Enjoy the haunted movie night</span>
                <button className="btn2">Learn More</button>
              </div>
              <div className="cart">
                <img src={banner2_bg3} />
                <img src={banner2_cart_img3} />
                <p>Xiaomi Smart Speaker Lite</p>
                <span>Create the perfect sppoky atmosphere</span>
                <button className="btn2">Learn More</button>
              </div>
              <div className="cart">
                <img src={banner2_bg4} />
                <img src={banner2_cart_img4} />
                <p>Xiaomi Smart Lightstrip Pro</p>
                <span>Take your themed lighting to the next level</span>
                <button className="btn2">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
