import ProductItem from "@/lib/ProductItem"

const ProductDetails = ({params: {slug}}) => {

  return (
    <div className="">
       <ProductItem slug={slug} />
    </div>
  )
}

export default ProductDetails