import styles from "./Wrapper.module.css";

export default function Wrapper(props) {
  return (
    <div style={props.style} className={styles.container}>
      {" "}
      {props.children}{" "}
    </div>
  );
}
