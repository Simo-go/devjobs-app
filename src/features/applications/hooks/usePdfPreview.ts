import { useEffect, useRef, useState } from "react";
import { useFormContext } from "../../../ui/Form";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = workerUrl;

function usePdfPreview() {
  const {
    formState: { cv },
  } = useFormContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cvHasLoaded, setCvHasLoaded] = useState(false);

  useEffect(
    function () {
      async function loadPdfPreview() {
        if (!(cv instanceof File) || !canvasRef.current) return;

        // get pdf doc preview page
        const page = await getPdfPage(1, cv);

        // calculate page viewport for width 100px;
        const desiredWidth = 100;
        const currentViewport = page.getViewport({ scale: 1 });
        console.log(currentViewport);
        const viewport = page.getViewport({
          scale: desiredWidth / currentViewport.width,
        });

        // calculate resolution (based on dpr)
        const outputScale = window.devicePixelRatio || 1;
        const canvas = canvasRef.current;
        canvas.width = Math.ceil(outputScale * viewport.width);
        canvas.height = Math.ceil(outputScale * viewport.height);

        // determine css sizing
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        // render page onto canvas element
        const renderTask = await page.render({
          viewport,
          canvas,
          transform: [outputScale, 0, 0, outputScale, 0, 0],
        }).promise;

        // set that file preview has been loaded
        setCvHasLoaded(true);
      }

      loadPdfPreview();
    },
    [cv],
  );

  return { cvHasLoaded, canvasRef };
}
export default usePdfPreview;

async function getPdfPage(pageNum: number, file: File) {
  const url = URL.createObjectURL(file);
  const pdf = await getDocument({ url: url }).promise;
  const page = await pdf.getPage(pageNum);

  return page;
}
