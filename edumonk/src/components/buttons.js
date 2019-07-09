import React,{Component} from 'react'

class Buttons extends Component {
    render() {
        return(
            <div>
            <div className="btn-services">
                <div className="about">
                    <div class="btn-group dropup">
                        <button type="button" class="btn btn-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About Me
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="https://edumonk.org/our-team/">My Team</a>
                            <a class="dropdown-item" href="#">My Goals</a>
                            <a class="dropdown-item" href="#">My Achievments</a>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div class="btn-group">
                    <button type="button" class="btn btn-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My Services
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Student Counselling</a>
                        <a class="dropdown-item" href="#">Branding Services</a>
                    </div>
                    </div>
                </div>
                <div className="work">
                    <div class="btn-group">
                    <button type="button" class="btn btn-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Work With Me
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Join leaders Team</a>
                        <a class="dropdown-item" href="#">Join Student Council</a>
                    </div>
                    </div>
                </div>
                <div className="activites">
                    <div class="btn-group">
                    <button type="button" class="btn btn-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My Activites
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Online Activites</a>
                        <a class="dropdown-item" href="#">Offline Activites</a>
                    </div>
                    </div>
                </div>
                <div className="partner">
                    <div class="btn-group">
                    <button type="button" class="btn btn-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Partner With Me
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Student Benifit Partner</a>
                        <a class="dropdown-item" href="#">Activity Sponsors Partner</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Buttons
