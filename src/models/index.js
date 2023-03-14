// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Calendar, Equipements, Job, People } = initSchema(schema);

export {
  Calendar,
  Equipements,
  Job,
  People
};