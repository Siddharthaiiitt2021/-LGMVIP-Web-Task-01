// function showImage({reg})
// {
//     setFile(URL.createObjectURL(reg.img));
// }

function registeredDetails({ reg }) {
    var skill = '';
    for (let index = 0; index < reg.skills.length; index++) {
        if (index == reg.skills.length - 1) {
            skill = skill + reg.skills[index]
        }
        else {
            skill = skill + reg.skills[index] + ','
        }
    }
    return (

        <div className="registered_details">
            <div className="deets">
                <div className="entered_deets">
                    <div className="student_details">
                        <h6>Name</h6><p>{reg.name}</p>
                    </div>
                    <div className="student_details">
                        <h6>Email</h6><p>{reg.email}</p>
                    </div>
                    <div className="student_details">
                        <h6>Gender</h6><p>{reg.gender}</p>
                    </div>
                    <div className="student_details">
                        <h6>Skills</h6><p>{skill}</p>
                    </div>
                </div>
                <div className="student_img">
                    <img src={reg.img} alt="noimg"></img>
                </div>
            </div>
        </div>
    )
}
export default registeredDetails