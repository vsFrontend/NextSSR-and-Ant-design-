import Link from "next/link";
import { logoPath, homePagePath } from "~/constants/siteDetails";

const Logo = () => (
  <Link href={homePagePath}>
    <a className="ps-logo">
      <img src={logoPath} alt="" style={{ width: 50, height: 50 }} />
    </a>
  </Link>
);

export default Logo;
