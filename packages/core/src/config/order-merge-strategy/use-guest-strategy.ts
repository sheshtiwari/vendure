import { OrderLine } from '../../entity/order-line/order-line.entity';
import { Order } from '../../entity/order/order.entity';

import { OrderMergeStrategy } from './order-merge-strategy';

/**
 * @description
 * Any existing order is discarded and the guest order is set as the active order.
 *
 * @docsCategory orders
 */
export class UseGuestStrategy implements OrderMergeStrategy {
    merge(guestOrder: Order, existingOrder: Order): OrderLine[] {
        return guestOrder.lines.slice();
    }
}
