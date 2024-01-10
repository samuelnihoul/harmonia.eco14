import React from "react";
import HeaderOne from "@components/Header/HeaderOne";
import PageTitleContact from "@components/PageTitle/PageTitleContact";
import ContactFour from "@components/ContactUs/ContactFour";
import FooterOne from "@components/Footer";

const ContactCreative = () => (
    <HeaderOne type={undefined} />
    <PageTitleContact
      title="Contact"
      tagline="Customer Support 24 Hours"
    />
    <ContactFour />
    <FooterOne />
);

export default ContactCreative;
