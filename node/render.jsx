const fs = require("fs");
const path = require("path");
const React = require("react");
const {
  renderToFile,
  renderToStream,
  renderToString,
  Document,
  Page,
  Text,
} = require("@react-pdf/renderer");

const MyDocument = () => (
  <Document>
    <Page>
      <Text>React-pdf</Text>
    </Page>
  </Document>
);

const go = async () => {
  const outputDirectory = path.join(__dirname, "output");
  if (fs.existsSync(outputDirectory))
    fs.rmdirSync(outputDirectory, { recursive: true });
  fs.mkdirSync(outputDirectory);

  await renderToFile(
    <MyDocument />,
    path.join(outputDirectory, "renderToFile.pdf")
  );

  const stream = fs.createWriteStream(
    path.join(outputDirectory, "renderToStream.pdf")
  );
  (await renderToStream(<MyDocument />)).pipe(stream);

  fs.writeFileSync(
    path.join(outputDirectory, "renderToString.pdf"),
    await renderToString(<MyDocument />)
  );
};

go();
