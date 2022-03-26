import Navbar from "../components/Navbar"

const testlist = () => {
    return (
        <>
          <Navbar/>
          <div className="container">
            <br></br>
            <h1 className="text-center">List your Property on Nagpur Homes: </h1> 
            
            <form>
              <div className="mb-3">
                <label for="adTitle" NameName="form-label">Ad Title</label>
                <input type="text" className="form-control" id="adTitle" aria-describedby="titleHelp" required/>
                <div id="titleHelp" className="form-text">Example: 2bhk apartment for sale at Civil Lines, Nagpur.</div>
              </div>

              <div className="mb-3">
                <label for="adLocation" className="form-label">Location</label>
                <input type="text" className="form-control" id="adLocation" placeholder="e.g.: Civil Lines"/>   
              </div>

              <div className="mb-3">
                <label>Other details:</label>
                <select class="form-select" id="bedrooms" aria-label="Default select example">
                  <option selected>Select bedroom(s)</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                  <option value="3">More than 5</option>
                </select>
              </div>

              <div className="mb-3">
                <select class="form-select" id="bathrooms" aria-label="Default select example">
                  <option selected>Select bathroom(s)</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                  <option value="3">More than 5</option>
                </select>
              </div>

              <div className="mb-3">
                <label for="bathrooms" className="form-label">Area</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="areaField" id="flexRadioDefault1" checked/>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Area
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="areaField" id="flexRadioDefault2"/>
                  <label class="form-check-label" for="flexRadioDefault2">
                  Built-up Area
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="areaField" id="flexRadioDefault2"/>
                  <label class="form-check-label" for="flexRadioDefault2">
                  Super Built-up Area
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <input type="number" className="form-control" id="areaText" placeholder="E.g.: 1200"/>
              </div>

              <div className="mb-3">
              <label for="amountText" NameName="form-label">Expected Price/ Rent per month:</label>
                <input type="number" className="form-control" id="amountText" placeholder="E.g.: 500000, 15000"/>
              </div>

              <div className="mb-3">
                <label for="descriptionField" NameName="form-label">Describe the features that make your property unique:</label>
                <textarea class="form-control" id="descriptionField" aria-label="With textarea"></textarea>
              </div>

              <div class="mb-3">
                <label for="uploadField">Upload Property Images: </label>
                <input type="file" class="form-control" id="uploadField" multiple/>
              </div>

              <div className="mb-3">
                <label for="nameField" NameName="form-label">Name:</label>
                <input type="text" className="form-control" id="nameField"/>
              </div>

              <div className="mb-3">
                <label for="emailField" NameName="form-label">Email Address:</label>
                <input type="email" className="form-control" id="emailField"/>
              </div>

              <div className="mb-3">
                <label for="phoneField" NameName="form-label">Phone:</label>
                <input type="text" className="form-control" id="phoneField"/>
              </div>

              

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>


          </div>
        </>
    )
}

export default testlist