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
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { CreateUserMerchantDto } from '../models';
import { MerchantDto } from '../models';
import { PaginatedOrderResponseDto } from '../models';
import { PaginatedPaymentResponseDto } from '../models';
import { PaginatedSubscriptionResponseDto } from '../models';
import { UpdateUserNameDto } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export declare const UsersApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create a new merchant
     * @param {CreateUserMerchantDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerCreateMerchant: (body: CreateUserMerchantDto, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get user's merchants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetMerchants: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get user orders
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetUserOrders: (page?: number, limit?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get user payments
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetUserPayments: (page?: number, limit?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get user subscriptions
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {boolean} [isActive] Active status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetUserSubscriptions: (page?: number, limit?: number, isActive?: boolean, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update user's name
     * @param {UpdateUserNameDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerUpdateUserName: (body: UpdateUserNameDto, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersApi - functional programming interface
 * @export
 */
export declare const UsersApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create a new merchant
     * @param {CreateUserMerchantDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerCreateMerchant(body: CreateUserMerchantDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MerchantDto>>>;
    /**
     *
     * @summary Get user's merchants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetMerchants(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<MerchantDto>>>>;
    /**
     *
     * @summary Get user orders
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetUserOrders(page?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PaginatedOrderResponseDto>>>;
    /**
     *
     * @summary Get user payments
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetUserPayments(page?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PaginatedPaymentResponseDto>>>;
    /**
     *
     * @summary Get user subscriptions
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {boolean} [isActive] Active status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetUserSubscriptions(page?: number, limit?: number, isActive?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PaginatedSubscriptionResponseDto>>>;
    /**
     *
     * @summary Update user's name
     * @param {UpdateUserNameDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerUpdateUserName(body: UpdateUserNameDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
};
/**
 * UsersApi - factory interface
 * @export
 */
export declare const UsersApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create a new merchant
     * @param {CreateUserMerchantDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerCreateMerchant(body: CreateUserMerchantDto, options?: AxiosRequestConfig): Promise<AxiosResponse<MerchantDto>>;
    /**
     *
     * @summary Get user's merchants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetMerchants(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<MerchantDto>>>;
    /**
     *
     * @summary Get user orders
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetUserOrders(page?: number, limit?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<PaginatedOrderResponseDto>>;
    /**
     *
     * @summary Get user payments
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetUserPayments(page?: number, limit?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<PaginatedPaymentResponseDto>>;
    /**
     *
     * @summary Get user subscriptions
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {boolean} [isActive] Active status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerGetUserSubscriptions(page?: number, limit?: number, isActive?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<PaginatedSubscriptionResponseDto>>;
    /**
     *
     * @summary Update user's name
     * @param {UpdateUserNameDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersControllerUpdateUserName(body: UpdateUserNameDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
};
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export declare class UsersApi extends BaseAPI {
    /**
     *
     * @summary Create a new merchant
     * @param {CreateUserMerchantDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    usersControllerCreateMerchant(body: CreateUserMerchantDto, options?: AxiosRequestConfig): Promise<AxiosResponse<MerchantDto>>;
    /**
     *
     * @summary Get user's merchants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    usersControllerGetMerchants(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<MerchantDto>>>;
    /**
     *
     * @summary Get user orders
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    usersControllerGetUserOrders(page?: number, limit?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<PaginatedOrderResponseDto>>;
    /**
     *
     * @summary Get user payments
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    usersControllerGetUserPayments(page?: number, limit?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<PaginatedPaymentResponseDto>>;
    /**
     *
     * @summary Get user subscriptions
     * @param {number} [page] Page number for pagination
     * @param {number} [limit] Number of items per page
     * @param {boolean} [isActive] Active status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    usersControllerGetUserSubscriptions(page?: number, limit?: number, isActive?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<PaginatedSubscriptionResponseDto>>;
    /**
     *
     * @summary Update user's name
     * @param {UpdateUserNameDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    usersControllerUpdateUserName(body: UpdateUserNameDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
}
