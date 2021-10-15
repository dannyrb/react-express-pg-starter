import react from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


function CarListItem(props) {
    const { id, vin, make, model, mileage, onClick } = props;

    return (
        <div onClick={() => onClick(id)}>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{id}: {make} {model}</CardTitle>
                    <CardText>VIN: {vin}</CardText>
                    <CardText>Mileage: {mileage}</CardText>
                    
                </CardBody>
            </Card>
        </div>
    )
}

CarListItem.propTypes = {
    id: PropTypes.number.isRequired,
    vin: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CarListItem;