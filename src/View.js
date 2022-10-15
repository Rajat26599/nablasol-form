import React from "react";

class View extends React.Component {
    componentDidMount(){
        document.getElementById('view1').classList.add('selectedView');
        document.getElementsByClassName('busterCards')[this.props.step].classList.add('active');
    }

    prev(){
        this.props.prevStep();
    }
    next(){
        this.props.nextStep();
    }

    highlightView1(){
        document.getElementById('view2').classList.remove('selectedView');
        document.getElementById('view1').classList.add('selectedView');
    }
    highlightView2(){
        document.getElementById('view1').classList.remove('selectedView');
        document.getElementById('view2').classList.add('selectedView');
    }

    render(){
        return (
            <div className="background">
                <div className="card container">
                    <div className="header"><span>X</span></div>
                    <div className="body container">
                        <h4 className="text-center">Select a view</h4>
                        <p class="form-text text-muted text-center">You can also customize this views in settings.</p>

                        <form onSubmit={() => this.next()} style={{marginTop:30}}>
                            <div class="form-group">
                                <div class="form-row row views">
                                    <div class="form-group col-md-6 view1" onClick={() => this.highlightView1()}>
                                        <div id="view1"><i class="fa fa-4x fa-list-alt"></i></div>
                                        <h6 className="text-center">List</h6>
                                    </div>
                                    <div class="form-group col-md-6 view2" onClick={() => this.highlightView2()}>
                                        <div id="view2"><i class="fa fa-4x fa-bars"></i></div>
                                        <h6 className="text-center">Board</h6>
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

export default View;