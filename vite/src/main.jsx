import "./main.css";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import Svg from "./svg";
import GoTo from "./goTo";
import Text from "./text";
import Knobs from "./knobs";
import Resume from "./resume";
import Fractals from "./fractals";
import PageWrap from "./pageWrap";

const MOUNT_ELEMENT = document.getElementById("root");

const EXAMPLES = {
  svg: Svg,
  goTo: GoTo,
  text: Text,
  knobs: Knobs,
  resume: Resume,
  pageWrap: PageWrap,
  fractals: Fractals,
};

const Viewer = () => {
  const [example, setExample] = useState("pageWrap");

  const handleExampleChange = (e) => {
    setExample(e.target.dataset.name);
  };

  const Document = EXAMPLES[example];

  return (
    <>
      <h2>Examples</h2>

      <ul>
        {Object.keys(EXAMPLES).map((value) => (
          <li
            key={value}
            data-name={value}
            role="presentation"
            onClick={handleExampleChange}
          >
            {value}
          </li>
        ))}
      </ul>

      <PDFDownloadLink document={<Document />}>Download PDF</PDFDownloadLink>
      <PDFViewer style={{ flex: 1 }}>
        <Document />
      </PDFViewer>
    </>
  );
};

ReactDOM.render(<Viewer />, MOUNT_ELEMENT);
