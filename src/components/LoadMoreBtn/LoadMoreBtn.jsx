import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={css.loadMoreButton} onClick={onClick}>
      Load more
    </button>
  );
}
