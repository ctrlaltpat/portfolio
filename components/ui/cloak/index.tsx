import { CSSProperties, ReactNode, useMemo, useState } from "react";
import cloakStyles from "./cloak.module.css";
import { cx } from "@/utils/styles";

type CloakProps = {
  visibility: boolean;
  delay: number;
  children: ReactNode;
};

export default function Cloak({
  visibility,
  delay = 2000,
  children,
}: CloakProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [styles, setStyles] = useState(cloakStyles.open);

  useMemo(() => {
    if (!visibility) {
      setStyles(cx(cloakStyles.open, cloakStyles.cloaked));
      setTimeout(() => {
        setIsVisible(false);
      }, delay);
    }
  }, [delay, visibility]);

  return (
    <div
      className={styles}
      style={{ "--duration": `${Math.floor(delay / 2)}ms` } as CSSProperties}
    >
      {isVisible ? <>{children}</> : <></>}
    </div>
  );
}
