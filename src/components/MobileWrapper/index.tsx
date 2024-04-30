import { useEffect, useState } from "react";

const MobileWrapper: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    setTimeout(() => setCount(2), 2000);
  }, [])

  console.log("RERENDER");
  return (
    <main className="max-w-md w-screen min-h-screen h-fit overflow-x-hidden shadow-sm bg-maritime-blue font-dm-sans">
      {children}
    </main>
  );
};

export default MobileWrapper;
