import { i, init } from '@instantdb/core';

const API_ID = '5b50c930-746e-4bd9-bdb0-05883a47619d';
const schema = i.schema({
  entities: {
    recipes: i.entity({
      id: i.number(),
      name: i.string(),
      image: i.string(),
      difficulty: i.string(),
      prepTimeMinutes: i.number(),
    }),
  },
});

const database = init({ appId: API_ID, schema: schema });

export { database, schema };
