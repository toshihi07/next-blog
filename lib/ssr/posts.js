import fs from 'fs'
import path from 'path'

export async function getAllPostDatas() {
  // ファイルシステムの代わりに
  // 外部の API エンドポイントから投稿データを取得する
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
  return res.map(post => {
    return {
      params: {
        id: post.id,
        title: post.title,
        body: post.body
      }
    }
  }
)
}

