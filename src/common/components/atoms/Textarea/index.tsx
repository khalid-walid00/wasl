interface TextareaAtomProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  }
  
  function TextareaAtom({
    value,
    onChange,
    placeholder,
    className = "",
    ...rest
  }: TextareaAtomProps) {
    return (
      <textarea
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`border resize-y  outline-none min-h-[100px] max-h-[200px] p-2 cursor-text pt-3 px-4 border-[--lineBorder] transition-all w-full bg-transparent rounded-[8px] ${className}`}
        {...rest}
      />
    );
  }
  
  export default TextareaAtom;
  