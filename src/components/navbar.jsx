import React from "react";

function Navbar(){
    return(
        <div>
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
        </div>
        
    );
}

export default Navbar;