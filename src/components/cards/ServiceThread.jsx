// ... React modules

// ... Context

// ... Components
import ServiceCard from "@components/cards/ServiceCard";

// ... Assets
import service_db from "@data/service_db";

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const ServiceThread = () => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  const services = service_db;
  return (
    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-sm-start justify-content-center my-5">
      {services?.map((services, index) => (
        <div className="col-sm-6 col-11 mb-5" key={index}>
          <ServiceCard services={services} />
        </div>
      ))}
    </div>
  );
};

export default ServiceThread;
