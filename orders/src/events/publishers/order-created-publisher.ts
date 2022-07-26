import { Publisher, OrderCreatedEvent, Subjects } from "@cjztickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}