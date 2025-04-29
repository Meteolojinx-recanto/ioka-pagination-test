import { UiPagination } from '../../shared/ui/pagination/ui-pagination';
import { useState } from 'react';
import styles from './home-page.module.scss';

export const HomePage = () => {
  const [regularPage, setRegularPage] = useState(1);
  const [circularPage, setCircularPage] = useState(1);
  const totalItems = 100;
  const pageSize = 10;

  return (
    <div className={styles.homePage}>
      <h1>Демонстрация пагинации</h1>

      <section className={styles.section}>
        <h2>Обычная пагинация</h2>
        <p>Текущая страница: {regularPage}</p>
        <UiPagination
          totalItems={totalItems}
          pageSize={pageSize}
          currentPage={regularPage}
          onPageChange={setRegularPage}
        />
      </section>

      <section className={styles.section}>
        <h2>Зацикленная пагинация</h2>
        <p>Текущая страница: {circularPage}</p>
        <UiPagination
          totalItems={totalItems}
          pageSize={pageSize}
          currentPage={circularPage}
          onPageChange={setCircularPage}
          isCircular={true}
        />
      </section>
    </div>
  );
};
