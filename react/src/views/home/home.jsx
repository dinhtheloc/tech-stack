import React from "react";
import CardArticle from '../../components/CardArticle/CardArticle';
const Home = () => {
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