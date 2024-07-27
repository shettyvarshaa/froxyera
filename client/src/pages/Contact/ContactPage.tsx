import NavBar from "@/components/NavBar";
import ContactUs from "./ContactUs";

function ContactPage() {
  return (
    <>
      <NavBar />
      <div
        id="contact_us_page-container"
        className="w-full grid place-items-center"
      >
      <ContactUs />
      </div>
    </>
  );
}

export default ContactPage;
