import { MapPin, Phone, Mail, Clock } from "lucide-react";

const branches = [
  {
    name: "Hurghada Branch",
    address:
      "DiveMix gas & compressor technologies Bldg 96 Industrial Area, El Nagda St, 84111 Hurghada, RedSea, Egypt.",
    phone: "+20 1000 096 033 ",
    email: "info@divemix.com",
    hours: "Sun-Thu: 9:00 AM - 5:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114160.70945429113!2d33.74793535265918!3d27.215714584297275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287b2cd3dfcad%3A0x5e75cf4c5a87e425!2sHurghada%2C%20Red%20Sea%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1647850455526!5m2!1sen!2sus",
  },
  {
    name: "Cairo Branch",
    address:
      "DiveMix gas & compressor technologies 16 Misr El Tameer Buildings, 2nd Area, Sheraton Buildings, 5th floor, suite 21. Cairo – Egypt",
    phone: "+20 222 692 213",
    email: "info@divemix.com",
    hours: "Sun-Thu: 9:00 AM - 5:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564057436!2d31.217562824903533!3d30.032468600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847a9a4a94d1d%3A0x95f5307e1d99dfed!2sMaadi%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1647850523456!5m2!1sen!2sus",
  },
];

const BranchLocations = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Branches</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={branch.mapUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.name} location`}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{branch.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-cyan-600 mr-3" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-cyan-600 mr-3" />
                    <span>{branch.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-cyan-600 mr-3" />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchLocations;
