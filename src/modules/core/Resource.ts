import { Filter } from './filters';

export interface Type {
  name: string;
  label: string;
}
export interface String extends Type {
  kind: 'string';
}
export interface Number extends Type {
  kind: 'number';
}
export interface Text extends Type {
  kind: 'text';
}
export interface UUID extends Type {
  kind: 'uuid';
}
export enum DatePickerType {
  Input,
  Button,
}
export interface Timestamp extends Type {
  kind: 'timestamp';
  pickerType: DatePickerType;
}
export interface SelectOption {
  label: string;
  value: string;
}
export interface Select extends Type {
  kind: 'select';
  options: Array<SelectOption>;
}

export interface Reference extends Type {
  kind: 'reference';
}

export type DataType =
  | String
  | Text
  | UUID
  | Timestamp
  | Select
  | Reference
  | Number;

export interface Resource {
  name: string;
  limit?: number;
  offset?: number;
  schema: DataType[];
}

interface InsertResource {
  resource: Resource;
}
enum OrderByCriteria {
  ASC,
  ASC_NULLS_LAST,
  ASC_NULLS_FIRST,
  DESC,
  DESC_NULLS_LAST,
  DESC_NULLS_FIRST,
}
interface OrderByExp {
  field: string;
  order: OrderByCriteria;
}
interface FindResource {
  name: string;
  offset?: number;
  limit?: number;
  where: Filter;
  fields: string[];
  orderBy: OrderByExp[];
}

interface UpdateResource {
  name: string;
  where: Filter;
  payload: any;
}

interface DeleteResource {
  name: string;
  where: Filter;
  id: string;
}

interface InsertResource {
  name: string;
  payload: any;
}

class Module {
  resource: Resource;
  constructor(resource: Resource) {
    this.resource = resource;
  }

  fields(): string[] {
    return this.resource.schema.map((field) => field.name);
  }

  static beforeInsert() {}
  static afterInsert() {}
  static beforeUpdate() {}
  static afterUpdate() {}
  static beforeDelete() {}
  static afterDelete() {}
}
