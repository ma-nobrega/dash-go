import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from 'miragejs';
import faker from 'faker';
import React from 'react';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export const makeServer = (): React.ReactNode => {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return `${faker.name.firstName()} ${faker.name.lastName()}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
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
      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;
        const total = schema.all('user').length;
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        const users = this.serialize(schema.all('user'))
          .users.sort(
            (a: User, b: User) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(pageStart, pageEnd);
        return new Response(200, { 'x-total-count': String(total) }, { users });
      });
      this.get('/users/:id');
      this.post('/users');
      this.namespace = '';
      this.passthrough();
    },
  });
  return server;
};
