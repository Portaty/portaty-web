import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import { navbar } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container section_two">
      <div className={styles.navbar}>
        <div className={styles.left}>
          <Image src={navbar.logo} alt="" width={100} height={100} />
        </div>
        <div className={styles.right}>
        <div className={styles.menu}>
            {navbar.menu.map((item) => (
              <Link href={`${item.id}`} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
          <Link href={'/'} className={styles.button}>
              <p>{navbar.button.title}</p>
              <i className={navbar.button.icon}></i>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
