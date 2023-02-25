async function main() {
    let balance;
    let address;

    fetch('https://api.ethplorer.io/getTopTokenHolders/0xdAC17F958D2ee523a2206206994597C13D831ec7?apiKey=freekey&limit=1%27')
        .then(data => {
        return data.json();
        })
        .then(post => {
        console.log(post);
    
    });
}

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });