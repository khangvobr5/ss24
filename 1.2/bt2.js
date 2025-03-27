let mangSoNguyen = [];
function hienMenu() {
    console.log("\n=== MENU ===");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
    console.log("7. Thoát chương trình");
}
function nhapMang() {
    var doDai = Number(prompt("Nhập độ dài mảng: "));
    mangSoNguyen = [];
    for (let i = 0; i < doDai; i++) {
        let so = Number(prompt(`Nhập phần tử thứ ${i + 1}: `));
        mangSoNguyen.push(so);
    }
    console.log("Đã nhập mảng thành công!");
}
function hienThiMang() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
    } else {
        console.log("Mảng hiện tại:", mangSoNguyen);
    }
}
function timChanLe() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let soChan = [];
    let soLe = [];
    for (let i=0;i<mangSoNguyen.length;i++){
        if (mangSoNguyen[i] % 2 === 0) {
            soChan.push(mangSoNguyen[i]);
        } else {
            soLe.push(mangSoNguyen[i]);
        }
    }
    console.log("Các số chẵn:", soChan);
    console.log("Các số lẻ:", soLe);
}
function tinhTrungBinhCong() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let tong = 0;
    for(let i=0;i<mangSoNguyen.length;i++){
        tong += mangSoNguyen[i];
    }
    let trungBinh = parseFloat(tong / mangSoNguyen.length);
    console.log("Trung bình cộng của mảng:", trungBinh);
}
function xoaPhanTu() {
    if (mangSoNguyen.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }
    let viTri = Number(prompt("Nhập vị trí cần xóa (0 đến " + (mangSoNguyen.length - 1) + "): "));
    if (viTri >= 0 && viTri < mangSoNguyen.length) {
        mangSoNguyen.splice(viTri, 1);
        console.log("Đã xóa phần tử tại vị trí", viTri);
        hienThiMang();
    } else {
        console.log("Vị trí không hợp lệ!");
    }
}
function timPhanTuLonThuHai() {
    if (mangSoNguyen.length < 2) {
        console.log("Mảng cần ít nhất 2 phần tử!");
        return;
    }
    mangSoNguyen.sort();
    let LonThuHai = mangSoNguyen[mangSoNguyen.length-2];
    console.log("phan tu lon thu 2 la:"+LonThuHai);
}
function chayChuongTrinh() {
    let luaChon;
    do {
        hienMenu();
        luaChon = Number(prompt("Nhập lựa chọn của bạn (1-7): "));
        
        switch (luaChon) {
            case 1:
                nhapMang();
                break;
            case 2:
                hienThiMang();
                break;
            case 3:
                timChanLe();
                break;
            case 4:
                tinhTrungBinhCong();
                break;
            case 5:
                xoaPhanTu();
                break;
            case 6:
                timPhanTuLonThuHai();
                break;
            case 7:
                console.log("Tạm biệt!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-7.");
        }
    } while (luaChon !== 7);
}
chayChuongTrinh();