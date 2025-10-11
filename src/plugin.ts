/// <reference path="../lib/openrct2.d.ts" />

import { startup } from "./startup";

registerPlugin({
	name: "Name of your plugin",
	version: "1.0",
	authors: [ "Your name" ],
	type: "remote",
	licence: "MIT",
/**
	 * This field determines which OpenRCT2 API version to use. 
	 *
	 * API version 110 starts at OpenRCT2 0.4.25 (released 2025-08-03) and is know to go up to 0.4.27
	 * at the moment of writing in current development at commit 
	 * 310056b71c4b60101f9f557037352cd7cf6a66b8 as of 8th of (spook)October 2025
	**/
	targetApiVersion: 110,
	main: startup,
});