import React from "react";

class Access extends React.Component {
    componentDidMount(){
        document.getElementById('role1').classList.add('selectedRole');
        document.getElementsByClassName('busterCards')[this.props.step].classList.add('active');
    }

    prev(){
        this.props.prevStep();
    }
    next(){
        this.props.nextStep();
    }

    highlightRole1(){
        document.getElementById('role2').classList.remove('selectedRole');
        document.getElementById('role3').classList.remove('selectedRole');
        document.getElementById('role1').classList.add('selectedRole');
    }
    highlightRole2(){
        document.getElementById('role1').classList.remove('selectedRole');
        document.getElementById('role3').classList.remove('selectedRole');
        document.getElementById('role2').classList.add('selectedRole');
    }
    highlightRole3(){
        document.getElementById('role1').classList.remove('selectedRole');
        document.getElementById('role2').classList.remove('selectedRole');
        document.getElementById('role3').classList.add('selectedRole');
    }

    render(){
        return (
            <div className="background">
                <div className="card container">
                    <div className="header"><span>X</span></div>
                    <div className="body container">
                        <h4 className="text-center">Who can manage projects</h4>
                        <p class="form-text text-muted text-center">Don't panic - You can customize this permissions in settings.</p>

                        <form onSubmit={() => this.next()} style={{marginTop:30}}>
                            <div class="form-group">
                                <div class="form-row row roles">
                                    <div class="form-group role1" id="role1" onClick={() => this.highlightRole1()}>
                                        <div className="row">
                                            <div className="col-md-1 roleIcon"><i class="fa fa-2x fa-users"></i></div>
                                            <div className="roleText col-md-10">
                                                <h6>Everyone</h6>
                                                <p>All users can now to see it, but guests can not access the project.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group role2" id="role2" onClick={() => this.highlightRole2()}>
                                        <div className="row">
                                            <div className="col-md-1 roleIcon"><i class="fa fa-2x fa-id-badge"></i></div>
                                            <div className="roleText col-md-10">
                                                <h6>Only Admins</h6>
                                                <p>Only admins can manage everthing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group role3" id="role3" onClick={() => this.highlightRole3()}>
                                        <div className="row">
                                            <div className="col-md-1 roleIcon"><i class="fa fa-2x fa-user"></i></div>
                                            <div className="roleText col-md-10">
                                                <h6>Only to specific people</h6>
                                                <p>Only sone specific peole will be able to see it.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default Access;