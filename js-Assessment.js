/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT ({name, description, founder, price, owner}) {
    const NFT = {
        "name": name,
        "description": description,
        "founder": founder,
        "price": price,
        "owner": owner
    }
    NFTs.push(NFT);
    console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    NFTs.forEach((nft, index) => {
        console.log(`\nID: \t\t\t${index + 1}`);
        console.log(`Name: \t\t\t${nft.name}`);
        console.log(`Description: \t${nft.description}`);
        console.log(`Founder: \t\t${nft.founder}`);
        console.log(`Price: \t\t${nft.price}`);
        console.log(`Owner: \t${nft.owner}`);
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log( "\n" + NFTs["length"]);
}

// call your functions below this line
mintNFT({
    name: "Crypto Gem",
    description: "A rare digital gemstone with unique properties.EtherArt.",
    founder: "0xAbCdEf...",
    price: "2500",
    owner:  "Rahul Goswami"
});
mintNFT({
    name: " EtherArt Collection - Sunset",
    description: " A beautiful digital artwork capturing a mesmerizing sunset.PixelPalace",
    founder: "0x123456... ",
    price: "5600",
    owner:  "Akshat Singh"
});
mintNFT({
    name: " DigiDoodles - Cat",
    description: "Explore the majestic PixelPalace, a digital castle created with intricate pixel art.DigiDoodles.",
    founder: "Future Forge",
    price: "Epic",
    owner:  "2025"
});
mintNFT({
    name: " NiftyNugget - Gold",
    description: "Rare digital nugget crafted from pure gold, a valuable addition to any collection.",
    founder: "Celestial Artisans",
    price: "Epic",
    owner:  "2022"
});
listNFTs();
getTotalSupply();
