/**
 * Rapid Pass API
 * API docs for Rapid Pass
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SubscriptionDto } from './subscription-dto';
/**
*
*
* @export
* @interface PaginatedSubscriptionResponseDto
*/
export interface PaginatedSubscriptionResponseDto {
    /**
     * @type {Array<SubscriptionDto>}
     * @memberof PaginatedSubscriptionResponseDto
     */
    data: Array<SubscriptionDto>;
    /**
     * @type {number}
     * @memberof PaginatedSubscriptionResponseDto
     */
    total: number;
}