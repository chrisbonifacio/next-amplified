// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, History, Todo, Post } = initSchema(schema);

export {
  Profile,
  History,
  Todo,
  Post
};