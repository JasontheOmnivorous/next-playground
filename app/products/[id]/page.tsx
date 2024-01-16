const ProductDetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <div>Showing details of product number {params.id}</div>;
};

export default ProductDetailPage;
