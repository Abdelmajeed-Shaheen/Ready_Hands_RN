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

export const getWorkerAppliedJobs = () => {
  return async (dispatch) => {
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
};
export const applyToJob = (job_id) => {
  return async (dispatch) => {
    try {
      await instance.post(`jobs/${job_id}/apply/`);
      dispatch(getJobs());
      dispatch(getWorkerAppliedJobs());
    } catch (err) {
      console.log(err);
    }
  };
};
