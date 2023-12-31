import { g, auth, config } from "@grafbase/sdk";

const user = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatar: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g
    .relation(() => project)
    .list()
    .optional(),
});

const project = g.model("Project", {
  title: g.string(),
  description: g.string(),
  image: g.url(),
  siteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => user),
});

export default config({
  schema: g,
});
