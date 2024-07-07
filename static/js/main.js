
let ontoData = {}

function getData() {
    return Promise.all([
    fetch('/attribute-types/').then((a) => a.json()),
    fetch('/attributes/'),
    fetch('/entities/'),
    fetch('/entity-fields/'),
    fetch('/objects/'),
    fetch('/object-field-values/')
    ])
}

getData().then((result) => {
    ontoData = {
        attributeTypes: result[0],
        attributes: result[1],
        entities: result[2],
        entityFields: result[3],
        objects: result[4],
        objectFields: result[5]
    }
})

function createDiagramData(data) {

}