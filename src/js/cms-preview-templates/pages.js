import React from "react";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;
    const headerLeft = entry.getIn(["data", "header_left"]);
    const headerRight = entry.getIn(["data", "header_right"]);
    const bitsAndPieces = entry.getIn(["data", "bits_and_pieces"]);

    return (
      <div>
        <div className="main-wrapper"
          style={{position:"relative", maxWidth:"768px", fontSize:"19.2px", fontFamily: "\"Avenir Next\", sans-serif", lineHeight: "1.5"}}>
          <div id="hero" className="section_hero" style={{display:"flex", gap:"4rem", alignItems:"center"}}>
            {headerLeft && <img src={headerLeft} loading="lazy" alt="" style={{maxWidth:"5rem", width:"100%"}}/>}
            <h1 style={{fontSize: "3.8rem", fontWeight: 700, lineHeight: 1, textAlign: "center", fontFamily: "Berlingske, sans-serif"}}>
              {entry.getIn(["data", "title"])}
            </h1>
            {headerRight && <img src={headerRight} loading="lazy" alt="" style={{maxWidth:"5rem", width:"100%"}}/>}
          </div>
          <div id="content">
            {bitsAndPieces &&
                <>
                  <img src="https://cdn.prod.website-files.com/65c771cc39ce7106362f82a4/65f9e8ac9c5b161eb48cd056_Cloud-Left.svg"
                    loading="lazy" alt="" className="component_cloud right absolute-top-right"
                    style={{position: "absolute", top: "2%", left: "107.5%", width: "55vw", minWidth: "15rem", maxWidth: "40.5rem"}}/>
                  <img src="https://cdn.prod.website-files.com/65c771cc39ce7106362f82a4/65fa0bdafea62ee7a5561015_Asset-55.svg"
                    loading="lazy" alt=""
                    style={{position: "absolute", top: "2rem", right: "112.5", width: "3.415rem",  maxWidth: "100%", display: "inline-block"}}/>
                </>
            }
            {widgetFor("body")}
          </div>
        </div>
      </div>
    );
  }
}
