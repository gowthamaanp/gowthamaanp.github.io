export interface IProject {
    tags: string[];
    code?: string;
    preview?: string;
    demo?: string;
    title: string;
    description: string[];
    thumbnail?: string;
    images?: string[];
    screenshots?: string[];
    type?: 'Web' | 'Mobile' | 'Desktop' | 'Embedded Systems' | 'Research';
    techStack?: string[];
    features?: string[];
    links?: {
      label: string;
      url: string;
    }[];
    status?: 'Completed' | 'In-Progress' | 'Published';
    date?: string;
  }