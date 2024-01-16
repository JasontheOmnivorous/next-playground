const ProductReviewPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Showing reviews of product number {params.id}</h1>
    </div>
  );
};

export default ProductReviewPage;
