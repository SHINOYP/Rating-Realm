import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                title
                rating
                body
                categories {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Category = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });
  // console.log(id);
  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/reviews/" + id
  // );
  console.log(data, error);
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Error...</p>;
  const content = data.category.data.attributes.reviews.data;
  const header = data.category.data.attributes.name;
  const consoleList = data.category.data.attributes.reviews.data;
  return (
    <div>
      <h2>{header}</h2>
      {content.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review?.attributes?.rating}</div>
          <h2>{review?.attributes?.title}</h2>
          {/* {console.log(review.attributes.categories.data.)} */}
          {review.attributes.categories.data.map((c) => (
            <small key={c.id}>{c.attributes.name}</small>
          ))}

          <p>{review?.attributes?.body?.substring(0, 200)}</p>
          <Link to={`/details/${review.id}`}>read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
