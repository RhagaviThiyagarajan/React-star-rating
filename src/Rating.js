import {React,useState} from 'react';
import { Container } from './RatingStyles';
import { Radio } from './RatingStyles';
import { Rating } from './RatingStyles';
import { FaStar } from "react-icons/fa";

const Rate = () => {
    const [rate, setRate] = useState(0);
    return (
        <Container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                setRate(givenRating);
                                alert(
                                    `Are you sure you want to give
                                    ${givenRating} stars ?`
                                );
                            }}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    givenRating < rate || givenRating === rate
                                        ? "000"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
    );
};
 
export default Rate;