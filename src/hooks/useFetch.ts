import { useState, useEffect } from "react";

/**
 *
 * Add "inc", and queryOptions to url query Parameters
 * @param {string} url
 * @param {object} queryOptions
 * @returns {URL} URL with the query parameters
 */
const updateUrlQueryParameters = (
  url: string,
  queryOptions: object
): string => {
  const newUrl = new URL(url);
  //Only want name, picture, lacation and nacionatily properties
  newUrl.searchParams.set("inc", "name,picture,location,na");
  // Add more params from queryOptions
  Object.keys(queryOptions).forEach((key) => {
    newUrl.searchParams.set(key, queryOptions[key]);
  });

  return newUrl.href;
};

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface IOptions {
  body?: object;
  query?: object;
  method?: Methods;
}
export type IUsers = {
  firstName: String;
  lastName: String;
  country: String;
  picture: {
    large: String;
    medium: String;
    thumbnail: String;
  };
};

interface IState {
  response?: Array<IUsers> | string;
  error: Boolean;
  loading: Boolean;
}
export default (
  url: string,
  options: IOptions = { body: {}, query: {}, method: Methods.GET }
) => {
  const [data, setData] = useState<IState>({
    response: null,
    error: false,
    loading: true,
  });

  const mapResults = (results: Array<object>) =>
    results.map((result: any) => ({
      firstName: result.name.first,
      lastName: result.name.last,
      country: result.location.country,
      picture: result.picture,
    }));

  useEffect(() => {
    setData({ ...data, error: null, loading: true });
    const urlWithQueryParameters = updateUrlQueryParameters(url, options.query);
    console.log("href");
    fetch(urlWithQueryParameters, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
      },
      body:
        options.method !== Methods.GET
          ? JSON.stringify(options.body)
          : undefined,
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(response);
        try {
          setData({
            response: mapResults(data.results),
            error: !response.ok,
            loading: false,
          });
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => {
        //fetch throws an error only on network failure or if anything prevented the request from completing
        setData({
          response: { status: "network_failure" },
          error: true,
          loading: false,
        });
      });
  }, [setData, url, JSON.stringify(options)]);

  return data;
};
