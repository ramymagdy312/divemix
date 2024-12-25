import ContactHero from "../components/contact/ContactHero";
import ContactIntro from "../components/contact/ContactIntro";
import FloatingContactForm from "../components/contact/FloatingContactForm";
import BranchLocations from "../components/contact/BranchLocations";

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="lg:w-1/2">
              <ContactIntro />
            </div>
            <div className="lg:w-1/2 lg:sticky lg:top-8">
              <FloatingContactForm />
            </div>
          </div>

          <BranchLocations />
        </div>
      </div>
    </div>
  );
};

export default Contact;
