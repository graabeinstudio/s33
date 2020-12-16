export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish"
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel"
    },
    {
      name: "description",
      type: "text",
      title: "Beskrivelse",
      description: "Beskrivelse for SEO og sosial media."
    },
    {
      name: "keywords",
      type: "array",
      title: "Nøkkelord",
      description: "Add keywords that describes your portfolio.",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      }
    }
  ]
};
