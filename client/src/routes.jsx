import React from 'react';
import {Route} from 'react-router-dom';
import MainPage from './main_page/main_page';
import SurveyPage from './survey_page';

const routes = (
  <div>
    <Route exact path="/" component={MainPage} />
    <Route path="/survey" component={SurveyPage} />
    {/* <Route path="/about_me" component={AboutMe} />
    <Route path="/resume" component={Resume} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/thoughts" component={Thoughts} />
    <Route path="/bits" component={Bits} /> */}
  </div>
);

export default routes;