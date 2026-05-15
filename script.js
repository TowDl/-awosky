fetch('https://sheetdb.io/api/v1/ubdjebp7v713i')
    .then(response => response.json())
    .then(data => {

        let html = '';
        data.forEach(user => {
            html += `
                <div class="jugador">
                    <span>${user.TOP}</span>
                    <span>${user.NOMBRE}</span>
                    <span>${user.N}</span>
                    <span>${user.DANO}</span>
                </div>
            `;
        });
        document.getElementById('ranking').innerHTML = html;
    });