const Dialog = ({ selectedDate, closeModal, handleDelete, showModal }: { selectedDate: String, closeModal: Function, handleDelete: Function, showModal: Boolean }) => {
    return(
    showModal && (
        <div className="__dialog-wrapper-2">
            <h2>Informasi</h2>
            <p>Apakah anda yakin untuk menghapus Event {selectedDate}</p>
            <button className="__dialog-btn-close" onClick={() => handleDelete()}>Hapus</button>
            <button className=" __dialog-btn-close" onClick={() => closeModal()}>Tutup</button>
        </div>)
    )

}

export default Dialog