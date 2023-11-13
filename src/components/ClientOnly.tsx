import { ReactNode, useEffect, useState } from "react";

function ClientOnly({ children, ...delegated }:any) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}

export {ClientOnly}