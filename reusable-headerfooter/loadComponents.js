export function loadComponent(componentId, componentUrl) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        });
}
