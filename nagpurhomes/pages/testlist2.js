import Navbar from "../components/Navbar"

const testlist2 = () => {
    return(
        <>
        <Navbar/>
        <div className="container">
            <br></br>
            <form method="post" action="api/testform">
                <div className="mb-3">
                    <label htmlFor="adTitle">Ad Title</label>
                    <input type="text" className="form-control" name="adTitle" aria-describedby="titleHelp" required/>
                    <div id="titleHelp" className="form-text">Example: 2bhk apartment for sale at Civil Lines, Nagpur.</div>
                </div>

                <div className="mb-3">
                <label htmlFor="adLocation" className="form-label">Location</label>
                <input type="text" className="form-control" name="adLocation" placeholder="e.g.: Civil Lines"/>   
                </div>

                <div className="mb-3">
                <label>Other details:</label>
                    <select className="form-select" name="bedrooms" id="bedrooms" aria-label="Default select example">
                        <option defaultChecked>Select bedroom(s)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="More than 5">More than 5</option>
                    </select>
                </div>

                <div className="mb-3">
                    <select className="form-select" name="bathrooms" aria-label="Default select example">
                        <option defaultChecked>Select bathroom(s)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="More than 5">More than 5</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="bathrooms" className="form-label">Area</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="areaField" id="flexRadioDefault1" defaultChecked/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Area
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="areaField" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Built-up Area
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="areaField" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Super Built-up Area
                        </label>
                    </div>
                </div>

                <div className="mb-3">
                    <input type="number" className="form-control" name="areaText" placeholder="E.g.: 1200"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="amountText">Expected Price/ Rent per month:</label>
                    <input type="number" className="form-control" name="amountText" placeholder="E.g.: 500000, 15000"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="descriptionField">Describe the features that make your property unique:</label>
                    <textarea className="form-control" name="descriptionField" aria-label="With textarea"></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="uploadField">Upload Property Images: </label>
                    <input type="file" className="form-control" name="uploadField" multiple />
                </div>

                <div className="mb-3">
                <label htmlFor="nameField" >Name:</label>
                <input type="text" className="form-control" name="nameField"/>
                </div>

                <div className="mb-3">
                <label htmlFor="emailField">Email Address:</label>
                <input type="email" className="form-control" name="emailField"/>
              </div>

              <div className="mb-3">
                <label htmlFor="phoneField" >Phone:</label>
                <input type="text" className="form-control" name="phoneField"/>
              </div>

                <button type="submit">Submit</button>
            </form>
        </div>
        
        </>
    )
}

export default testlist2