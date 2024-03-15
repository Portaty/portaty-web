import React from "react";
import Link from "next/link";
import { footer } from "@/constants";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  const { contact, links, legal, newsletter } = footer;
  return (
    <div className="container section">
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.contact}>
            <Image src={contact.logo} alt="" width={150} height={65} />
            <div key={contact.info[0].id}>
              <i className={contact.info[0].icon}></i>
              <p>{contact.info[0].text}</p>
            </div>
            <div key={contact.info[1].id}>
              <i className={contact.info[1].icon}></i>
              <p>{contact.info[1].text}</p>
            </div>

            <div className={styles.redes}>
              {contact.redes.map((item) => (
                <Link href={`${item.link}`} key={item.id}>
                  <i className={item.icon}></i>
                </Link>
              ))}
            </div>
            <Link
              href={`${contact.info[2].link}`}
              className={styles.linkWhatsapp}
            >
              <i className={contact.info[2].icon}></i>
              <p>Contactanos</p>
            </Link>
          </div>
          <div className={styles.links}>
            <h2>{links.title}</h2>
            <div className={styles.linksContent}>
              {links.pages.map((item) => (
                <Link href={`${item.link}`} key={item.id}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.legal}>
            <h2>{legal.title}</h2>
            <div className={styles.legalContent}>
              {legal.pages.map((item) => (
                <Link href={`${item.link}`} key={item.id}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.newsletter}>
            <h2>{newsletter.title}</h2>
            <p>{newsletter.subtitle}</p>
            <div className={styles.input}>
              <input
                type="text"
                name=""
                placeholder={newsletter.placeholder}
                id=""
              />
              <button>{newsletter.button}</button>
            </div>
          </div>
        </div>
        <div className={styles.bot}>
          <p>{footer.copy}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
