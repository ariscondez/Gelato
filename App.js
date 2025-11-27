const content = document.getElementById('content');

document.getElementById('inventoryBtn').onclick = ()=>{
    content.innerHTML = '<p>Inventario inicial, cantidades por sabor.</p>';
};
document.getElementById('productionBtn').onclick = ()=>{
    content.innerHTML = '<p>Agregar producción diaria de helados.</p>';
};
document.getElementById('salesBtn').onclick = ()=>{
    content.innerHTML = '<p>Registrar ventas y precios.</p>';
};
document.getElementById('reportBtn').onclick = ()=>{
    content.innerHTML = '<p>Reporte resumido de inventario, ventas y ganancias.</p>';
};
