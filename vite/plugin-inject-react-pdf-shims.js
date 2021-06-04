export default function inject() {
  return {
    name: "inject-react-pdf-shims",

    enforce: "pre",

    transform(code, id) {
      if (/@react-pdf_renderer/.test(id)) {
        return {
          code: `
import process from "process";
import { Buffer } from "buffer";
import EventEmitter from "events";

window.global = window;
window.Buffer = Buffer;
window.process = process;
window.EventEmitter = EventEmitter;
${code}
`,
        };
      }
    },
  };
}
