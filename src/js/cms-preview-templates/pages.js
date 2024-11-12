import React from "react";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;
    const headerLeft = entry.getIn(["data", "header_left"]);
    const headerRight = entry.getIn(["data", "header_right"]);
    const bitsAndPieces = entry.getIn(["data", "bits_and_pieces"]);

    return (
      <div>
        <div className="main-wrapper">
          <div id="hero" className="section_hero">
            <div className="padding-global-fixed">
              <div className="container-small">
                <div className="padding-section-small">
                  <div className="flex gap-4rem vertical-align-center">
                    {headerLeft && <img src={headerLeft} loading="lazy" alt="" className="max-width-5rem mobile-hide"/>}
                    <h1 className="heading-style-h1 font-style-berlingske text-align-center">{entry.getIn(["data", "title"])}</h1>
                    {headerRight && <img src={headerRight} loading="lazy" alt="" className="max-width-5rem mobile-hide"/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content" className="section_content text-align-center">
            <div className="padding-section-small">
              <div className="padding-global">
                <div className="container-small">
                  <div className="padding-top padding-medium">
                    {bitsAndPieces &&
                        <>
                          <img src="https://cdn.prod.website-files.com/65c771cc39ce7106362f82a4/65f9e8ac9c5b161eb48cd056_Cloud-Left.svg"
                            loading="lazy" alt="" className="component_cloud right absolute-top-right"
                            style={{willChange: "transform", transformStyle: "preserve-3d"}}/>
                          <img src="https://cdn.prod.website-files.com/65c771cc39ce7106362f82a4/65fa0bdafea62ee7a5561015_Asset-55.svg"
                            loading="lazy" alt="" className="component_stars absolute-top-left"/>
                        </>
                    }
                    {widgetFor("content")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
