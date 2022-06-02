import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from '../surveys/questionsone';

const Mysurvey = () => {
    return(
        <Survey.Survey
        showCompletedPage={true}
        onComplete={data=>console.log(data)}
        json = {Json}
        />
    )
}
export default Mysurvey;




