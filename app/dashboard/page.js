"use client";
import React, { useEffect } from "react";
import jsPreviewPdf from "@js-preview/pdf";
import styles from "./page.module.css";

const page = () => {
  useEffect(() => {
    const myPdfPreviewer = jsPreviewPdf.init(document.getElementById("pdf"), {
      onError: (e) => {
        console.log("发生错误", e);
      },
      onRendered: () => {
        console.log("渲染完成");
      },
    });
    myPdfPreviewer.preview("/math.pdf");
  }, []);
  return (
    <div className={styles.container}>
      <div id="pdf"></div>
    </div>
  );
};

export default page;
