import PopupTemplate from "@arcgis/core/PopupTemplate";

export default function EntitiesPopupTemplate() {
    return new PopupTemplate({
        title: "Entity: {ENT_NAME}",
        content: "<table class='esri-widget__table'><tbody>" +
            "<tr><td>ENTITY_ID:</td> <td>{ENTITY_ID}</td></tr>" +
            "<tr><td>ENTITY_NAME:</td> <td>{ENT_NAME}</td></tr>" +
            "<tr><td>RFPG_NUM:</td> <td>{RFPG_NUM}</td></tr>" +
            "<tr><td>RFPG_NAME:</td> <td>{RFPG_NAME}</td></tr>" +
            "<tr><td>POLSUB_FLG:</td> <td>{POLSUB_FLG}</td></tr>" +
            "<tr><td>ENT_TYPE:</td> <td>{ENT_TYPE}</td></tr>" +
            "<tr><td>ACTIVE:</td> <td>{ACTIVE} </td></tr>" +
            "<tr><td>FIPS:</td> <td>{FIPS}</td></tr>" +
            "<tr><td>CID:</td> <td>{CID}</td></tr>" +
            "<tr><td>PHOLD_REMOVED:</td> <td>{PHOLD_REMOVED}</td></tr>" +
            "</tbody></table>"
    })
}