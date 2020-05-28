import React from 'react';
import { deviceReady } from './cordova';

class App extends React.Component {

  startCapture = () => {
    window.plugins.cameraRecorder.initialize({
      fullsize: this.canvas,
    });

    var options = {
      canvas: {
        width: 320,
        height: 240,
      },
      capture: {
        width: 320,
        height: 240,        
      },
      use: 'data',
      fps: 20,
      cameraFacing: "front"
    };

    window.plugins.cameraRecorder.start(options,
      (err) => {
        console.log("start capture failed", err);
      });
  }

  startRecord = () => {
    window.plugins.cameraRecorder.startRecord(
      (err) => {
        console.log("start record failed", err);
      },
      (data) => {
        console.log("start record success", data);
      });
  }

  stop = () => {
    window.plugins.cameraRecorder.stop(
      (data) => {
        console.log("stop failed", data);
      },
      (err) => {
        console.log("stop success", err);
      },
    );
  }

  render() {
    return (
      <>
        <div style={{ width: "240px", height: "320px", border: "1px solid"}}>
          <canvas width="240px" height="320px" ref={(ref) => this.canvas = ref} />
        </div>
        <button onClick={this.startCapture}>start capture</button>
        <button onClick={this.startRecord}>start record</button>
        <button onClick={this.stop}>stop</button>
      </>
    );
  }
}

export default App;