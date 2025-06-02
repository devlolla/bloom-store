import { DOTS, usePagination } from "../../hooks/usePagination";
import { Arrow, PaginationContainer, PaginationItem } from "./style";

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  console.log(paginationRange, currentPage)

  if (currentPage === 0 ) {
    return null;
  }

  const onNext = () => onPageChange(currentPage + 1);
  const onPrevious = () => onPageChange(currentPage - 1);
  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer className={className}>
      <PaginationItem disabled={currentPage === 1} onClick={onPrevious}>
        <Arrow direction="left" />
      </PaginationItem>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItem key={`dots-${index}`} isDots>
              &#8230;
            </PaginationItem>
          );
        }

        return (
          <PaginationItem
            key={pageNumber}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}

      <PaginationItem disabled={currentPage === lastPage} onClick={onNext}>
        <Arrow direction="right" />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;