//Api Link
import { instance } from "./instance";

//Action Type
import { SET_JOBS, GET_WORKER_APPLIED_JOBS } from "../actions/actionTypes";

export const getJobs = () => async (dispatch) => {
  try {
    const response = await instance.get("jobs/");
    const jobs = response.data;
    dispatch({
      type: SET_JOBS,
      payload: jobs,
    });
  } catch (error) {}
};

export const getWorkerAppliedJobs = () => async (dispatch) => {
  try {
    const res = await instance.get("worker/applied/jobs/");
    dispatch({
      type: GET_WORKER_APPLIED_JOBS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const applyToJob = (job_id) => async (dispatch) => {
  try {
    await instance.post(`jobs/${job_id}/apply/`);

    // instead of dispatching the following two actions
    // which makes two more requests to the backend to
    // get the entire list of data again,
    // the backend for this endpoint should return the
    // Applicant object, and here you just add it to the
    // lists in the reducers.
    // if you have other important things to do, you can
    // leave this and do it later when/if you get the chance.
    dispatch(getJobs());
    dispatch(getWorkerAppliedJobs());
  } catch (err) {
    console.log(err);
  }
};
