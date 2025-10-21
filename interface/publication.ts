export interface Publication {
  id: string;
  type: string;
  title: string;
  author: string;
  year: string;
  journal?: string;
  booktitle?: string;
  pages?: string;
  organization?: string;
  volume?: string;
  number?: string;
  doi?: string;
  url?: string;
}

export interface PublicationsProps {
  bibFilePath?: string;
}
