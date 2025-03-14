import React from 'react';
export default function Home() {
    return (
        <div>
            {/* Information Section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row text-center">
            <div className="col-lg-6 mb-4">
              <h2>Envíanos tu pedido</h2>
              <p>
                Para realizar un pedido, contáctanos directamente por WhatsApp.
                Descríbenos el tipo de embalaje que necesitas, con todas sus caracteristicas y nos pondremos en contacto contigo.
              </p>
              <p><strong>Teléfono:</strong> +52 22 1116 3400</p>
            </div>
            <div className="col-lg-6 mb-4">
              <h2>Realiza tu pedido personalizado</h2>
              <p>
                Nos especializamos en la fabricación de embalajes de madera personalizados.
              </p>
              <a
                className="btn btn-success"
                href="https://api.whatsapp.com/send/?phone=522461976418&text=Hola,+quiero+realizar+un+pedido&type=phone_number&app_absent=0"
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
        </div>
    );
}