import React from "react";
import Loader from "../components/Loader/Loader";
import HeaderOne from "../components/Header/HeaderOne";
import PageTitleContact from "../components/PageTitle/PageTitleContact";
import ContactFour from "../components/ContactUs/ContactFour";
import FooterOne from "../components/Footer/FooterOne";

const ContactCreative = () => (
  <Loader>
    <HeaderOne type={null} />
    <PageTitleContact
      title="Contact"
      tagline="Customer Support 24 Hours"
    />
    <ContactFour />
    <FooterOne />
  </Loader>
);

export default ContactCreative;
