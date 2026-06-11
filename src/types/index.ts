export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ContactMessageType {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
}