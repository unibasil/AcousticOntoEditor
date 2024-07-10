
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
        if (key === 'entityFields' || key === 'objectFieldValues') {
            continue;
        }
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
                        <button type="button" class="btn btn-sm btn-outline-info" 
                                data-bs-toggle="modal" data-bs-target="#edit-item-modal">
                            <i class="bi-pencil-fill"></i>
                        </button>
                    </td>
                    <td><button type="button" class="btn btn-sm btn-outline-danger"
                                data-bs-toggle="modal" data-bs-target="#delete-item-modal"><i class="bi-x"></i></button></td>
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
        objectFieldValues: result[5]
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

function createDiagram() {
    let nodes = [];
    let links = [];
    for (const [key, item] of Object.entries(ontoData.entities)) {
        const nodeKey = +item.pk + 1000;
        const props = [];
        for(const [k, v] of Object.entries(ontoData.entityFields)) {
            console.info(item.pk, v.fields.id_entity);
            if (+item.pk === +v.fields.id_entity) {
                const id_attr = +v.fields.id_attribute;
                for (const [k2, v2] of Object.entries(ontoData.attributes)) {
                    if (+v2.pk === +id_attr) {
                        props.push({
                            name: v2.fields.name,
                            visibility: 'public'
                        })
                    }
                }
            }
        }
        nodes.push({
            key: nodeKey,
            name: item.fields.name,
            properties: props
        });
    }
    for (const [key, item] of Object.entries(ontoData.objects)) {
        const objectKey = +item.pk + 2000;
        const classKey = +item.fields.id_entity + 1000;
        nodes.push({
            key: objectKey,
            name: item.fields.name
        });
        links.push({
            from: objectKey,
            to: classKey,
            relationship: "Realization"
        })
    }
    // for (const [key, item] of Object.entries(ontoData.attributes)) {
    //     nodes.push({
    //         key: +item.pk + 3000,
    //         name: item.fields.name
    //     });
    // }
    initGoJSDiagram(nodes, links)
}


function makeExport() {
    
}