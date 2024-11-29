import React, { ChangeEvent } from "react";

interface FileInputAtomProps {
  onSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
}

const FileInputAtom: React.FC<FileInputAtomProps> = ({ onSelect, multiple }) => (
  <input
    type="file"
    className="w-0 h-0 invisible"
    onChange={onSelect}
    accept="image/*"
    multiple={multiple}
  />
);

export default FileInputAtom;
