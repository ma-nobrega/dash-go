import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';
import React from 'react';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer(): React.ReactNode {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `User ${1 + i}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(serv) {
      serv.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;
      this.get('/users');
      this.post('/users');
      this.namespace = '';
      this.passthrough();
    },
  });
  return server;
}
