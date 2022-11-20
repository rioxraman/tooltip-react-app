import React from "react";
import Tooltip from "./components/Tooltip";


export default function App() {
  return (
    <div className="container" style={{marginTop :50,}}>
      <h1 style={{color:"orange",marginLeft :10}}>Hello, this is a React tooltip test</h1>
      <div className="border border-4" >
      <div className="row" style={{marginLeft :10}}>
    <div className="col" style={{marginBottom :10}}>
    <Tooltip content="I'm a right tooltip!" direction="right">
          <button className="btn btn-primary">right Tooltip Button</button>
          </Tooltip>
    </div>
    <div className="col" style={{marginBottom :10}}>
    <Tooltip content="I'm a top tooltip!" direction="top">
          <button className="btn btn-success">top Tooltip Button</button>
          </Tooltip>
    </div>
</div>
<div className="row" style={{marginLeft :10}}>
    <div className="col" style={{marginBottom :10}}>
    <Tooltip content="I'm a bottom tooltip!" direction="bottom">
          <button className="btn btn-secondary">bottom Tooltip Button</button>
          </Tooltip>
    </div>
    
    <div className="col" style={{marginBottom :10}}>
    <Tooltip content="I'm a left tooltip!" direction="left">
          <button className="btn btn-danger">left Tooltip Button</button>
          </Tooltip>
    </div>
    </div>
</div>

      
    </div>
  );
}