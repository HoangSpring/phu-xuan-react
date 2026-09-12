function PostCard() {
    const tieuDe = 'Giới thiệu React: Tại sao không dùng Vanilla JS?'
    const tacGia = 'Nguyễn Văn An'
    const ngayDang = '2025-09-01'
    const tomTat =
        'React giải quyết bài toán đồng bộ giao diện với dữ liệu bằng cách ' +
        'mô tả giao diện theo trạng thái, thay vì thao tác DOM thủ công. ' +
        'Bài viết này so sánh trực tiếp hai cách tiếp cận qua ví dụ bộ đếm.'
    const soLuotXem = 128

    return (
        <article>
            <h3>{tieuDe}</h3>
            <p>
                ✍️ {tacGia} &nbsp;·&nbsp; 📅 {ngayDang} &nbsp;·&nbsp; 👁 {soLuotXem} lượt xem
            </p>
            <p>{tomTat}</p>
            <button>Đọc tiếp →</button>
        </article>
    )
}

export default PostCard