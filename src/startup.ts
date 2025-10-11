import { mainWindow } from "./mainWin";
import { pluginName } from "./nameAndVersion";

export function startup()
{
	// Write code here that should happen on startup of the plugin.


	// Register a menu item under the map icon:
	if (typeof ui !== "undefined")
	{
		ui.registerMenuItem(pluginName, () => mainWindow.open());
	}
}