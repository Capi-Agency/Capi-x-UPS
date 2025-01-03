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
        case 'BID':
            return 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam';
        case 'GAS':
            return 'Tổng Công ty Khí Việt Nam';
        case 'GVR':
            return 'Tập đoàn Công nghiệp Cao su Việt Nam';
        case 'HDB':
            return 'Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh';
        case 'HPG':
            return 'Công ty cổ phần Tập đoàn Hòa Phát';
        case 'MSN':
            return 'Công ty cổ phần Tập đoàn MaSan';
        case 'MWG':
            return 'Công ty cổ phần Đầu tư Thế giới di động';
        case 'PLX':
            return 'Tập đoàn Xăng dầu Petrolimex';
        case 'POW':
            return 'Công ty cổ phần Thủy điện 1';
        case 'SAB':
            return 'Tổng Công ty Cổ phần Bia - Rượu - Nước giải khát Sài Gòn';
        case 'SSI':
            return 'Công ty cổ phần Chứng khoán SSI';
        case 'SSB':
            return 'Ngân hàng TMCP Sài Gòn Thương Tín';
        case 'STB': 
            return 'Ngân hàng TMCP Sài Gòn Thương Tín';
        case 'TCB':
            return 'Ngân hàng TMCP Kỹ Thương Việt Nam';
        case 'VCB':
            return 'Ngân hàng TMCP Ngoại thương Việt Nam';
        case 'VIB':
            return 'Ngân hàng TMCP Quốc tế Việt Nam';
        case "BHN":
            return "Ngân hàng TMCP Bảo Việt";
        case "TPB":
            return "Ngân hàng TMCP Tiên Phong";
        case "VHM":
            return "Công ty cổ phần Vinhomes";
        case "VIC":
            return "Tập đoàn Vingroup";
        case "VNM":
            return "CTCP Sữa Việt Nam";
        case "VPB":
            return "Ngân hàng TMCP Việt Nam Thịnh Vượng";
        case "VRE":
            return "Công ty cổ phần Vincom Retail";
        case "VJC":
            return "Công ty cổ phần Hàng không VietJet";
        case "BVH":
            return "Tập đoàn Bảo Việt";
        case "CTG":
            return "Ngân ghàng TMCP Công Thương Việt Nam";
        default:
            return stock;
    }
}