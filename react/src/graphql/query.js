import { useQuery, gql } from '@apollo/client';

export const FEED_QUERY = gql`
    query{
        posts{
            id
            title
            user {
                id
                fullname
            }
        }
    }
`;