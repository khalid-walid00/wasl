import { Pagination } from "@nextui-org/react";

function CustomPagination({total,onChange}: any) {
  return (
    <Pagination
      total={total}
      onChange={onChange}
      classNames={{
        wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
        item: "w-8 h-8 text-small rounded-none bg-transparent",
        cursor:
          "bg-[#008ffb] shadow-lg text-white font-bold hover:bg-opacity-90", // Applying the color
      }}
    />
  );
}

export default CustomPagination;
