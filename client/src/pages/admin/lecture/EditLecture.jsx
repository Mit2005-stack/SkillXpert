import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

const EditLecture = () => {
    const params = useParams();
    const courseId = params.courseId;
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <Link to={`/admin/course/${courseId}/lecture`}> {/* <-- Add a proper to attribute here */}
          <Button size="icon" variant="outline" className="rounded-full">
            <ArrowLeft size={16} />
          </Button>
        </Link>
        <h1>Update You Lecture</h1>
      </div>
    </div>
  );
};

export default EditLecture;