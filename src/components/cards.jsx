import { BsFillCircleFill } from "react-icons/bs";

const CharacterCard = ({ results }) => {

    let display;

    if (results) {
        display = results.map((data) => {
            let { id, name, image, location, status, species, origin } = data;

            return <div key={id} className="col-3 position-relative">
                <div className="">
                    <img src={image} alt="" className="img-fluid"></img>
                    <div className="content">
                        <div className="fs-4 fs-bold text-start">{name}</div>
                        <div className="row bb">            
                                <div className="text-start">
                                    {
                                        status === "Alive"? 
                                        <><BsFillCircleFill color={'#00FF00'} /> {" "} {status}{" "}{species}</>: 
                                        status === "Dead" ? 
                                        <><BsFillCircleFill color={'#f44336'} /> {" "} {status}{" "}{species}</>:
                                        <><BsFillCircleFill color={'#808080'} /> {" "} {status}{" "}{species}</>
                                    }
                                
                                </div>
                            

                            </div>
                        <div className="mb-4">
                            <div className="row">
                            <div className="fs-6 text-start">Last Location: {location["name"]} </div>
                            {/* <div className="fs-6 text-start">{location["name"]}</div> */}
                            </div>
                            <div className="row">
                            <div className="fs-6 text-start">Origin: {origin["name"]} </div>
                            {/* <div className="fs-6 text-start">{location["name"]}</div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        });
    } else {
        display = "No Character found";
    }


    return <>{display}</>;
}

export default CharacterCard;