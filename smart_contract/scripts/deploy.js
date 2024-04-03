const main = async() => {
    const BuyItem = await hre.ethers.getContractFactory("BuyItem")
    const buyitem = await BuyItem.deploy()

    await buyitem.deployed();

    console.log('Deployed to:', buyitem.address)
}


const runMain = async() => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()