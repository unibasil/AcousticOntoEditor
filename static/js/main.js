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
    console.log(result[0]);
})