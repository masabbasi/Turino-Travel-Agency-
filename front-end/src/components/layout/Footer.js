"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "@layout/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContainarDetail}>
        <div className={styles.footerRight}>
          <div className={styles.footerRightTorino}>
            <p>تورینو</p>
            <ul>
              <li>
                <Link href="#">درباره ما</Link>
              </li>
              <li>
                <Link href="#">تماس با ما</Link>
              </li>
              <li>
                <Link href="#">چرا تورینو</Link>
              </li>
              <li>
                <Link href="#">بیمه مسافرتی</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerRightServices}>
            <p>خدمات مشتریان</p>
            <ul>
              <li>
                <Link href="#">پشتیبانی آنلاین</Link>
              </li>
              <li>
                <Link href="#">راهنمای خرید</Link>
              </li>
              <li>
                <Link href="#">راهنمای استرداد</Link>
              </li>
              <li>
                <Link href="#">پرسش و پاسخ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerLeft}>
          <div className={styles.footerLeftOtherSite}>
            <Image src="/images/aira.webp" width={80} height={80} alt="aira" />
            <Image
              src="/images/samandehi.webp"
              width={80}
              height={80}
              alt="samandehi"
            />
            <Image
              src="/images/ecunion.webp"
              width={80}
              height={80}
              alt="ecunion"
            />
            <Image
              src="/images/passenger-rights.webp"
              width={80}
              height={80}
              alt="passenger-rights"
            />
            <Image
              src="/images/sazman-havapeymaei.webp"
              width={80}
              height={80}
              alt="sazman-havapeymaei"
            />
          </div>
          <div className={styles.footerLeftlogo}>
            <Image src="/images/logo.webp" width={80} height={80} alt="logo" />
            <div>
              <span>تلفن پشتیبانی:</span>
              <span>021-8574</span>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.footerCopyRight}>
        کلیه حقوق این وب سایت متعلق به تورینو میباشد.
      </p>
    </div>
  );
}

export default Footer;
