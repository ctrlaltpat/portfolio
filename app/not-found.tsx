import Link from "next/link";

const images_404 = ["space_8e2cb00ee8", "404_401c346084", "404st_d5bba705d1"];

export default function NotFound() {
  const random_image =
    images_404[Math.floor(Math.random() * images_404.length)];
  return (
    <>
      <div className="container">
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <div className="image-404">
          <img
            src={`https://strapi.apps.ctrlaltpat.com/uploads/${random_image}.gif`}
            alt="404"
          />
        </div>
        <br />
        <p>Hmmm... something went wrong. Sorry!</p>
        <br />
        <Link href="/" className="cap-btn">
          {" "}
          Esc{" "}
        </Link>
      </div>
    </>
  );
}
