import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Premium Pack
          </a>
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
              <a className="nav-link" href="#!">
                Acerca de
              </a>
            </li>
            <li className="nav-item dropdown"></li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#!">
                Contacto
              </a>
            </li>
          </ul>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bolder">Premium Pack</h2>
            <p className="lead fw-normal text-white-50 mb-0">
              Embalajes de madera personalizados
            </p>
          </div>
        </div>
      </header>

      {/* Information Section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row text-center">
            <div className="col-lg-6 mb-4">
            <section className="get-in-touch">
   <h2 className="title">envianos tu pedido</h2>
   <form className="contact-form row">
      <div className="form-field">
        <label className="label">Nombre</label>
         <input type="text" id="name" className="input-text js-input" required/>
      </div>
       <div className="form-field">
         <label className="label">Numero de telefono</label>
         <input id="phone" className="input-text js-input" type="text" required/>
      </div>
      <div className="form-field">
      <label className="label">Descripcion del pedido</label>
         <input id="message" className="input-text js-input" type="text" required/>
      </div>
      <div className="form-field">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
   </form>
</section>
            </div>
            <div className="col-lg-6 mb-4">
              <h2>Realiza tu pedido personalizado</h2>
              <p>
                Nos especializamos en la fabricación de embalajes de madera
                personalizados. Puedes contactarnos directamente para realizar
                tu pedido a medida.
              </p>
              <a
                className="btn btn-success"
                href="https://api.whatsapp.com/send/?phone=522461976418&text=I%27m+interested+in+your+car+for+sale&type=phone_number&app_absent=0 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi-whatsapp me-1"></i>
                Realizar pedido por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">&copy; Premium Pack 2025</p>
        </div>
      </footer>
    </div>
  );
}
