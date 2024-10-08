"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDtoPaymentModelEnum = exports.OrderDtoStatusEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var OrderDtoStatusEnum;
(function (OrderDtoStatusEnum) {
    OrderDtoStatusEnum["PENDING"] = "PENDING";
    OrderDtoStatusEnum["ACTIVE"] = "ACTIVE";
    OrderDtoStatusEnum["COMPLETED"] = "COMPLETED";
    OrderDtoStatusEnum["CANCELLED"] = "CANCELLED";
    OrderDtoStatusEnum["FAILED"] = "FAILED";
})(OrderDtoStatusEnum = exports.OrderDtoStatusEnum || (exports.OrderDtoStatusEnum = {}));
/**
 * @export
 * @enum {string}
 */
var OrderDtoPaymentModelEnum;
(function (OrderDtoPaymentModelEnum) {
    OrderDtoPaymentModelEnum["ONETIME"] = "ONETIME";
    OrderDtoPaymentModelEnum["SUBSCRIPTION"] = "SUBSCRIPTION";
    OrderDtoPaymentModelEnum["LIFETIME"] = "LIFETIME";
})(OrderDtoPaymentModelEnum = exports.OrderDtoPaymentModelEnum || (exports.OrderDtoPaymentModelEnum = {}));
