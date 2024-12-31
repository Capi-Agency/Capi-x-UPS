export const getStockName = (stock: string) => {
    switch (stock) {
        case 'MBB':
            return 'Ngân hàng TMCP Quân Đội';
        case 'FPT':
            return 'Công ty cổ phần viễn thông FPT';
        case 'ACB':
            return 'Ngân hàng TMCP Á Châu';
        case 'SHB':
            return 'Ngân hàng TMCP Sài Gòn - Hà Nội';
        case 'PVI':
            return 'Công ty cổ phần Bảo hiểm PVI';
        default:
            return '';
    }
}