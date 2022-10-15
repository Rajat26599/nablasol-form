import React from "react";

class CreateProject extends React.Component {
    componentDidMount(){
        document.getElementsByClassName('busterCards')[this.props.step].classList.add('active');
    }
    next(){
        this.props.nextStep();
    }

    render(){
        return (
            <div className="background">
                <div className="card container">
                    <div className="header"><span>X</span></div>
                    <div className="body container">
                        <h4 className="text-center">Create a project</h4>
                        <form onSubmit={() => this.next()}>
                            <div class="form-group">
                                <label for="projectName"><h6>Project name</h6></label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="projectName" 
                                    aria-describedby="projectName" placeholder="Enter project name here" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <label for="client"><h6>Client</h6></label>
                            <div class="form-row row">
                                <div class="form-group col-md-7">
                                    <select class="form-select" id="client" required>
                                        <option value="">Select a client</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                or
                                <div class="form-group col-md-4" style={{width:'37.5%'}}>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">+</div>
                                        </div>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            id="newCustomer" 
                                            placeholder="New Client" />
                                    </div>
                                </div>
                            </div>

                            <label for="dateFrom"><h6>Dates</h6></label>
                            <div class="form-row row">
                                <div class="form-group col-md-5" style={{width:'49%'}}>
                                    <input 
                                        type="date" 
                                        class="form-control" 
                                        id="dateFrom" 
                                        placeholder="New Customer" />
                                </div>
                                -
                                <div class="form-group col-md-5" style={{width:'49%'}}>
                                    <input 
                                        type="date" 
                                        class="form-control" 
                                        id="dateTo" 
                                        placeholder="New Customer" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="notes"><h6>Notes</h6></label>
                                <textarea 
                                    type="text" 
                                    class="form-control" 
                                    id="notes" 
                                    aria-describedby="notes" placeholder="Optional" />
                            </div>

                            <div className="buttons">
                                <button type="submit" class="btn btn-primary">Next</button>
                            </div>
                        </form>
                    </div>
                    <div className="footer">
                        {
                            [1,2,3,4,5,6].map((i) => {
                                return <div className="busterCards" key={i}></div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProject;