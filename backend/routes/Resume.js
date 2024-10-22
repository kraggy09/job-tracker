import { Router } from "express";
import { fromBuffer } from "pdf2pic";
import { createWorker } from "tesseract.js";

const router = Router();

// Upload route for processing file data and text extraction
router.post("/upload", async (req, res) => {
  try {
    console.log(req.files);

    const formData = await req.formData();
    const file = formData.get("jobDescription");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (fileType === "application/pdf") {
      // Handle PDF files using pdf2pic
      const options = {
        density: 300,
        saveFilename: "output",
        format: "png",
        width: 1240,
        height: 1754,
        responseType: "buffer",
      };

      const converter = fromBuffer(buffer, options);

      try {
        // Convert all PDF pages to images
        const result = await converter.bulk(-1, { responseType: "buffer" });

        // Perform OCR on all image buffers
        const ocrPromises = result.map(async (img) => {
          return await performOCR(img.buffer);
        });

        const extractedTextArray = await Promise.all(ocrPromises);
        const extractedText = extractedTextArray.join("\n");

        return res.json({
          urlHash,
          message:
            "PDF pages successfully converted to images and text extracted",
          text: extractedText,
        });
      } catch (error) {
        console.error("Error processing PDF:", error);
        return res.status(500).send({ error: "Error processing PDF" });
      }
    } else if (fileType.startsWith("image/")) {
      // Handle image files directly
      try {
        const extractedText = await performOCR(buffer);

        return res.json({
          urlHash,
          message: "Image successfully processed and text extracted",
          text: extractedText,
        });
      } catch (error) {
        console.error("Error processing image:", error);
        return res.status(500).send({ error: "Error processing image" });
      }
    } else {
      return res.status(400).send({ error: "Unsupported file type" });
    }
  } catch (error) {
    console.error("Error processing file:", error);
    return res.status(500).send({ error: "Failed to process file" });
  }
});

// Helper function to perform OCR on image buffers
const performOCR = async (imageBuffer) => {
  try {
    const worker = await createWorker("eng");
    const { data } = await worker.recognize(imageBuffer);
    await worker.terminate();
    return data.text;
  } catch (error) {
    console.error("Error in OCR process:", error);
    throw error;
  }
};

export default router;
