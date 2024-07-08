
let ontoData = {}

const accordionItems = {
    'Entities': 'entities',
    // 'Entity fields': 'entityFields',
    'Objects': 'objects',
    'Attributes': 'attributes',
    'Attribute types': 'attributeTypes',
}

function getData() {
    return Promise.all([
    fetch('/attribute-types/').then((a) => a.json()),
    fetch('/attributes/').then((a) => a.json()),
    fetch('/entities/').then((a) => a.json()),
    fetch('/entity-fields/').then((a) => a.json()),
    fetch('/objects/').then((a) => a.json()),
    fetch('/object-field-values/').then((a) => a.json())
    ])
}

function createAccordionContent() {
    let body = ''
    let collapsable = 'show'
    for (const [key, value] of Object.entries(accordionItems)) {
        // console.log(`${key}: ${value}`);
        let itemContent = `
            <div class="accordion-item">
                <div class="accordion-header" id="heading${value}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse${value}" aria-expanded="false"
                            aria-controls="collapse${value}">
                        ${key}
                    </button>
                </div>
                <div id="collapse${value}" class="accordion-collapse ${collapsable}" aria-labelledby="heading${value}">
                    <div class="accordion-body ">
        `
        collapsable = collapsable ==='show' ? 'collapse': collapsable;
        let itemData = ontoData[value]
        let itemTable = '<table class="table table-bordered .accordion-item-body"><tbody>'
        for (const [pk, obj] of Object.entries(itemData)) {
            itemTable += `                                        
                <tr>
                    <td style="width: 90%">${obj.fields.name}</td>
                    <td>
                        <button type="button" class="btn btn-sm btn-outline-info edit-button" 
                        data-bs-toggle="modal" data-bs-target="#edit-item-modal">
                            <i class="bi-pencil-fill"></i>
                        </button>
                    </td>
                    <td><button type="button" class="btn btn-sm btn-outline-danger"><i class="bi-x"></i></button></td>
                </tr>
            `
        }
        itemTable += '</tbody></table>'
        itemContent += itemTable
        itemContent += '</div></div></div>'
        body += itemContent
    }
    return body
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
    .then(() => createAccordionContent())
    .then((content) => {
        const accordion= document.querySelector('#left-data-list')
        if (accordion) {
            accordion.innerHTML = content
        }
    })
    .then(() => {
        // initGoJSDiagram();
    })

function createDiagramData(data) {

}