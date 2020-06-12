import styles from "./space.module.css";

export function spaceX(amount: "4"): string {
  const name = "space-x-" + amount;
  return styles[name];
}
