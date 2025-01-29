import React from "react";

const FooterComponent = () => {
  return (
    <footer className="text-white">
      <FooterCard />
      <MainComponent />
    </footer>
  );
};

const MainComponent = () => {
  return (
    <section className="footer_component">
      <div className="footer_information"></div>
    </section>
  );
};

const FooterCard = () => {
  return (
    <section className="footer_banner">
      <div className="information">
        <h1 className="recently_header text-white">
          Watch and get amazing information from BingeBox
        </h1>
      </div>
    </section>
  );
};
export default FooterComponent;
