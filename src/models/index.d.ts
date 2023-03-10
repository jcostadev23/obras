import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerEquipements = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipements, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Attachments?: string | null;
  readonly Jobs?: (EquipementsJob | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipements = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipements, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Attachments?: string | null;
  readonly Jobs: AsyncCollection<EquipementsJob>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Equipements = LazyLoading extends LazyLoadingDisabled ? EagerEquipements : LazyEquipements

export declare const Equipements: (new (init: ModelInit<Equipements>) => Equipements) & {
  copyOf(source: Equipements, mutator: (draft: MutableModel<Equipements>) => MutableModel<Equipements> | void): Equipements;
}

type EagerJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly people?: (JobPeople | null)[] | null;
  readonly equipementss?: (EquipementsJob | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly people: AsyncCollection<JobPeople>;
  readonly equipementss: AsyncCollection<EquipementsJob>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Job = LazyLoading extends LazyLoadingDisabled ? EagerJob : LazyJob

export declare const Job: (new (init: ModelInit<Job>) => Job) & {
  copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

type EagerPeople = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<People, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phonenumber: string;
  readonly role?: string | null;
  readonly jobs?: (JobPeople | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPeople = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<People, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phonenumber: string;
  readonly role?: string | null;
  readonly jobs: AsyncCollection<JobPeople>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type People = LazyLoading extends LazyLoadingDisabled ? EagerPeople : LazyPeople

export declare const People: (new (init: ModelInit<People>) => People) & {
  copyOf(source: People, mutator: (draft: MutableModel<People>) => MutableModel<People> | void): People;
}

type EagerEquipementsJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipementsJob, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly equipementsId?: string | null;
  readonly jobId?: string | null;
  readonly equipements: Equipements;
  readonly job: Job;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipementsJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipementsJob, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly equipementsId?: string | null;
  readonly jobId?: string | null;
  readonly equipements: AsyncItem<Equipements>;
  readonly job: AsyncItem<Job>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EquipementsJob = LazyLoading extends LazyLoadingDisabled ? EagerEquipementsJob : LazyEquipementsJob

export declare const EquipementsJob: (new (init: ModelInit<EquipementsJob>) => EquipementsJob) & {
  copyOf(source: EquipementsJob, mutator: (draft: MutableModel<EquipementsJob>) => MutableModel<EquipementsJob> | void): EquipementsJob;
}

type EagerJobPeople = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobPeople, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobId?: string | null;
  readonly peopleId?: string | null;
  readonly job: Job;
  readonly people: People;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobPeople = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobPeople, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobId?: string | null;
  readonly peopleId?: string | null;
  readonly job: AsyncItem<Job>;
  readonly people: AsyncItem<People>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobPeople = LazyLoading extends LazyLoadingDisabled ? EagerJobPeople : LazyJobPeople

export declare const JobPeople: (new (init: ModelInit<JobPeople>) => JobPeople) & {
  copyOf(source: JobPeople, mutator: (draft: MutableModel<JobPeople>) => MutableModel<JobPeople> | void): JobPeople;
}