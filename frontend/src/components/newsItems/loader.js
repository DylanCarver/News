import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonItems = props => {
  const n = props.count;

  return [...Array(n)].map((e, i) => (
    <div key={i}>
      <Skeleton height={110} count={1} />
      <div style={{ height: 20 }} />
    </div>
  ));
};

const Loader = props => {
  const { count } = props;
  return (
    <SkeletonTheme color="#f8f8f8" highlightColor="#fafafa">
      <SkeletonItems count={count} />
    </SkeletonTheme>
  );
};

export default Loader;
