import filelistData from './filelist.json';

interface fileItem {
  path: string;
  description: string;
}

interface Filelist {
  blogs: {
    [year: string]: fileItem[];
  };
  photos: {
    [year: string]: fileItem[];
  };
  publications: {
    [year: string]: fileItem[];
  };
}

const filelist: Filelist = filelistData;

export default filelist;
