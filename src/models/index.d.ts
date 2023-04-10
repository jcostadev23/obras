import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerCalendar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calendar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly day?: string | null;
  readonly equipement?: Equipements | null;
  readonly job?: Job | null;
  readonly people?: People | null;
  readonly workerTimeMinutes?: number | null;
  readonly equipmentTimeMinutes?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly calendarEquipementId?: string | null;
  readonly calendarJobId?: string | null;
  readonly calendarPeopleId?: string | null;
}

type LazyCalendar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Calendar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly day?: string | null;
  readonly equipement: AsyncItem<Equipements | undefined>;
  readonly job: AsyncItem<Job | undefined>;
  readonly people: AsyncItem<People | undefined>;
  readonly workerTimeMinutes?: number | null;
  readonly equipmentTimeMinutes?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly calendarEquipementId?: string | null;
  readonly calendarJobId?: string | null;
  readonly calendarPeopleId?: string | null;
}

export declare type Calendar = LazyLoading extends LazyLoadingDisabled ? EagerCalendar : LazyCalendar

export declare const Calendar: (new (init: ModelInit<Calendar>) => Calendar) & {
  copyOf(source: Calendar, mutator: (draft: MutableModel<Calendar>) => MutableModel<Calendar> | void): Calendar;
}

type EagerEquipements = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipements, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly attachments?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipements = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipements, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly attachments?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type People = LazyLoading extends LazyLoadingDisabled ? EagerPeople : LazyPeople

export declare const People: (new (init: ModelInit<People>) => People) & {
  copyOf(source: People, mutator: (draft: MutableModel<People>) => MutableModel<People> | void): People;
}