import React, { ReactNode } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

interface IndexProps {
  children: ReactNode;
  loading: boolean;
  error?: any;
}

const Index: React.FC<IndexProps> = ({ children, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center">
          <div className="py-5">
            <ClipLoader />
          </div>
      </div>
    );
  }
  if (error) {
    return <div>error</div>;
  }
  return <>{children}</>;
};

export default Index;
