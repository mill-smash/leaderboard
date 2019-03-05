function add(name, wins, losses, mains) {
    let table = document.getElementById('leaderboard');
    let newRow = table.insertRow(-1);

    // Create new cells for the entry
    // name, wins/losses, w/l ratio, games played, character mains
    let nameCell = newRow.insertCell(0);
    let wlCell = newRow.insertCell(1);
    let ratioCell = newRow.insertCell(2);
    let gamesPlayedCell = newRow.insertCell(3);
    let mainsCell = newRow.insertCell(4);

    nameCell.innerHTML = name;
    wlCell.innerHTML = wins + "/" + losses;
    if (losses === 0 && wins === 0) {
        ratioCell.innerHTML = 0;
    } else { ratioCell.innerHTML = (wins / (wins + losses)).toFixed(1)}
    gamesPlayedCell.innerHTML = wins + losses;
    mainsCell.innerHTML = mains;
}
   
window.onload = (function() {
    add('Jacob', 2, 0, 'Mii Brawler');
    add('Teegan', 2, 0, 'Jigglypuff');
    add('Deven', 1, 0, 'Piranha Plant');
    add('Leland', 1, 0, 'Roy');
    add('Nathan', 1, 0, 'Incineroar, Mr. G&W');
    add('Aiden', 0, 1, 'Kirby');
    add('Jimmy', 0, 1, 'Cloud');
    add('Tyler', 0, 1, 'Pikachu');
    add('Johnathan', 0, 0, 'R.O.B, Mr. G&W');
    add('Vincent', 0, 0, 'King Dedede');
    add('Harry', 0, 0, 'Dark Pit');
    add('Andrew', 0, 0, 'Meta Knight');
});
