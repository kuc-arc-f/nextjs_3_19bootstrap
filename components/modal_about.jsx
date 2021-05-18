
export default function Page() {
  return (
  <div className="modal fade" id="NavigateAboutModal" tabIndex="-1"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title" id="exampleModalLabel">About</h3>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div className="modal-body">
          this is About page<br />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
