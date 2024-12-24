import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/ContactForm";
import BranchInfo from "../components/contact/BranchInfo";

const Contact = () => {
  const branches = [
    {
      name: "Cairo Headquarters",
      address: "123 Tahrir Square, Downtown Cairo, Egypt",
      phone: "+20 2 1234 5678",
      email: "cairo@divemix.com",
      hours: "Sun-Thu: 9:00 AM - 5:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.9691846310275!2d31.233667!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c71f6947e1%3A0x3a1d77f0a4c9c0a9!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1635000000000!5m2!1sen!2seg"
    },
    {
      name: "Hurghada Branch",
      address: "45 Marina Road, Hurghada, Red Sea Governorate, Egypt",
      phone: "+20 65 3456 7890",
      email: "hurghada@divemix.com",
      hours: "Sat-Thu: 8:00 AM - 4:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.5583929347837!2d33.824722!3d27.257778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287b2cd000001%3A0x3c7b03ab745705d9!2sHurghada%20Marina!5e0!3m2!1sen!2seg!4v1635000000000!5m2!1sen!2seg"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team of experts"
        backgroundImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000"
      />

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {branches.map((branch) => (
              <BranchInfo key={branch.name} {...branch} />
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;