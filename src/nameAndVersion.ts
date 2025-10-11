/**
 * Plugin name and version
 */

import { build } from "./environment"

/** Plugin name in human readable form */
export const pluginName = "Tiger Plugin Template"

/** Primary version designation */
const version : string = "0.0"

/**
 * 
 * @returns en empty string in case of production build, -dev suffix otherwise 
 */
function suffix(): string{
    if (build.isDevelopment) {
        return "-dev"
    }
    else {
        return ""
    }
}

/** plugin version with 'v' prefix */
export const pluginVersion = `v${version}${suffix()}`

