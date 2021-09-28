import React from "react";
import CardArticle from '../../components/CardArticle/CardArticle';
import { useQuery } from '@apollo/client';
import { FEED_QUERY } from '../../graphql/query';

const Home = () => {

  const { data } = useQuery(FEED_QUERY);
  console.log('data', data);

  return (
    <div className='p-4 bg-gray-100'>
      <div className='flex'>
        <div style={{ width: 240 }}></div>
        <div className='flex-1'>
          <CardArticle></CardArticle>
        </div>
        <div style={{ width: 240 }}></div>

      </div>
    </div>
  );
};

export default Home;