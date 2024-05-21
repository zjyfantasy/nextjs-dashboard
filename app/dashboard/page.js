'use client';

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const page = () => {
  const pathname = usePathname();
  return <div className={styles.container}>{pathname}</div>;
};

export default page;
