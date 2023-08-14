import React from "react";
// import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`;

const Homepage = () => {
  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/reviews"
  // );
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Error...</p>;
  return (
    <div>
      {data?.reviews?.data?.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review?.attributes?.rating}</div>
          <h2>{review?.attributes?.title}</h2>
          <small>console list</small>
          <p>{review?.attributes?.body?.substring(0, 200)}</p>
          <Link to={`/details/${review.id}`}>read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
