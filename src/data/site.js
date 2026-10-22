import { clinic } from "./siteData";
import { treatmentsData } from "./treatmentsData";
import { testimonialsData } from "./testimonialsData";
import { localitiesData, localityNamesList } from "./localitiesData";
import { faqData } from "./faqData";

// Make treatment items work both as objects (item.title, item.description) and tuples (item[0], item[1])
export const treatments = treatmentsData.map((t) => {
  const item = [t.title, t.description];
  item.id = t.id;
  item.title = t.title;
  item.name = t.title;
  item.description = t.description;
  item.desc = t.description;
  item.category = t.category;
  item.duration = t.duration;
  return item;
});

export const testimonials = testimonialsData;
export const localities = localityNamesList;
export const puneLocalities = localitiesData;
export { clinic, faqData };

export default {
  clinic,
  treatments,
  testimonials,
  localities,
  puneLocalities,
  faqData,
};
