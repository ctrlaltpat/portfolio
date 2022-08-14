interface Post {
  id: number;
  attribute: {
    title: string;
    description: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
  };
}

type Visitor = {
  name: string;
  email: string;
  message: string;
}
