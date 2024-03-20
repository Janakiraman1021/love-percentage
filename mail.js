let names = [];

function sendm() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === '' || name2 === '') {
        document.getElementById('error').classList.remove('hidden');
        return;
    }

    document.getElementById('error').classList.add('hidden');

    // Update names array
    names.push({ name1, name2 });

    // Store the names array in localStorage
    localStorage.setItem('names', JSON.stringify(names));

    console.log('Names array:', names);
}
