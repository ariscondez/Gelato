const content = document.getElementById('content');

// Botón Inventario
document.getElementById('inventoryBtn').onclick = () => {
    content.innerHTML = `
        <h2>Inventario</h2>
        <p>Muestra las cantidades de helados por sabor:</p>
        <ul>
            <li>Cítricos: 0</li>
            <li>Pie de limón: 0</li>
            <li>Cremosas tipo Magnum: 0</li>
        </ul>
    `;
};

// Botón Producción
document.getElementById('productionBtn').onclick = () => {
    content.innerHTML = `
        <h2>Producción diaria</h2>
        <p>Agregar helados producidos hoy:</p>
        <input type="number" id="prodCitrico" placeholder="Cítricos">
        <input type="number" id="prodPie" placeholder="Pie de limón">
        <input type="number" id="prodMagnum" placeholder="Cremosas tipo Magnum">
        <button onclick="saveProduction()">Guardar</button>
    `;
};

// Función para guardar producción (simulada)
function saveProduction() {
    const citrico = document.getElementById('prodCitrico').value || 0;
    const pie = document.getElementById('prodPie').value || 0;
    const magnum = document.getElementById('prodMagnum').value || 0;
    content.innerHTML = `<p>Producción guardada: Cítricos: ${citrico}, Pie de limón: ${pie}, Cremosas tipo Magnum: ${magnum}</p>`;
}

// Botón Ventas
document.getElementById('salesBtn').onclick = () => {
    content.innerHTML = `
        <h2>Ventas</h2>
        <p>Registrar ventas de hoy:</p>
        <input type="number" id="salesCitrico" placeholder="Cítricos">
        <input type="number" id="salesPie" placeholder="Pie de limón">
        <input type="number" id="salesMagnum" placeholder="Cremosas tipo Magnum">
        <button onclick="saveSales()">Guardar ventas</button>
    `;
};

// Función para guardar ventas (simulada)
function saveSales() {
    const citrico = document.getElementById('salesCitrico').value || 0;
    const pie = document.getElementById('salesPie').value || 0;
    const magnum = document.getElementById('salesMagnum').value || 0;
    content.innerHTML = `<p>Ventas registradas: Cítricos: ${citrico}, Pie de limón: ${pie}, Cremosas tipo Magnum: ${magnum}</p>`;
}

// Botón Reporte
document.getElementById('reportBtn').onclick = () => {
    content.innerHTML = `
        <h2>Reporte diario</h2>
        <p>Resumen de inventario, producción y ventas.</p>
        <p>(Aquí puedes mostrar los datos guardados si implementas almacenamiento real)</p>
    `;
};
