
const dogs = [
    {
        "nome": "Labrador",
        "raça": "Labrador Retriever",
        "tamanho": "Médio",
        "características": "Amigável, inteligente, leal"
    },
    {
        "nome": "Bulldog",
        "raça": "Bulldog Inglês",
        "tamanho": "Pequeno",
        "características": "Calmo, corajoso, preguiçoso"
    },
    {
        "nome": "Poodle",
        "raça": "Poodle",
        "tamanho": "Pequeno a Médio",
        "características": "Inteligente, ativo, sociável"
    },
    {
        "nome": "Pastor Alemão",
        "raça": "Pastor Alemão",
        "tamanho": "Grande",
        "características": "Leal, protetor, inteligente"
    }
];


function displayResults(filteredDogs) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (filteredDogs.length === 0) {
        resultDiv.innerHTML = '<p>Nenhum cachorro encontrado.</p>';
        resultDiv.style.display = 'block';
        return;
    }

    filteredDogs.forEach(dog => {
        const dogDiv = document.createElement('div');
        dogDiv.classList.add('dog-info');
        dogDiv.innerHTML = `
            <h3>${dog.nome}</h3>
            <p><strong>Raça:</strong> ${dog.raça}</p>
            <p><strong>Tamanho:</strong> ${dog.tamanho}</p>
            <p><strong>Características:</strong> ${dog.características}</p>
        `;
        resultDiv.appendChild(dogDiv);
    });

    resultDiv.style.display = 'block';
}


function searchDogs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    
    const filteredDogs = dogs.filter(dog =>
        dog.nome.toLowerCase().includes(searchInput) ||
        dog.raça.toLowerCase().includes(searchInput)
    );

    
    displayResults(filteredDogs);
}


document.getElementById('searchButton').addEventListener('click', searchDogs);


document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchDogs();
    }
});
