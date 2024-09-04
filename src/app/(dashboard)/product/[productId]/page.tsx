const ProductDetail = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <div>Product Id {params.productId}</div>;
};
export default ProductDetail;
