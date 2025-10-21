export interface IUpdate {
  id: number;
  type: "blog" | "talk" | "conference" | "paper" | "award" | "other";
  title: string;
  description?: string;
  date: string;
  link?: string;
  venue?: string;
  status?: "accepted" | "published" | "spotlight" | "oral" | "poster" | "preprint";
}
