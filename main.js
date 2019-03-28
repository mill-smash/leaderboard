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
    add('Jake H.', 7, 0, 'Mii Swordfighter, Mii Brawler, Young/Toon Link');
    add('Nathan', 3, 4, 'Incineroar, Mr. G&W');

    add('Leland', 5, 1, 'Roy, Yoshi, Link');
    add('Teegan', 4, 2, 'Jigglypuff');

    add('Deven', 2, 3, 'ROB');
    
    add('Ian', 3, 1, 'Bowser');
    add('Danny', 2, 2, 'Little Mac');
    add('Tyler', 1, 3, 'Pikachu');

    add('Vincent', 3, 0, 'King Dedede, Kirby, DK, Charizard');

    add('Joshua', 3, 0, 'Piranha Plant');

    add('Aiden', 1, 1, 'Kirby, Bowser');
    add('Thomas', 1, 1, 'Zelda'); 
    add('Jake S.', 1, 1, 'Ness, Sonic');
    add('Ethan', 0, 2, 'Lucina');
    add('Mudi', 0, 2, 'Jigglypuff');
    add('Harry', 0, 2, 'Dark Pit');

    add('Jimmy', 0, 1, 'Cloud');
    add('George', 0, 1, 'Donkey Kong');

    //add('Andrew', 0, 0, 'Meta Knight');
    //add('Johnathan', 0, 0, 'R.O.B, Mr. G&W');
    //add('Mahesh', 0, 0, 'Villager');
    //add('Michael', 0, 0, 'King Dedede');
});
