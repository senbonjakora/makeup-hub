import { useEffect, useState } from "react";
import ProductBanner from "../component/common/ProductBanner";
import CategorieContainer from "../component/common/CategorieContainer";
import useProductTypes from "../hooks/useProductTypes";
import useProductSort from "../hooks/useProductSort";
import useProductPagination from "../hooks/useProductPagination";
import Pagination from "../component/common/Pagination";
import { Product } from "./HomePage";

const ProductsPage = () => {
  const { data, isLoading } = useProductTypes();

  const [products, setProducts] = useState<Product[]>([]);
  
  const { setSort, sort, sortedProducts } = useProductSort(
    products as Product[]
  );
  const {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    slicedProducts,
  } = useProductPagination(sortedProducts);

  const handleSelectItemsPerPage = (value: number) => {
    setItemsPerPage(value);
  };

  const handleSetSort = (value: string) => {
    setSort(value);
  };

  const handleOnItemSelect = (value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (!isLoading) {
      setProducts(data as Product[]);
    }
    setCurrentPage(1);
  }, [data, sort, itemsPerPage]);

  return (
    <section>
      <ProductBanner />
      <CategorieContainer
        products={slicedProducts}
        selectItemPerPage={handleSelectItemsPerPage}
        selectSort={handleSetSort}
        isLoading={isLoading}
      />
      <Pagination
        currentPage={currentPage}
        onItemSelect={handleOnItemSelect}
        postsPerPage={itemsPerPage}
        totalPosts={data?.length as number}
      />
    </section>
  );
};

export default ProductsPage;
