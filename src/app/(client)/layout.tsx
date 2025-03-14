"use client"; // Agrega esto si usas Next.js 13+ con App Router

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand text-white" href="#!">Premium Pack <i className="bi bi-box-seam"></i></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <button className="nav-link text-white">Acerca de</button>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#!">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="bg-dark py-3">
        <div className="container text-center text-white">
       
        </div>
      </header>

      <main className="container my-4">{children}</main>

      <footer className="py-4 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">&copy; Premium Pack 2025</p>
        </div>
      </footer>
    </div>
  );
}
