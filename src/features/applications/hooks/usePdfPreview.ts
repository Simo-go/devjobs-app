import { useEffect, useRef, useState } from "react";
import { useFormContext } from "../../../ui/Form";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { getDocument, GlobalWorkerOptions, RenderTask } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = workerUrl;

function usePdfPreview(cv: File) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cvHasLoaded, setCvHasLoaded] = useState(false);

  useEffect(
    function () {
      let renderTask: RenderTask;
      let cancelled = false;

      async function loadPdfPreview() {
        // get pdf doc preview page
        const page = await getPdfPage(1, cv);
        if (cancelled) return;

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
        if (!canvas) return;
        canvas.width = Math.ceil(outputScale * viewport.width);
        canvas.height = Math.ceil(outputScale * viewport.height);

        // reset context for redraw
        canvas.getContext("2d")?.reset();

        // determine css sizing
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        try {
          // render page onto canvas element
          renderTask = page.render({
            viewport,
            canvas,
            transform: [outputScale, 0, 0, outputScale, 0, 0],
          });
          await renderTask.promise;

          // set that file preview has been loaded
          setCvHasLoaded(true);
        } catch (e) {
          if (e instanceof Error) console.error(e.message);
        }
      }

      loadPdfPreview();

      return () => (cancelled = true);
    },
    [cv],
  );

  return { cvHasLoaded, canvasRef, setCvHasLoaded };
}
export default usePdfPreview;

async function getPdfPage(pageNum: number, file: File) {
  const url = URL.createObjectURL(file);
  const pdf = await getDocument({ url: url }).promise;
  const page = await pdf.getPage(pageNum);

  return page;
}
