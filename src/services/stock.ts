export const getStock = async() =>{
    const response = await fetch('https://board.upstock.com.vn/getliststockdata/MBB,FPT,ACB,SHB,PVI,BID,BVH,CTG,GAS,GVR,HDB,HPG,MSN,MWG,PLX,POW,SAB,SSI,SSB,STB,TCB,TPB,VCB,VHM,VIB,VIC,VNM,VPB,VRE');
    const data = await response.json();
    return data;
}