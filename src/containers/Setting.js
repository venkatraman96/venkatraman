import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

class Setting extends Component {
  render() {
    return (<div>

<div id="config-panel" className="config-panel d-none d-lg-block" style={{right: "-190px"}}>
        <div className="panel-inner">
            <a id="config-trigger" className="config-trigger config-panel-hide" href="#"><svg className="svg-inline--fa fa-cog fa-w-16 mx-auto" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg></a>
            <h5 className="panel-title">Choose Colour</h5>
            <ul id="color-options" className="list-unstyled list-inline">
            <li class="theme-1 list-inline-item"><a data-style="theme-1.css" data-chart="#00BCD4" href="#" style={{background: "#00BCD4"}}></a></li>
                <li class="theme-2 list-inline-item"><a data-style="theme-2.css" data-chart="#03A9F4" href="#" style={{background: "#03A9F4"}}></a></li>
                <li class="theme-3 list-inline-item active"><a data-style="theme-3.css" data-chart="#009688" href="#" style={{background: "#009688"}}></a></li>
                <li class="theme-4 list-inline-item"><a data-style="theme-4.css" data-chart="#4CAF50" href="#" style={{background: "#4CAF50"}}></a></li>
                <li class="theme-5 list-inline-item"><a data-style="theme-5.css" data-chart="#8BC34A" href="#" style={{background: "#8BC34A"}}></a></li>
                <li class="theme-6 list-inline-item"><a data-style="theme-6.css" data-chart="#C0CA33" href="#" style={{background: "#C0CA33"}}></a></li>
                <li class="theme-7 list-inline-item"><a data-style="theme-7.css" data-chart="#FFC107" href="#" style={{background: "#FFC107"}}></a></li>
                <li class="theme-8 list-inline-item"><a data-style="theme-8.css" data-chart="#FF9800" href="#" style={{background: "#FF9800"}}></a></li>
                <li class="theme-9 list-inline-item"><a data-style="theme-9.css" data-chart="#FF5722" href="#" style={{background: "#FF5722"}}></a></li>
                <li class="theme-10 list-inline-item"><a data-style="theme-10.css" data-chart="#795548" href="#" style={{background: "#795548"}}></a></li>
                <li class="theme-11 list-inline-item"><a data-style="theme-11.css" data-chart="#607D8B" href="#" style={{background: "#607D8B"}}></a></li>
                <li class="theme-12 list-inline-item"><a data-style="theme-12.css" data-chart="#673AB7" href="#" style={{background: "#673AB7"}}></a></li> 
            </ul>
            <a id="config-close" className="close" href="#"><svg className="svg-inline--fa fa-times-circle fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg></a>
        </div>
    </div>
    </div>
      
    );
  }
}

export default Setting;