import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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

const ReviewDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });
  // console.log(id);
  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/reviews/" + id
  // );
  console.log(data, error);
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Error...</p>;
  const detail = data.review.data;
  return (
    <div>
      <div className="review-card">
        <div className="rating">{detail?.attributes?.rating}</div>
        <h2>{detail?.attributes?.title}</h2>
        <small>console list</small>
        <p>{detail?.attributes?.body}</p>
      </div>
    </div>
  );
};

export default ReviewDetails;
