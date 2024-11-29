export default function Blog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <h2>Blog</h2>
        <p>======</p>
      </div>
      {children}
    </div>
  );
}