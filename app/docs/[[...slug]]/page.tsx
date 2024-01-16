// this dude is called catch-all route segment
// we can write it using [...randomBS]
// it can catch every child segments of a parent route segment
// but if we want to include the parent in catching process also, we can write it like [[...randomBS]]
const CatchAllDynamicPage = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Showing concept {params.slug[1]} of {params.slug[0]} feature
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Showing {params.slug[0]} feature</h1>;
  }
  return <h1>Docs page</h1>;
};

export default CatchAllDynamicPage;
