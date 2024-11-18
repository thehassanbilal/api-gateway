import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingAppService {
  getHello(): string {
    return 'Hello World from billing service!';
  }
}
