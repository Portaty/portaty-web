import React from "react";
import Link from "next/link";
import { features } from "@/constants";
import styles from "@/styles/Features.module.css";
import Image from "next/image";

const Features = () => {
  return (
    <div className="container section">
      <div className={styles.content}>
        <div className={styles.head}>
          <h2 className={styles.title}>
            {features.first}
            <span>{features.second}</span>
          </h2>
          <div className={styles.line} />
        </div>
        <div className={styles.features}>
          {features.features.map((item) => (
            <div key={item.id} className={styles.borderMain}>
              <div key={item.id} className={styles.borderMedium}>
                <div className={styles.border}>
                  <div className={styles.feature}>
                    <Image src={item.image} alt="" width={35} height={35} />
                  </div>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
