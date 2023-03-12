import Skeleton from "react-loading-skeleton";

const ReviewsSkeleton = () => {
    return(
        <div className="bg-white p-4 rounded-md shadow">
           <div className="flex items-center gap-2">
            <Skeleton  height={'80px'} width={'80px'} circle={true}  baseColor="#F1F5F9" highlightColor="#fff" />
            <Skeleton  height={30} width={200}  borderRadius={10}  baseColor="#F1F5F9" highlightColor="#fff" />
           </div>
           
           <br/>
           <Skeleton  height={30} width={200} borderRadius={10} baseColor="#F1F5F9" highlightColor="#fff" />
           <br/>
           <Skeleton count={4} borderRadius={10} height={20} baseColor="#F1F5F9" highlightColor="#fff" />
        </div>
    );
}
export default ReviewsSkeleton;