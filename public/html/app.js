document.getElementById('arquitetura-e-design-link').addEventListener('click', function (event) {
    event.preventDefault();
    showOnlySelectedArea('bootstrap-example-arquitetura');
});

document.getElementById('ciencias-juridicas-link').addEventListener('click', function (event) {
    event.preventDefault();
    showOnlySelectedArea('bootstrap-example-juridico');
});

document.getElementById('ciencias-humanas-link').addEventListener('click', function (event) {
    event.preventDefault();
    showOnlySelectedArea('bootstrap-example-humanas');
});

document.getElementById('educacao-link').addEventListener('click', function (event) {
    event.preventDefault();
    showOnlySelectedArea('bootstrap-example-educacao');
});

document.getElementById('engenharia-link').addEventListener('click', function (event) {
    event.preventDefault();
    showOnlySelectedArea('bootstrap-example-engenharia');
});

document.getElementById('negocios-link').addEventListener('click', function (event) {
    event.preventDefault();
    showOnlySelectedArea('bootstrap-example-negocios');
});

document.getElementById('saude-link').addEventListener('click', function (event) {
    event.preventDefault();
    showOnlySelectedArea('bootstrap-example-saude');
});

document.getElementById('saude-link').addEventListener('click', function (event) {
    event.preventDefault();
    showOnlySelectedArea('bootstrap-example-saude');
});

document.getElementById('tecnologia-link').addEventListener('click', function (event) {
    event.preventDefault();
    showOnlySelectedArea('bootstrap-example-tecnologia');
});

document.getElementById('todos-link').addEventListener('click', function (event) {
    event.preventDefault();
    showAllAreas();
});


function showOnlySelectedArea(areaId) {
    const areaContents = document.querySelectorAll('.area-content');
    areaContents.forEach(content => content.style.display = 'none');
    document.getElementById(areaId).style.display = 'block';
}

function showAllAreas() {
    const areaContents = document.querySelectorAll('.area-content');
    areaContents.forEach(content => content.style.display = 'block');
}


// JavaScript para abrir/fechar o sidebar no clique do ícone do menu hambúrguer
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});
