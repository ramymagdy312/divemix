import { application } from "../data/applications";
import ApplicationList from "../components/applications/ApplicationList";
import PageHeader from "../components/common/PageHeader";

const Applications = () => {
  return (
    <div>
      <PageHeader
        title="Applications"
        description="Discover how our solutions serve diverse industries with precision and reliability"
        backgroundImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000"
      />

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ApplicationList applications={application} />
        </div>
      </div>
    </div>
  );
};

export default Applications;
