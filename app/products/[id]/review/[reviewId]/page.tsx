import { notFound } from "next/navigation";

// we used useRouter hook in page router to get param queries
// but in app router, we use SSR, so cant use hooks unless we explicitly define use client at the top level
// every component in next get access to params props to get url queries, so we're gonna use it
const ReviewDetailPage = ({
  params,
}: {
  params: {
    id: string;
    reviewId: string;
  };
}) => {
  if (Number(params.reviewId) > 1000) {
    notFound(); // this function is used to render not found page in certain situations
  }
  return (
    <div>
      <h1>
        Showing review {params.reviewId} of product {params.id}
      </h1>
    </div>
  );
};

export default ReviewDetailPage;
