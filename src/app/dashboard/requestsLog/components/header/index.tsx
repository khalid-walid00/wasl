import React from "react";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { setSearch } from "../../requestsLog.slice";
import { useSearch } from "~/features/search";
import { status, statusMethods } from "../statusOptions";

function VehicleHeader() {
  const { searchItems, handleSearch } = useSearch("requestsLogSlice", setSearch);

  return (
    <div className="flex flex-col gap-6 p-4 pb-0">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 w-full sm:w-11/12">
          <CustomSelector
            value={searchItems.type === "Method" ? searchItems.value : ""}
            placeholder="Method"
            options={statusMethods}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSearch(e, "Method")
            }
          />
          <CustomSelector
            value={searchItems.type === "StatusCode" ? +searchItems.value : ""}
            placeholder="Status"
            options={status}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSearch(e, "StatusCode")
            }
          />
        </div>
      
      </div>
    </div>
  );
}

export default VehicleHeader;
