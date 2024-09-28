type BaseRequest = () => Promise<Response>;

/**
 * Defines the possible server response states for asynchronous HTTP requests.
 * It is a discriminated union type, representing three distinct states:
 *   - 'loading': Indicates that the request is in progress.
 *   - 'success': Indicates that the request was successful, with an optional payload of type V.
 *   - 'error': Indicates that an error occurred during the request, with an optional error of type E.
 *
 * @typeParam V The type of data returned in case of success.
 * @typeParam E The type of error returned in case of failure.
 */
export type ServerResponse<V, E> =
  | {
      status: "loading";
    }
  | { status: "success"; data: V }
  | { status: "error"; error: E };

/**
 * Fetch function to handle asynchronous HTTP requests.
 * @param request Function that returns a Promise for the HTTP request.
 * @returns Promise containing ServerResponse with loading, success, or error status.
 */
const fetchHandler =
  <V, E = Error>(request: BaseRequest) =>
  async (): Promise<ServerResponse<V, E>> => {
    try {
      const response = await request();
      return { status: "success", data: await response.json() };
    } catch (error) {
      return { status: "error", error: error as E };
    }
  };

export default fetchHandler;
