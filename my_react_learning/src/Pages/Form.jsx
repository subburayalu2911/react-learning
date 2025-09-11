import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

function Form() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4" id="form_heading">Form Page</h2>
          <form className="border p-4 rounded bg-light">
            <div className="mb-3">
              <label className="form-label">
                Name:
                <input type="text" name="name" className="form-control" />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email:
                <input type="email" name="email" className="form-control" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;