import React from "react";

class ProjectType extends React.Component {
    componentDidMount(){
        document.getElementsByClassName('busterCards')[this.props.step].classList.add('active');
    }

    prev(){
        this.props.prevStep();
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
                        <h4 className="text-center">Project type</h4>
                        <p class="form-text text-muted text-center">Don't panic - You can customize this types in settings.</p>
                        <div class="btn-group" role="group" aria-label="Basic example" style={{width:'100%', border:"1px solid #aaa"}}>
                            <button type="button" class="btn btn-primary">Left</button>
                            <button type="button" class="btn btn-light" style={{borderRight: "2px solid #aaa"}}>Middle</button>
                            <button type="button" class="btn btn-light">Right</button>
                        </div>

                        <form onSubmit={() => this.next()}>
                            <div class="form-group">
                                <label for="projectName"><h6 style={{marginBottom:0}}>Hourly</h6></label>
                                <p class="form-text text-muted">We'll never share your email with anyone else.</p>
                                <div class="form-row row">
                                    <div class="form-group col-md-6">
                                        <select class="form-select" id="client" required>
                                            <option value="">Project hourly rate</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-4" style={{width:'41%'}}>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">&#8377;</div>
                                            </div>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                id="newCustomer" 
                                                placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="budget"><h6 style={{marginBottom:0}}>Budget</h6></label>
                                <p class="form-text text-muted">We need hourly rate to trach your project's billable amount.</p>
                                <div class="form-row row">
                                    <div class="form-group col-md-6">
                                        <select class="form-select" id="budget" required>
                                            <option value="">Hours per person</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-check" style={{marginTop:15}}>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1" style={{marginTop:0}}>Budget resets every month</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1" style={{marginTop:0}}>
                                    Send email if project exceeds
                                    <input type="number" placeholder="80.00" style={{width:"60px", border:"1px solid #ddd", marginLeft:5, marginRight:5}} />
                                    % of budget
                                </label>
                            </div>

                            <div className="buttons">
                                <button type="button" class="btn backButton" onClick={() => this.prev()}>{'<'} Back</button>
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

export default ProjectType;