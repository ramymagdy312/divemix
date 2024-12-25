import { application } from "../data/applications";
import ApplicationGrid from "../components/applications/ApplicationGrid";
import PageHeader from "../components/common/PageHeader";

const Applications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Applications"
        description="Discover our comprehensive range of gas mixing and compression solutions"
        backgroundImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ApplicationGrid applications={application} />
      </div>
    </div>
  );
};

export default Applications;
