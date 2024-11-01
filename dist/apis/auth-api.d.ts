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
import { AccessTokenResponseDto } from '../models';
import { Enable2FAResponseDto } from '../models';
import { RefreshTokenDto } from '../models';
import { RequestOtpDTO } from '../models';
import { SignInResponseDto } from '../models';
import { TwoFARequestDto } from '../models';
import { Verify2FARequestDto } from '../models';
import { VerifyOtpDTO } from '../models';
import { VerifyUserDTO } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export declare const AuthApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Disable 2FA for user
     * @param {TwoFARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerDisable2FA: (body: TwoFARequestDto, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Emable user 2fa QR code
     * @param {TwoFARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerEnable2FA: (body: TwoFARequestDto, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Generate user 2fa QR code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerGenerate2FA: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Login VIA Discord OAuth
     * @param {string} code
     * @param {string} merchantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerLoginDiscord: (code: string, merchantId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get a new access token
     * @param {RefreshTokenDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerRefreshAccess: (body: RefreshTokenDto, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Request a OTP
     * @param {RequestOtpDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn: (body: RequestOtpDTO, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Verify user status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerify: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Verify user 2fa QR code
     * @param {Verify2FARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerify2FA: (body: Verify2FARequestDto, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Verify user discord status
     * @param {string} discordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerifyDiscord: (discordId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Verify OTP
     * @param {VerifyOtpDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerifyOtp: (body: VerifyOtpDTO, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AuthApi - functional programming interface
 * @export
 */
export declare const AuthApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Disable 2FA for user
     * @param {TwoFARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerDisable2FA(body: TwoFARequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Emable user 2fa QR code
     * @param {TwoFARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerEnable2FA(body: TwoFARequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Enable2FAResponseDto>>>;
    /**
     *
     * @summary Generate user 2fa QR code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerGenerate2FA(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Enable2FAResponseDto>>>;
    /**
     *
     * @summary Login VIA Discord OAuth
     * @param {string} code
     * @param {string} merchantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerLoginDiscord(code: string, merchantId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignInResponseDto>>>;
    /**
     *
     * @summary Get a new access token
     * @param {RefreshTokenDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerRefreshAccess(body: RefreshTokenDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AccessTokenResponseDto>>>;
    /**
     *
     * @summary Request a OTP
     * @param {RequestOtpDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn(body: RequestOtpDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     *
     * @summary Verify user status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerify(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VerifyUserDTO>>>;
    /**
     *
     * @summary Verify user 2fa QR code
     * @param {Verify2FARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerify2FA(body: Verify2FARequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignInResponseDto>>>;
    /**
     *
     * @summary Verify user discord status
     * @param {string} discordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerifyDiscord(discordId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>>;
    /**
     *
     * @summary Verify OTP
     * @param {VerifyOtpDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerifyOtp(body: VerifyOtpDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignInResponseDto>>>;
};
/**
 * AuthApi - factory interface
 * @export
 */
export declare const AuthApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Disable 2FA for user
     * @param {TwoFARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerDisable2FA(body: TwoFARequestDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Emable user 2fa QR code
     * @param {TwoFARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerEnable2FA(body: TwoFARequestDto, options?: AxiosRequestConfig): Promise<AxiosResponse<Enable2FAResponseDto>>;
    /**
     *
     * @summary Generate user 2fa QR code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerGenerate2FA(options?: AxiosRequestConfig): Promise<AxiosResponse<Enable2FAResponseDto>>;
    /**
     *
     * @summary Login VIA Discord OAuth
     * @param {string} code
     * @param {string} merchantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerLoginDiscord(code: string, merchantId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<SignInResponseDto>>;
    /**
     *
     * @summary Get a new access token
     * @param {RefreshTokenDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerRefreshAccess(body: RefreshTokenDto, options?: AxiosRequestConfig): Promise<AxiosResponse<AccessTokenResponseDto>>;
    /**
     *
     * @summary Request a OTP
     * @param {RequestOtpDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn(body: RequestOtpDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Verify user status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerify(options?: AxiosRequestConfig): Promise<AxiosResponse<VerifyUserDTO>>;
    /**
     *
     * @summary Verify user 2fa QR code
     * @param {Verify2FARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerify2FA(body: Verify2FARequestDto, options?: AxiosRequestConfig): Promise<AxiosResponse<SignInResponseDto>>;
    /**
     *
     * @summary Verify user discord status
     * @param {string} discordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerifyDiscord(discordId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>>;
    /**
     *
     * @summary Verify OTP
     * @param {VerifyOtpDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerVerifyOtp(body: VerifyOtpDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<SignInResponseDto>>;
};
/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export declare class AuthApi extends BaseAPI {
    /**
     *
     * @summary Disable 2FA for user
     * @param {TwoFARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerDisable2FA(body: TwoFARequestDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Emable user 2fa QR code
     * @param {TwoFARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerEnable2FA(body: TwoFARequestDto, options?: AxiosRequestConfig): Promise<AxiosResponse<Enable2FAResponseDto>>;
    /**
     *
     * @summary Generate user 2fa QR code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerGenerate2FA(options?: AxiosRequestConfig): Promise<AxiosResponse<Enable2FAResponseDto>>;
    /**
     *
     * @summary Login VIA Discord OAuth
     * @param {string} code
     * @param {string} merchantId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerLoginDiscord(code: string, merchantId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<SignInResponseDto>>;
    /**
     *
     * @summary Get a new access token
     * @param {RefreshTokenDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerRefreshAccess(body: RefreshTokenDto, options?: AxiosRequestConfig): Promise<AxiosResponse<AccessTokenResponseDto>>;
    /**
     *
     * @summary Request a OTP
     * @param {RequestOtpDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerSignIn(body: RequestOtpDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     *
     * @summary Verify user status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerVerify(options?: AxiosRequestConfig): Promise<AxiosResponse<VerifyUserDTO>>;
    /**
     *
     * @summary Verify user 2fa QR code
     * @param {Verify2FARequestDto} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerVerify2FA(body: Verify2FARequestDto, options?: AxiosRequestConfig): Promise<AxiosResponse<SignInResponseDto>>;
    /**
     *
     * @summary Verify user discord status
     * @param {string} discordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerVerifyDiscord(discordId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>>;
    /**
     *
     * @summary Verify OTP
     * @param {VerifyOtpDTO} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authControllerVerifyOtp(body: VerifyOtpDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<SignInResponseDto>>;
}
