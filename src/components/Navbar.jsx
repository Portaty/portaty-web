import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import { navbar } from "../constants";
import Link from "next/link";

const Navbar = ({ backHome = false }) => {
  return (
    <div className="container section_two">
      <div className={styles.navbar}>
        <div className={styles.left}>
          <Image src={navbar.logo} alt="" width={200} height={80} />
        </div>
        <div className={styles.right}>
          <div className={styles.menu}>
            {navbar.menu.map((item) => (
              <Link href={backHome && item.id === '#home' ? `/` : `${item.id}`} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            href={navbar.button.link}
            className={styles.button}
            target="_blank"
          >
            <p>{navbar.button.title}</p>
            <i className={navbar.button.icon}></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
