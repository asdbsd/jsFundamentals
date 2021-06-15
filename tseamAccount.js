function tseamAccount(accountGames) {
    let myGames = accountGames[0].split(' ');

    for(i = 1; i < accountGames.length; i++) {
        let command = accountGames[i].split(' ');
        let action = command[0];
        let game = command[1];

        switch(action) {
            case 'Install':
                if (myGames.includes(game)) {
                    continue;
                } else {
                    myGames.push(game);
                }
                break;

            case 'Uninstall': 
                if (myGames.includes(game)) {
                    myGames = myGames.filter(e => e !== game);
                } else {
                    continue;
                }
                break;

            case 'Update': 
                if (myGames.includes(game)) {
                    myGames = myGames.filter(e => e !== game);
                    myGames.push(game);
                } else {
                    continue;
                }
                break;
                
            case 'Expansion': 
                expansion = game.split('-');

                if (myGames.includes(expansion[0])) {
                    let gameIndex = myGames.indexOf(expansion[0]);
                    myGames.splice(gameIndex + 1, 0, `${expansion[0]}:${expansion[1]}`);
                } else {
                    continue;
                }
                break;
        }

    }

    console.log(myGames.join(' '));
}


tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)