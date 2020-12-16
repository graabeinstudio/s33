import { format } from "date-fns";

export default {
  name: "batch",
  title: "Brygg",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Dette kan brukes til å ha i url",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "label",
      title: "Etikett",
      type: "figure"
    },
    {
      name: "number",
      title: "Nummer",
      type: "number"
    },
    {
      name: "alcohol",
      title: "% alkohol",
      type: "number"
    },
    {
      name: "ibu",
      title: "IBU",
      type: "number"
    },
    {
      name: "brewedAt",
      title: "Brygget",
      description: "Når ble ølen brygget?",
      type: "datetime"
    },
    {
      name: "type",
      title: "Type",
      type: "array",
      of: [{ type: "reference", to: { type: "typeOfBeer" } }]
    }
  ],
  preview: {
    select: {
      name: "name",
      brewedAt: "brewedAt",
      slug: "slug",
      media: "label"
    },
    prepare({ name = "No name", brewedAt, slug = {}, media }) {
      const dateSegment = format(brewedAt, "YYYY/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        name,
        media,
        subtitle: brewedAt ? path : "Missing brew date"
      };
    }
  }
};
