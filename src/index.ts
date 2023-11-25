import { Elysia, t } from "elysia";

const App = new Elysia()
  .get(
    "/favservers",
    async ({ body }) => {
      
    }
  )

  .listen(8080);

console.log(
  `🦊 Elysia app running at ${App.server?.hostname}:${App.server?.port}`
);
