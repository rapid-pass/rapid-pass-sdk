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
* @interface CreateCheckoutDto
*/
export interface CreateCheckoutDto {
    /**
     * Indicates whether this is a good or a service
     *
     * @type {boolean}
     * @memberof CreateCheckoutDto
     * @example true
     */
    isProduct: boolean;
    /**
     * The quantity of the product (only applicable for goods)
     *
     * @type {number}
     * @memberof CreateCheckoutDto
     * @example 1
     */
    quantity?: number;
}