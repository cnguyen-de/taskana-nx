export class GetWorkbaskets {
  static readonly type = '[WORKBASKET] Get all workbaskets';
}

export class SelectWorkbasket {
  static readonly type = '[WORKBASKET] Select a workbasket';
  constructor(public workbasketId: string) {}
}
