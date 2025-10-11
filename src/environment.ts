/**
 * Build environment observation
 * 
 * this depends on @rollup/plugin-replace replacing contents 
 * of the first constant at roll-up time 
 * see rollup.config.js around line 74 for definition
 */

/**
 * Based on OpenRCT2-ProxyPather and OpenRCT2-RideVehicleEditor by Basssiiie, 
 * https://github.com/Basssiiie/OpenRCT2-ProxyPather
 * https://github.com/Basssiiie/OpenRCT2-RideVehicleEditor 
 * Originally licensed under MIT License
 * see licenses folder
 */


/**
 * Returns the build configuration of the plugin.
 */
const buildConfiguration = "__BUILD_CONFIGURATION__";

/**
 * Build type definition
 */
export const build = {
    /**
     * Returns true if the current build is a production build.
     */
    // @ts-expect-error: boolean expression is affected by build variable replacement.
    isProduction: (buildConfiguration === "production"),


    /**
     * Returns true if the current build is a production build.
     */
    // @ts-expect-error: boolean expression is affected by build variable replacement.
    isDevelopment: (buildConfiguration === "development"),

}

/**
 * Returns true if the player is in a multiplayer server, or false if it is a singleplayer game.
 */
export function isMultiplayer(): boolean
{
	return (network.mode !== "none");
}

/**
 * Returns true if this instance of plugin is loaded by multiplayer server.
 */
export function isServer(): boolean {
    return (network.mode === "server")
}

