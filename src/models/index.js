// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Equipements, Job, People, EquipementsJob, JobPeople } = initSchema(schema);

export {
  Equipements,
  Job,
  People,
  EquipementsJob,
  JobPeople
};