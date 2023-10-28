import React from "react";

const currentdate = new Date()
const year = currentdate.getFullYear()

function Footer(){
    return(
        <section id="footer">
          <div class="bottom-container">
            <div class="socialmedia">
              <a
                class="footer-link"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <img src="./images/linkedin.png" alt="" />
              </a>
              <a
                class="footer-link"
                href="https://twitter.com/"
                target="_blank"
              >
                <img src="./images/twitter.png" alt="" />
              </a>
              <a
                class="footer-link"
                href="https://phani051.github.io/PersonalWebsite/"
                target="_blank"
              >
                <img class="webicon" src="./images/worldwide.png" alt="" />
              </a>
            </div>

            <p class="last-p">© {year} Phaneendra Kumar.</p>
          </div>
        </section>
    )
}

export default Footer;
