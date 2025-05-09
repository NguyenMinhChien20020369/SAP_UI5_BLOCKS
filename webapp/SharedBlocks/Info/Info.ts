import BlockBase from "sap/uxap/BlockBase"
import ViewType from "sap/ui/core/mvc/ViewType"

/**
 * @namespace ui5.blocks
 */
export default class Info extends BlockBase {

    public static metadata = {
        "views": {
            "Collapsed": {
                "viewName": "ui5.blocks.SharedBlocks.Info.Info",
                "type": ViewType.XML
            },
            "Expanded": {
                "viewName": "ui5.blocks.SharedBlocks.Info.Info",
                "type": ViewType.XML
            }
        }
    };
}