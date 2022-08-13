import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center">
              <h2>Contact <span>Brightlystake</span> </h2>
              <ul className="footer-wrapper">
                <li>
                  <a href="mailto:Staking7pc@gmail.com" class="footer-link flink">
                    <MdEmail />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/brightlystake" class="footer-link tlink">
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/Brightlystake" class="footer-link telelink">
                    <FaTelegramPlane />
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/7jtYTQZz2w" class="footer-link dislink">
                    <FaDiscord />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC_cGhzLzY0mADp0V-tGh55A" class="footer-link youlink">
                    <BsYoutube />
                  </a>
                </li>
              </ul>

              <p>
                official email : staking7pc@gmail.com
                Copyright <a href="#">Brightlystake</a> @ 2022                   
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
