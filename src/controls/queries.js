import gql from "graphql-tag";

export const ctgQuery = gql`{
    category {
    products {
        id
        name
        inStock
        gallery
        description
        category
        prices {
        amount
        }
        brand
}}}`