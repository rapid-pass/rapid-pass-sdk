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
exports.PaymentType = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var PaymentType;
(function (PaymentType) {
    PaymentType["STRIPE"] = "STRIPE";
    PaymentType["PAYPAL"] = "PAYPAL";
    PaymentType["PAYPALFNF"] = "PAYPAL_FNF";
    PaymentType["CRYPTO"] = "CRYPTO";
    PaymentType["CASHAPP"] = "CASHAPP";
    PaymentType["VENMO"] = "VENMO";
    PaymentType["ZELLE"] = "ZELLE";
})(PaymentType = exports.PaymentType || (exports.PaymentType = {}));
