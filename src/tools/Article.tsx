import { useEffect, useState } from 'react';
import ArticleProps from '../constant/filelist';

interface ArticleProps {
  jsonpath: string;
}

interface ArticleInterface {
  Title: string;
  Authors: string;
  PublicationDate: string;
  Conference: string;
  ConferenceAbbreviation: string;
  Pages: string;
  Publisher: string;
  Description: string;
  ScholarArticles: string;
  Link: string;
}

const Article: React.FC<ArticleProps> = ({ jsonpath }) => {
  const [data, setData] = useState({} as ArticleInterface);

  useEffect(() => {
    fetch(jsonpath)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [jsonpath]);
  // title authors link is enough
  return (
    <div className="mb-2 mt-2">
      <a className="text-lg font-semibold hover:underline" href={data.Link}>
        {data.Title}
      </a>
      <p>{data.Authors}</p>
    </div>
  );
};

export default Article;
