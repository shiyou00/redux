import React from 'react';

function News({isFetching,newsList,errorMsg,fetchNews}) {

  return (
    <div className="news">
      <button onClick={fetchNews}>获取新闻列表</button>
      {
        isFetching ?
          <div>数据加载中...</div> :
          (
            <ul>
              {
                newsList.map((item,index)=>{
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
