import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $gender: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      gender: $gender
    ) {
      id
    }
  }
`;
