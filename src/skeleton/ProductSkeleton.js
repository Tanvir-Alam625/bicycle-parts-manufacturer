import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const ProductSkeleton = () => {
    return (
      <div className="bg-white rounded-md p-4 shadow">
        <Skeleton height={300} borderRadius={10}  baseColor="#F1F5F9" highlightColor="#fff" />     
        <p>
          <Skeleton count={4} borderRadius={10} height={20} baseColor="#F1F5F9" highlightColor="#fff" />
        </p>
      </div>
    );
}
export default ProductSkeleton;