import { Workbasket } from './workbasket';
import { Links, Pagination } from '@taskana/shared/data-access';

export interface WorkbasketRepresentation {
  workbaskets?: Workbasket[];
  _links?: Links;
  page?: Pagination;
}
