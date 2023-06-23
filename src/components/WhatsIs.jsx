import React, { useState } from "react";
import Link from "next/link";
import { whatsis } from "@/constants";
import styles from "@/styles/WhatsIs.module.css";
import Image from "next/image";

const WhatsIs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="container section">
      <div className={styles.content}>
        <div className={styles.left}>
        <Image src={whatsis.img} alt="" width={800} height={400} />
        </div>
        <div className={styles.right}>
          <div className={styles.ad}>
            <p className={styles.titleAd}>{whatsis.ad}</p>
          </div>
          <h2 className={styles.title}>
            {whatsis.first}
            <span>{whatsis.second}</span>
          </h2>
          <p className={styles.paragraph}>{whatsis.paragraph}</p>
          <div className={styles.faq}>
            <p className={styles.titleFaq}>{whatsis.faqTitle}</p>
            {whatsis.faq.map((item) => (
              <div
                key={item.id}
                onClick={() => setActive(item.id)}
                className={styles.item}
              >
                <div className={styles.question}>
                  <p>{item.question}</p>
                  <i
                    className={
                      active === item.id
                        ? "bx bx-chevron-up"
                        : "bx bx-chevron-down"
                    }
                  ></i>
                </div>

                {active === item.id && (
                  <p className={styles.anwser}>{item.anwser}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsIs;
