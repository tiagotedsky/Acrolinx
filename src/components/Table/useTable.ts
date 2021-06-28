import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { FilterList } from '../../App.types';
import { InvoiceDTO } from '../../mock/data';

export const MAX_INVOICES_PER_PAGE = 10;

type FilteredDataKeys = keyof Omit<InvoiceDTO, 'id'>;

interface UseTable {
  pages: InvoiceDTO[][];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const useTable = (data: InvoiceDTO[], filters: FilterList): UseTable => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    setCurrentPage(() => 0);
  }, [data, filters]);

  const pages = useMemo(() => {
    // Filter data according to filters set on filter box
    const invoicesToShow = data.filter((invoice) => {
      const list = Object.entries(filters).map(([key, distinctData]) => {
        return invoice[key as FilteredDataKeys] === distinctData.value;
      });

      return list.every((invoiceFilter) => invoiceFilter === true);
    });

    // Get the number of pages
    const pagesList = Array(
      Math.ceil(invoicesToShow.length / MAX_INVOICES_PER_PAGE)
    ).fill(0);

    // Populate a list with data by page
    return pagesList.map((page, index) => {
      return invoicesToShow.slice(10 * index, 10 * (index + 1));
    });

  }, [data, filters])

  return { pages, currentPage, setCurrentPage }

}