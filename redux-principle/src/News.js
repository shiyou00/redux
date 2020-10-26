import React from 'react';

function News({isFetching,newsList,errorMsg,fetchNews,fetchStart}) {
  return (
    <div className="news">
      <button onClick={fetchStart}>获取新闻列表</button>
      {
        isFetching ?
          <div>数据加载中...</div> :
          (
            <ul>
              {
                newsList && newsList.map((item,index)=>{
                  return <li key={index}>{item.title}</li>
                })
              }
            </ul>
          )
      }
    </div>
  );
}

export default News;
