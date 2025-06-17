import type { ReactNode } from "react";

interface ResultsProps {
  children: ReactNode;
}

function Results({ children }: ResultsProps) {
  return <p className="mt-8 max-w-[70dvw] text-center">{children}</p>;
}

export default Results;
