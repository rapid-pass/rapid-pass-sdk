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
import { RoleDto } from './role-dto';
/**
*
*
* @export
* @interface DiscordIntegrationDto
*/
export interface DiscordIntegrationDto {
    /**
     * @type {string}
     * @memberof DiscordIntegrationDto
     */
    id: string;
    /**
     * @type {string}
     * @memberof DiscordIntegrationDto
     */
    guildId: string;
    /**
     * @type {string}
     * @memberof DiscordIntegrationDto
     */
    guildName: string;
    /**
     * @type {string}
     * @memberof DiscordIntegrationDto
     */
    logChannel?: string | null;
    /**
     * @type {string}
     * @memberof DiscordIntegrationDto
     */
    pastDueRoleId?: string | null;
    /**
     * @type {Array<RoleDto>}
     * @memberof DiscordIntegrationDto
     */
    discordRoles?: Array<RoleDto>;
    /**
     * @type {string}
     * @memberof DiscordIntegrationDto
     */
    cancellationAction: DiscordIntegrationDtoCancellationActionEnum;
}
/**
 * @export
 * @enum {string}
 */
export declare enum DiscordIntegrationDtoCancellationActionEnum {
    NONE = "NONE",
    REMOVEROLE = "REMOVE_ROLE",
    REMOVEALLROLES = "REMOVE_ALL_ROLES",
    KICK = "KICK",
    BAN = "BAN"
}
