import { Product } from "@/utils/product";
export async function generateStaticParams() {
    return Product.map((Product) => ({
      slug: Product.slug,
    }));
  }

  type ProductDetail = {
    params: {
      slug: string;
    };
  };
  
  const ProductDetail = ({ params }: ProductDetail) => {
    return <div>Product Detail {params.slug}. This is Detail</div>;
  };
  
  export default ProductDetail;