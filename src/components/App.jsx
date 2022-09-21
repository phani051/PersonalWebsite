import React from "react";

function App() {
  return (
    <main>
      <section id="overall">
        <section id="Home">
          <div class="top-container">
            <h1>Phaneendra Kumar</h1>
            <h6>
              am <span>enthusiastic </span>techi
            </h6>
            <div class="arrow">
              <a class="nostyle" href="#About">
                ↯
              </a>
            </div>
          </div>
        </section>

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
          <div class="profile">
            <img src="./images/phani.png" alt="Avatar" srcset="" />
            <h2>Hello</h2>
            <p class="intro">
              I am DevOps Engineer and Data Protection Specialist.
              <br />
              I'm an enthusiastic techie and never hesitate to get hands on new
              technology which interests me.
            </p>
          </div>
          <hr />
          <div class="skills">
            <h2>I can do..</h2>
            <div class="skill-row">
              <div class="skill-image">
                <img class="backup" src="./images/backup.png" alt="" />
              </div>
              <div class="skill-content">
                <h3>Data Protection</h3>
                <p>
                  Data protection with multiple enterprise backup tools like
                  Veritas Netbackup, Commvault, Arcserve etc,. with industry
                  best pratices.
                </p>
              </div>
            </div>
            <div class="skill-row">
              <div class="skill-content">
                <h3>DevOps Engineer</h3>
                <p>
                  Experienced DevOps engineer with knowledge of multiple tools
                  like ARM, Terraform, Docker, Jenkins, Ansible etc,. with best
                  pratices of CD/CI.
                </p>
              </div>
              <div class="skill-image">
                <img class="multimedia" src="./images/system.gif" alt="" />
              </div>
            </div>
            <div class="skill-row">
              <div class="skill-image">
                <img class="scripting" src="./images/script.png" alt="" />
              </div>
              <div class="skill-content">
                <h3>Scripting</h3>
                <p>
                  Scripting is basic need in the DevOps, I can manage Bash,
                  Powershell & Python.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div id="contact" class="contact-me">
            <h2>Get In Touch</h2>
            <h3 class="contact-msg-h3">
              If you need DevOps Engineer or your Data protection.
            </h3>
            <p class="contact-msg">
              Love new technologies as much as I do? Let's talk about how
              awesome and how fast they change!
            </p>
            <a class="btn" href="mailto:phanimaya051@email.com">
              <img src="./images/mailme.png" alt="Contact-Me" />
            </a>
          </div>
        </section>

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
                href="https://phani051.github.io/mysite/"
                target="_blank"
              >
                <img class="webicon" src="./images/worldwide.png" alt="" />
              </a>
            </div>

            <p class="last-p">© 2022 Phaneendra Kumar.</p>
          </div>
        </section>
      </section>

      <section id="work"></section>
    </main>
  );
}

export default App;
