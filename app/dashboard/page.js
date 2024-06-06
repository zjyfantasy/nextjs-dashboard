import React from "react";
import PDFViewer from "./PDFViewer/PDFViewer";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <PDFViewer />
    </div>
  );
};

export default page;
