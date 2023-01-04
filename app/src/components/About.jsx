import React from "react";
import Profile from "./profile";
import Skills from "./skills";

function About() {
  return (
    <section id="About">
      

      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            Phan!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#About">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  {" "}
                  ContactMe{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Profile />
      <hr />
      <Skills />
      <hr />
      <div id="contact" class="contact-me">
        <h2>Get In Touch</h2>
        <h3 class="contact-msg-h3">
          If you need DevOps Engineer or if your data need to be protected.
        </h3>
        <p class="contact-msg">
          Love new technologies as much as I do? Let's talk about how awesome
          and how fast they change!
        </p>
        <a class="btn" href="mailto:phanimaya051@email.com">
          <img src="./images/mailme.png" alt="Contact-Me" />
        </a>
      </div> 
    </section>
  );
}

export default About;
