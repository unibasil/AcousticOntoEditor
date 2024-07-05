function getData() {
    return Promise.all([
    fetch('/attribute_types/'),
    fetch('/attributes/'),
    fetch('/emtities/'),
    fetch('/emtity-fields/'),
    fetch('/objects/'),
    fetch('/object-field-values/')
    ])
}

getData().then((result) => {
    console.log(result.join());
})