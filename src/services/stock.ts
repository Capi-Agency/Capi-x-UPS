export const getStock = async() =>{
    const response = await fetch('https://board.upstock.com.vn/getliststockdata/MBB,FPT,ACB,SHB,PVI');
    const data = await response.json();
    return data;
}