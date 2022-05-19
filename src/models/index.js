// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, History, Todo } = initSchema(schema);

export {
  Profile,
  History,
  Todo
};