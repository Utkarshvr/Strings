import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  }).onUploadComplete(async ({ metadata, file }) => {
    // This code RUNS ON YOUR SERVER after upload
    console.log("Upload complete for userId:", metadata.userId);

    console.log("file url", file.url);
  }),

  // Takes ONE image up to 2MB
  strictImageAttachment: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  }).onUploadComplete((data) => console.log("file", data)),
};
