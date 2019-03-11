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
    } else { ratioCell.innerHTML = (wins / (wins + losses)).toFixed(2)}
    gamesPlayedCell.innerHTML = wins + losses;
    mainsCell.innerHTML = mains;
}
   
window.onload = (function() {
    add('Jake H.', 4, 0, 'Mii Swordfighter, Mii Brawler, Young/Toon Link');

    add('Nathan', 3, 1, 'Incineroar, Mr. G&W');

    add('Leland', 2, 1, 'Roy');
    add('Teegan', 2, 1, 'Jigglypuff, Lucina');
    
    add('Deven', 1, 1, 'Piranha Plant');

    add('Aiden', 0, 1, 'Kirby');
    add('Jimmy', 0, 1, 'Cloud');
    add('Tyler', 0, 1, 'Pikachu');

    add('Andrew', 0, 0, 'Meta Knight');
    add('Ethan', 0, 0, 'Mario');
    add('Harry', 0, 0, 'Dark Pit');
    add('Jake S.', 0, 0, 'Ness, Sonic');
    add('Johnathan', 0, 0, 'R.O.B, Mr. G&W');
    add('Mahesh', 0, 0, 'Villager');
    add('Michael', 0, 0, 'King Dedede');
    add('Vincent', 0, 0, 'King Dedede');
});
