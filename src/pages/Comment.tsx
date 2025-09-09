import React from 'react';
import Giscus from '@giscus/react';

const Comment: React.FC = () => {
  return (
        <Giscus
          repo="SurvivorNo1/SurvivorNo1.github.io"
          repoId="R_kgDOMimmbQ"
          category="Announcements"
          categoryId="DIC_kwDOMimmbc4CvLy_"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="light"
          lang="zh-CN"
          loading="lazy"
        />
  );
}

export default Comment;
