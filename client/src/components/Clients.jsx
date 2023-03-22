import { gql, useQuery } from "@apollo/client";

const GET_CLIENT = gql`
  query getClients {
    clients {
      id
      name
      email
    }
  }
`;

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENT);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>something went wrong..</p>;
  }
  return <>{!loading && !error && <h1>clients</h1>}</>;
}
