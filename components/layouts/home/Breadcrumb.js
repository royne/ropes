const Breadcrumb = ({router}) => {
  const { categoryId, productId } = router.query;
  return (
    <span>{`home - ${categoryId} ${productId ? `- ${productId}` : ""}`}</span>
  );
}
 
export default Breadcrumb;