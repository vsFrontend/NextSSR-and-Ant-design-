import Link from "next/link";
import { logoPath, homePagePath } from "~/constants/siteDetails";
import style from './styles.module.css'  

const Logo = () => (
  <Link href={homePagePath}>
    <a className="ps-logo">
      <img src={logoPath} alt="" className={style.logoImage}  />
    </a>
  </Link>
);

export default Logo;
