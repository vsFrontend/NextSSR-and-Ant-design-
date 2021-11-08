import Link from "next/link";

function Error() {
  return (
    <div className="ps-section__content">
      <img className="img-404" src="/data/img/404.svg" alt="" />

      <h1>Ohh! Page not found</h1>
      <h4>
        It seems we can't find what you're looking for. <br />
        Go back to
        <Link href="/">
          <a>
            <strong className="m-3 ps-btn ps-btn--arrow ps-btn--autline ps-btn--rounded">
              Homepage
            </strong>
          </a>
        </Link>
      </h4>
    </div>
  );
}

export default Error;
