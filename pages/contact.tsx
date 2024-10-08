import React from "react";
import Loader from "../components/Loader/Loader";
import HeaderOne from "../components/Header/HeaderOne";
import PageTitleContact from "../components/PageTitle/PageTitleContact";
import ContactFour from "../components/ContactUs/ContactFour";
import FooterOne from "../components/Footer";

const ContactCreative = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleContact
      title="Contact"
      tagline="Customer Support 24 Hours"
    />
    <ContactFour />
    {/* <ClientsBrand children={undefined} classAppend={undefined} /> */}
    <FooterOne />
  </Loader>
);

export default ContactCreative;
