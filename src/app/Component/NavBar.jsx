

import React from "react";
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
           Pagination
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/GetUsers" >
                  Get Users
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/GetPosts">
                  Get Posts
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/GetProducts">
                  Get Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
