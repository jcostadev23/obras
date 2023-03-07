// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Job, People, JobPeople } = initSchema(schema);

export {
  Job,
  People,
  JobPeople
};