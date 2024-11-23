import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveTab } from "../Navbar/NavbarSlice";

import Banner from "../Banner/Banner";

import {
  RESOURCES,
  RESOURCESHEADER,
  RESOURCESSUBHEADER,
  RESOURCELIST,
} from "../../pgccConstants";

function Resources() {
  const dispatch = useDispatch();

  const caseBooks = RESOURCELIST.filter((resource) => {
    return resource.type === "case book";
  });

  const otherReading = RESOURCELIST.filter((resource) => {
    return resource.type === "other reading";
  });

  const podcasts = RESOURCELIST.filter((resource) => {
    return resource.type === "podcast";
  });

  const practiceCases = RESOURCELIST.filter((resource) => {
    return resource.type === "practice case";
  });

  const upennResources = RESOURCELIST.filter((resource) => {
    return resource.type === "upenn resource";
  });

  const otherResources = RESOURCELIST.filter((resource) => {
    return resource.type === "other resource";
  });

  const videos = RESOURCELIST.filter((resource) => {
    return resource.type === "video";
  });

  const consultingResources = RESOURCELIST.filter((resource) => {
    return resource.type == "consulting resources";
  });

  useEffect(() => {
    dispatch(setActiveTab(RESOURCES));
  }, []);

  return (
    <>
      <Banner title={RESOURCESHEADER} subTitle={RESOURCESSUBHEADER} />

      <div id="consulting-resources" className="pt-16 pb-24">
        <div className="container mx-auto">
          <h2 className="mb-12">Interview Preparation</h2>
          <div className="flex flex-wrap justify-center">
            {consultingResources.map((x) => (
              <div
                key={x.name}
                className="px-5 py-2 w-1/2 md:w-1/3 xl:w-1/3 mb-4 border-2"
              >
                <a href={x.link} target="_blank" rel="noreferrer">
                  <img src={x.logo} alt="logo" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="videos" className="pt-16 pb-24 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="mb-12">Videos</h2>
          <div className="flex flex-wrap items-center justify-center">
            {videos.map((x) => (
              <iframe
                width="560"
                height="315"
                src={x.link}
                title="A conversation with Mr. Soosung Lee, the managing partner at Roland Berger"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))}
          </div>
        </div>
      </div>

      <div id="case-books" className="pt-16 pb-24">
        <div className="container mx-auto">
          <h2 className="mb-12">Consulting Case Books</h2>
          <div className="flex flex-wrap items-center justify-center">
            {caseBooks.map((x) => (
              <div
                key={x.link}
                className="px-5 py-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4"
              >
                <a href={x.link} target="_blank" rel="noreferrer">
                  <img
                    src={x.image}
                    className="h-book resource-img"
                    alt="logo"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="other-books">
        <div className="container pt-16 pb-24 mx-auto bg-gray-200">
          <h2 className="mb-12">Other Reading</h2>
          <div className="flex flex-wrap items-center justify-center">
            {otherReading.map((x) => (
              <div
                key={x.link}
                className="px-5 py-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4"
              >
                <a href={x.link} target="_blank" rel="noreferrer">
                  <img
                    src={x.image}
                    className="h-book resource-img"
                    alt="logo"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="podcasts" className="pt-16 pb-24">
        <div className="container mx-auto">
          <h2 className="mb-12">Podcasts</h2>
          <div className="flex flex-wrap items-center justify-center">
            {podcasts.map((x) => (
              <div
                key={x.link}
                className="px-5 py-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4"
              >
                <a href={x.link} target="_blank" rel="noreferrer">
                  <img src={x.image} className="resource-img" alt="logo" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="sample-cases" className="pt-16 pb-24 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="mb-12">Sample Cases</h2>
          <div className="flex flex-wrap justify-center">
            {practiceCases.map((x) => (
              <div key={x.name} className="px-5 w-1/2 md:w-1/3 xl:w-1/3 mb-4">
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="upenn-resources" className="pt-16 pb-24">
        <div className="container mx-auto">
          <h2 className="mb-12">UPenn Resources</h2>
          <div className="flex flex-wrap justify-center">
            {upennResources.map((x) => (
              <div key={x.name} className="px-5 w-1/2 md:w-1/3 xl:w-1/3 mb-4">
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="other-resources" className="pt-16 pb-24 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="mb-12">Other Resources</h2>
          <div className="flex flex-wrap justify-center">
            {otherResources.map((x) => (
              <div key={x.name} className="px-5 w-1/2 md:w-1/3 xl:w-1/3 mb-4">
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
