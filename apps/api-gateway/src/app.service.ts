import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './app.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingProxyClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World from gateway app service!';
  }

  createOrderEvent(payload: CreateOrderDto) {
    this.billingProxyClient.emit(
      'order_created',
      new OrderCreatedEvent('123', payload.userId, payload.price),
    );
  }
}
