import { InvoiceDTO } from '../../mock/data';

type InvoiceKeys = keyof Omit<InvoiceDTO, 'id'>;

type FlatIndexAcc = Record<InvoiceKeys, string[]>;

type Top5Item = Record<string, number>;
type Top5 = Record<InvoiceKeys, Top5Item>;

const MAX_TOP_DISTINCT_VALUES = 5;

export const useFilterBox = (data: InvoiceDTO[]): Top5 => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filterUniqueValues = data.map(({ id, ...invoice }) => invoice);

  // 
  // Flat data into an obj containing a list of invoice values ( occurrences )
  // {
  //    [invoiceKey]: [invoiceValue]
  // }
  // ex: {serviceType: ['Software', 'Marketing', ...]}
  // 
  const occurrencesByInvoiceItems = filterUniqueValues.reduce(
    (flatAcc, invoice: Omit<InvoiceDTO, 'id'>) => {

      const flatIndex = (Object.keys(invoice) as InvoiceKeys[]).reduce(
        (acc, invoiceKey) => {
          return {
            ...acc,
            [invoiceKey]: [...(flatAcc[invoiceKey] || []), invoice[invoiceKey]],
          };
        },
        {} as FlatIndexAcc
      );

      return {
        ...flatAcc,
        ...flatIndex,
      };
    },
    {} as FlatIndexAcc
  );

  // 
  // Obj by invoice key, containing an obj by invoice value with occurrences amount
  // {
  //    [invoiceKey] : {  [invoiceValue]: occurrences  }
  // }
  // ex: {serviceType: {'Software': 10}}
  // 
  const countOccurrences = (
    Object.keys(occurrencesByInvoiceItems) as InvoiceKeys[]
  ).reduce((occurrencesAcc, filterKey: InvoiceKeys) => {
    const countOccurrences = occurrencesByInvoiceItems[filterKey].reduce(
      (currentInvoiceItem: Top5Item, value) => {
        return {
          ...currentInvoiceItem,
          [value]: (currentInvoiceItem[value] || 0) + 1,
        };
      },
      {} as Top5Item
    );

    const currentOccurrence = Object.entries(countOccurrences);

    // Sort and grab the the item with most occurrences
    const [distinctName, distinctValue] = currentOccurrence.sort(
      (a, b) => a[1] - b[1]
    )[currentOccurrence.length - 1];

    if (distinctValue > 0 && Object.keys(occurrencesAcc).length < MAX_TOP_DISTINCT_VALUES) {
      return {
        ...occurrencesAcc,
        [filterKey]: { [distinctName]: distinctValue },
      };
    }

    return occurrencesAcc;

  }, {} as Top5);

  return countOccurrences;
}