import { ComponentChildren } from "preact";
import styles from "./Row.module.css"
import * as space from "./space"

interface RowProps {
  children: ComponentChildren;
  spaceX?: "4",
}
export function Row({ children, spaceX }: RowProps) {
  const className = [styles.Row, spaceX && space.spaceX(spaceX) ].filter(Boolean).join(" ");
  return <div className={className}>{children}</div>
}
