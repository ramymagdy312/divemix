import React from "react";
import ApplicationCard from "./ApplicationCard";
import type { Application } from "../../data/applications";

interface ApplicationGridProps {
  applications: Application[];
}

const ApplicationGrid: React.FC<ApplicationGridProps> = ({ applications }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {applications.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  );
};

export default ApplicationGrid;