"use client"


import { contractAbi, contractAddress } from '@/utils/constants'
import { BN } from 'bn.js'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'

const getEthterumContract = () => {
    let transactionContract;
    if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = provider.getSigner()
        transactionContract = new ethers.Contract(contractAddress, contractAbi, signer)
    }

    return transactionContract;
}


const Products = () => {

   const [currentAccount, setCurrentAccount] = useState('')

   const globalRec = "0x21dffC109a6b396D8a352ED8531873D7dAcaa895"

   const products = [
      {
        id: 1,
        name: "Biljka",
        value: ethers.parseEther('0.0003'),
        price: '0.0003'
      },

      {
        id: 2,
        name: "Travuljina",
        value: ethers.parseEther('0.005'),
        price: '0.005'
      },

      {
        id: 3,
        name: "Vutra",
        value: ethers.parseEther('0.05'),
        price: '0.05'
      }
   ]

   const [boughtProducts, setBoughtProducts] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    } else {
      return [];
    }
  });

    const getCurrentWallet = async() => {
      if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
        try {
          //Meta mask installed
          const accounts = await window.ethereum.request({method: "eth_accounts"});
          if(accounts.length > 0) {
            console.log('account connected on home page' + accounts[0])
            setCurrentAccount(accounts[0])
            
          } else {
            console.log('Connect to metamask using the connect the wallet button')
          }
        
        } catch (error) {
          // Metamask not installed
          console.log(error)
        }
      }
    }

    useEffect(() => {
      getCurrentWallet()
    }, [currentAccount])
    

    const buyItem = async(item) => {
      try {
        const transactionContract = getEthterumContract()
        const parsedAmount = ethers.parseEther(item.price)
        const parsedAmountBN = new BN(parsedAmount, 10)
        
        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            from: currentAccount,
            to: globalRec,
            value: parsedAmountBN.toString(16)
          }]
        })

        const updatedBoughtProducts = [...boughtProducts, item]
        setBoughtProducts(updatedBoughtProducts)
        localStorage.setItem('products', JSON.stringify(boughtProducts))


      } catch (error) {
        console.log(error)
        alert(error)
      }
    }


   


  return (
    <div className='w-full py-12'>
        <div className='container mx-auto flex justify-center items-center gap-5 flex-wrap'>
          {products.map((item, index) => {
            return(
              <div key={index} className='flex justify-center items-center flex-col border-2 border-gray-500 rounded-2xl'>
                <img className='rounded-2xl rounded-b-none border-gray-500 border-b-2' src={`/assets/plant`+ `${item.id}` + ".png"}/>
                <p className='text-[24px]'>{item.name}</p>
                <p>Cost: {item.price} ETH</p>
                <button onClick={() => buyItem(item)}  className='bg-green-500 my-2 px-8 py-2 rounded-xl'>Buy</button>
              </div>
            )
          })}
        </div>
       
       <div className='flex flex-col justify-center items-center mt-12'>
        <h1 className='text-[24px] uppercase font-black'>Bought Products</h1>
          <div className='flex flex-wrap justify-center items-center gap-8 mt-4'>
            {boughtProducts.length > 0 ? boughtProducts.map((item, index) => {
          return(
            <div key={index} className='w-[150px] h-[150px] rounded-2xl border-2 p-5 flex flex-col justify-center items-center border-green-500'>
              <h1>ItemName: {item.name}</h1>
              <h1>ItemPrice: {item.price}</h1>
            </div>
          )
        }) : <p>No Items bought yet</p>}
          </div>
       </div>
    </div>
  )
}

export default Products