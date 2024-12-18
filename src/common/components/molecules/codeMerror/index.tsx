import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Editor: React.FC<any> = ({ code = "" }) => {
  return (
    <SyntaxHighlighter dir="ltr"
      customStyle={{
        height: '100%',
        minHeight: '24rem',
        wordWrap: "break-word",         
        overflowWrap: "break-word",     
        width: "100%",                 
        whiteSpace: "pre-wrap",  
      }} 
      language="json"
      style={monokai}
    >
      {JSON.stringify(code, null, 2)}
    </SyntaxHighlighter>
  );
};
