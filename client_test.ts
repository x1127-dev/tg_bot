import { assert, assertObjectMatch } from "./deps_test.ts";
import { Client } from "./client.ts";

Deno.test("client", async (test) => {
  const TOKEN = Deno.env.get('TOKEN');
  if (!TOKEN) {
    throw new Error('"TOKEN" environment variable not found');
  }

  const client = new Client(TOKEN);

  await test.step({
    name: "construct Client()",
    fn() {
      assert(client instanceof Client);
    },
  });

  await test.step({
    name: "getMe()",
    async fn() {
      const res = await client.getMe();

      assertObjectMatch(
        res,
        {
          id: 5917523270,
          is_bot: true,
          first_name: 'Deno "tg_bot"',
          username: "deno_tg_bot",
          can_join_groups: true,
          can_read_all_group_messages: false,
          supports_inline_queries: false,
        },
      );
    },
  });
});
