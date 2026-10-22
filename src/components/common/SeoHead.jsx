import { useEffect } from "react";

export default function SeoHead({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title.includes("Dr. Kanade")
        ? title
        : `${title} | Dr. Kanade's Homeopathic Clinic Pune`;
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
