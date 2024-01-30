import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Suspense } from "react";

export interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
