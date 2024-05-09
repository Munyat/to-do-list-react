import style from "./footer.module.css";

export function Footer({ count, total }) {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed Todos:{count} </span>
      <span className={style.item}>Todo Todos:{total} </span>
    </div>
  );
}
