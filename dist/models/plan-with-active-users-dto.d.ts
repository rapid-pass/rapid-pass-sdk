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
/**
*
*
* @export
* @interface PlanWithActiveUsersDto
*/
export interface PlanWithActiveUsersDto {
    /**
     * @type {number}
     * @memberof PlanWithActiveUsersDto
     */
    price: number;
    /**
     * @type {number}
     * @memberof PlanWithActiveUsersDto
     */
    initialPrice: number;
    /**
     * @type {number}
     * @memberof PlanWithActiveUsersDto
     */
    durationDays: number;
    /**
     * @type {number}
     * @memberof PlanWithActiveUsersDto
     */
    freeDays: number;
    /**
     * @type {boolean}
     * @memberof PlanWithActiveUsersDto
     */
    oncePerUser: boolean;
    /**
     * @type {string}
     * @memberof PlanWithActiveUsersDto
     */
    paymentModel: PlanWithActiveUsersDtoPaymentModelEnum;
    /**
     * @type {Array<string>}
     * @memberof PlanWithActiveUsersDto
     */
    paymentTypes: Array<PlanWithActiveUsersDtoPaymentTypesEnum>;
    /**
     * @type {string}
     * @memberof PlanWithActiveUsersDto
     */
    id: string;
    /**
     * @type {number}
     * @memberof PlanWithActiveUsersDto
     */
    activeUsers: number;
}
/**
 * @export
 * @enum {string}
 */
export declare enum PlanWithActiveUsersDtoPaymentModelEnum {
    ONETIME = "ONETIME",
    SUBSCRIPTION = "SUBSCRIPTION",
    LIFETIME = "LIFETIME"
}
/**
 * @export
 * @enum {string}
 */
export declare enum PlanWithActiveUsersDtoPaymentTypesEnum {
    STRIPE = "STRIPE",
    PAYPAL = "PAYPAL",
    PAYPALFNF = "PAYPAL_FNF",
    CRYPTO = "CRYPTO",
    CASHAPP = "CASHAPP",
    VENMO = "VENMO",
    ZELLE = "ZELLE"
}
