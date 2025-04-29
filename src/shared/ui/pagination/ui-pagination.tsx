import Pagination from '../../lib/pagination/pagination';
import styles from './ui-pagination.module.scss';

interface UiPaginationProps {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  isCircular?: boolean;
}

export const UiPagination = ({
  totalItems,
  pageSize,
  currentPage,
  onPageChange,
  isCircular = false,
}: UiPaginationProps) => {
  const pagination = new Pagination(currentPage, pageSize, totalItems, isCircular);
  const pages = pagination.getPages();

  return (
    <nav className={styles.pagination} role='navigation' aria-label='Pagination'>
      <div className={styles.pagination__controls}>
        <button
          className={styles.pagination__button}
          onClick={() => onPageChange(pagination.getFirstPage())}
          disabled={!pagination.canGoPrevious()}
          aria-label='Перейти на первую страницу'
        >
          ««
        </button>
        <button
          className={styles.pagination__button}
          onClick={() => onPageChange(pagination.jumpBackward(3))}
          disabled={!pagination.canGoPrevious()}
          aria-label='Перейти назад на 3 страницы'
        >
          «
        </button>
        <button
          className={styles.pagination__button}
          onClick={() => onPageChange(pagination.getPreviousPage())}
          disabled={!pagination.canGoPrevious()}
          aria-label='Перейти на предыдущую страницу'
        >
          ‹
        </button>
      </div>

      <div className={styles.pagination__pages}>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`${styles.pagination__page} ${pageNumber === currentPage ? styles.pagination__page_active : ''}`}
            onClick={() => onPageChange(pageNumber)}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
            aria-label={`Перейти на страницу ${pageNumber}`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <div className={styles.pagination__controls}>
        <button
          className={styles.pagination__button}
          onClick={() => onPageChange(pagination.getNextPage())}
          disabled={!pagination.canGoNext()}
          aria-label='Перейти на следующую страницу'
        >
          ›
        </button>
        <button
          className={styles.pagination__button}
          onClick={() => onPageChange(pagination.jumpForward(3))}
          disabled={!pagination.canGoNext()}
          aria-label='Перейти вперед на 3 страницы'
        >
          »
        </button>
        <button
          className={styles.pagination__button}
          onClick={() => onPageChange(pagination.getLastPage())}
          disabled={!pagination.canGoNext()}
          aria-label='Перейти на последнюю страницу'
        >
          »»
        </button>
      </div>
    </nav>
  );
};
