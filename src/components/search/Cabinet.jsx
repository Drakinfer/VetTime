import Card from 'react-bootstrap/Card';
import "../../assets/css/components/CabinetCard.css"
import Row from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Cabinet = (props) => {
    return (
        <>
        
           <Card style={{ width: '50vw', marginLeft: "auto", marginRight: "auto", marginTop: "5px"}}>
                <Card.Header bg={"#064a3f"}>
                    <Card.Title>{props.cabinet.nomCabinet}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row className="g-4 card-row">
                        <Col className="col-first">
                            <p>Dr.{props.cabinet.prnmUser} {props.cabinet.nomUser}</p>
                            <p>Adresse : {props.cabinet.adresse} {props.cabinet.cp} {props.cabinet.ville}</p>
                            <p>Téléphone : {props.cabinet.telCabinet}</p>   
                        </Col>
                        <Col className="col-last">
                            <Button onClick={() => props.click(props.cabinet.cabinet_id)}>Prendre rendez-vous</Button>
                        </Col>
                    </Row>
                </Card.Body>
           </Card>
        </>
    )
    ;
  };
  
  export default Cabinet;