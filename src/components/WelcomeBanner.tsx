function WelcomeBanner() {
    const tenKhoaHoc = 'Web FrontEnd nâng cao (INT.7.18)'
    const soTinChi = 3
    const tongBuoi = 20

    return (
        <section>
            <h2>Chào mừng bạn đến với khoá học!</h2>
            <p>Môn học: {tenKhoaHoc}</p>
            <p>Số tín chỉ: {soTinChi} tín chỉ</p>
            <p>Tổng số buổi: {tongBuoi} buổi</p>
            <p>
                Hiện tại: Buổi 2 / {tongBuoi} ({Math.round((2 / tongBuoi) * 100)}% hoàn thành)
            </p>
        </section>
    )
}

export default WelcomeBanner