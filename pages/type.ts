export type BlogData = {
  id: String;
  title: String;
  date: Date;
  thumnail: String | undefined,
  contentHtml: String
};

export type Props = {
  blogDatas: Array<BlogData>
};

export type ServerSidePostData = {
  id: Number;
  title: String;
  body: String;
};

export type ServerSideProps = {
  postDatas: ServerSidePostData[]
};
