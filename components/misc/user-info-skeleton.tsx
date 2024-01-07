import { AboutSkeleton } from "@/components/misc/about-skeleton";
import { FeedsSkeleton } from "@/components/misc/feeds-skeleton";

const UserInfoSkeleton = () => {
  return (
    <>
      <AboutSkeleton />
      <FeedsSkeleton />
    </>
  );
};

export { UserInfoSkeleton };
