import { useQuery } from '@vue/apollo-composable';
import { getProducts } from '@/graphql/queries/product';

const useProduct = () => {
  const { result, loading, error } = useQuery(getProducts, { first: 10 });

  return {
    result,
    loading,
    error,
  };
};

export default useProduct;
