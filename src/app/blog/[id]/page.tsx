export default async function BlogPost({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div>
      <h1>----- {id} -----</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos repellendus ex neque porro tempore doloribus, animi esse eius placeat adipisci officiis pariatur eaque molestias asperiores! Dolor at nesciunt earum!</p>
    </div>
  );
}
