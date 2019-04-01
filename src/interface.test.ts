
export interface Router {
  path: string;
  router: Router;
}

export interface Test {
  age?: number;
  name?: string;
  createAt?: Date;
}
