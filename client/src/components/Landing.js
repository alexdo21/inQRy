import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';

function mapStateToProps(state) {
    return {

    };
}

class Landing extends Component {
    render() {
        return (
            <Container maxWidth="xl">
                <Typography variant="h4" gutterBottom>Mission Statement</Typography>
                <Typography variant="body1" gutterBottom>From the beginning, our mission has been to empower the community to stay safe and informed with reliable location tracing technology. We wanted this tech to be easily accessible for all, with a streamlined user interface and direct interaction with state official contact tracers. 
                    Together, we can Outsmart COVID.</Typography>

                <Typography variant="h4" gutterBottom>How does inQRy work?</Typography>
                <Typography variant="body1" gutterBottom>inQRy's goal is to increase the availability of information open to the public in conjunction with the efforts of local and state contact tracers.  The system utilizes QR codes posted at brick and mortar locations as a means for its users to voluntarily ping their locations into a secure database. User info will always be kept anonymous. When a positive case is reported, the InQRy system will notify others in the network who have been in the same locations in the same time ranges as that case. Users will also be able to see their check-in location history. In this way, both the user and the contact tracer will be empowered with precise knowledge of travel history if anyone in the network develops an infection.
                Ranging from the classroom to local bars and restaurants, our system can be implemented for multiple purposes around the community. Use it to trace your interactions with potentially infected individuals, anonymously. Map out the locations you've visited in the My Records tab. Build out your 'social circles' with 'linked' individuals in the My Profile section. Request a check in QR code for your next event.
                Lets work together to Outsmart covid.</Typography>

                <Typography variant="h4" gutterBottom>Who are We?</Typography>
                <Typography variant="body1" gutterBottom>The inQRy team is a cross-functional group of University of Wisconsin-Madison students with a passion for utilizing technology to better the lives of our community. With our respective backgrounds in Biomedical Engineering, Computer Science, Electrical and Mechanical Engineering and Mathematics, our team is focused on a wholistic approach to combating Covid from a technological and social engineering standpoint. Our story begins on a college campus in Singapore, where two founders studied abroad during the outbreak of the pandemic. After noticing how well Singapore handled the situation in early spring, one of these friends saw the need for a solution within his home campus community.  
                Thus, he banded together a group of motivated fellow UW students who were intent on tackling the inevitable problem of transmission once students would return in the fall. This team spans backgrounds in Biomedical, Electrical, and Mechanical Engineering, as well as Computer Science and Mathematics.  
                This is how inQRy was born. After many meetings with esteemed professionals associated with UW Health, the Isthmus Project, UW-Madison, and the Madison start-up community, we bring you a service that is as much as you make of it. We are focused on taking a wholistic approach to combating Covid from a technological and social engineering standpoint. 
                Stay anonymous. Stay informed. Outsmart covid with inQRy.</Typography>

                <Typography variant="h4" gutterBottom>Privacy</Typography>
                <Typography variant="body1" gutterBottom>We are dedicated to protecting your privacy. Our completely voluntary process allows users to opt into where they want to check in. Nothing more and nothing less. Your submitted data will be hashed by to ensure your data is secure. The inQRy system contains an SSL certificate which allows all communication to be encrypted and sent through secure channels. The system will never store your health data. In fact, nobody involved—besides the health professionals themselves—will ever know your name if you do report symptoms. When automatic alerts go out to people that encounter a confirmed case, they will never contain specific names or details.</Typography>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(Landing);