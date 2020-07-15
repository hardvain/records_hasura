interface BaseComparisonExp<A> {
  eq?: A;
  gt?: A;
  gte?: A;
  in?: A[];
  isNull?: boolean;
  lt?: A;
  lte?: A;
  neq?: A;
  nin?: A[];
}
interface StringComparisonExp extends BaseComparisonExp<string> {
  iLike?: string;
  like?: string;
  nILike?: string;
  nLike?: string[];
  nSimilar?: string;
  similar?: string;
}
type UUID = string;
type Timestamp = string;
interface UUIDComparisonExp extends BaseComparisonExp<UUID> {}
interface BooleanComparisonExp extends BaseComparisonExp<boolean> {}
interface TimestampComparisonExp extends BaseComparisonExp<Timestamp> {}
interface NumberComparisonExp extends BaseComparisonExp<number> {}
interface ReferenceComparisonExp extends BaseComparisonExp<number> {}

interface AndFilter {
  kind: 'and';
  filters: Filter[];
}
interface OrFilter {
  kind: 'or';
  filters: Filter[];
}
interface NotFilter {
  kind: 'not';
  filter: Filter;
}
interface StringFilter {
  kind: 'string';
  field?: string;
  compExp: StringComparisonExp;
}
interface NumberFilter {
  kind: 'number';
  field?: string;
  compExp: NumberComparisonExp;
}
interface DateFilter {
  kind: 'date';
  field?: string;
  compExp: TimestampComparisonExp;
}
interface TimeFilter {
  kind: 'time';
  field?: string;
  compExp: TimestampComparisonExp;
}
interface TimestampFilter {
  kind: 'timestamp';
  field?: string;
  compExp: TimestampComparisonExp;
}
interface BooleanFilter {
  kind: 'boolean';
  field?: string;
  compExp: BooleanComparisonExp;
}
// interface JsonFilter {
//   kind: 'json';
// }
interface UUIDFilter {
  kind: 'uuid';
  field?: string;
  compExp: UUIDComparisonExp;
}
interface ReferenceFilter {
  kind: 'reference';
  field?: string;
  compExp: ReferenceComparisonExp;
}
export type Filter =
  | AndFilter
  | OrFilter
  | NotFilter
  | StringFilter
  | NumberFilter
  | DateFilter
  | TimeFilter
  | TimestampFilter
  | BooleanFilter
  | UUIDFilter
  | ReferenceFilter;
